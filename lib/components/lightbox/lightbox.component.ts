import { Component, ViewChild, QueryList, ViewChildren, HostListener, OnInit, ViewEncapsulation, ElementRef, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent, query, animateChild } from '@angular/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {  } from '@types/youtube';
import { Pagination } from '../../models/pagination.interface';
import { LightboxToolbarComponent } from '../lightbox-toolbar/lightbox-toolbar.component';
import { LightboxThumbnailsComponent } from '../lightbox-thumbnails/lightbox-thumbnails.component';
import { LightboxZoomComponent } from '../lightbox-zoom/lightbox-zoom.component';
import { LightboxButtonComponent } from '../lightbox-button/lightbox-button.component';
import { Item } from '../../models/item';
import { LightboxItemComponent } from '../lightbox-item/lightbox-item.component';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { Video } from '../../models/video';
import { Position } from '../../models/position.interface';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LightboxSliceAnimator } from '../../models/lightbox/animations/lightbox-slice-animator';
import { LightboxAnimations } from '../../models/lightbox/animations/lightbox-animations';
import { BackgroundVisibilityAnimator } from '../../models/lightbox/animations/background-visibility-animator';
import { Dimensions } from '../../models/dimensions.interface';

@Component({
    selector: 'lightbox',
    templateUrl: 'lightbox.component.html',
    styleUrls: ['lightbox.component.scss'],
    animations: [LightboxAnimations.visibilityAnimation, LightboxAnimations.sliceAnimation],
    host: {
        '[style.pointer-events]': '_pointerEvents',
    },
    encapsulation: ViewEncapsulation.None
})
export class LightboxComponent implements OnInit, OnDestroy {

    public pagination: Pagination = { current: 0, count: 0 };

    public displayZoom: 'hidden' | 'visible' = 'hidden';

    @ViewChild('background') public background: ElementRef;

    @ViewChild('toolbar') public toolbar: LightboxToolbarComponent;

    @ViewChild('thumbnails') public thumbnails: LightboxThumbnailsComponent;

    @ViewChild('lightboxZoom') public lightboxZoom: LightboxZoomComponent;

    public hasNext: boolean;

    public hasPrevious: boolean;

    public displayYoutube = false;

    public items: { [container: string]: Item[] } = {};

    public activeItem: Item | undefined;

    public lightboxSliceAnimator: LightboxSliceAnimator;

    public backgroundVisibilityAnimator: BackgroundVisibilityAnimator;

    public state: 'opening' | 'opened' | 'closing' | 'closed' = 'closed';

    public disableZoomIn: boolean;

    public disableZoomOut: boolean;

    public disableResetZoom: boolean;

    public disableFeetToWidth: boolean;

    @ViewChild('itemList') private _itemList: ElementRef;

    @ViewChildren('lightboxItem') private _itemsRef: QueryList<LightboxItemComponent>;

    private _stateSubscription: Subscription;

    private _stateBehaviorSubject: BehaviorSubject<'opening' | 'opened' | 'closing' | 'closed'> = new BehaviorSubject<'opening' | 'opened' | 'closing' | 'closed'>('closed');

    public get $state(): Observable<'opening' | 'opened' | 'closing' | 'closed'> {

        return this._stateBehaviorSubject.asObservable();
    }

    private _ytPlayer: YT.Player;

    private _pointerEvents: string = 'none';

    public get config(): LightboxConfigurationService {

        return this._lightboxConfigurationService;
    }

    constructor(
        private readonly _lightboxConfigurationService: LightboxConfigurationService
    ) { }

    public ngOnInit(): void {

        this.lightboxSliceAnimator = new LightboxSliceAnimator();
        this.backgroundVisibilityAnimator = new BackgroundVisibilityAnimator();
        this._stateSubscription = this.$state.subscribe((value: 'opening' | 'opened' | 'closing' | 'closed') => {

            this.state = value;
        });
    }

    public ngOnDestroy(): void {

        this._stateSubscription.unsubscribe();
    }

    public openItem(item: Item): void {

        if (this.state === 'closed') {

            this.activeItem = item;
            this._pointerEvents = 'auto';

            setTimeout(() => {

                const activeItemIndex = this._itemIndex(this.activeItem);
                const activeItemRef = this._itemRef(activeItemIndex);

                this.backgroundVisibilityAnimator.show(this.config.animations.backgroundFadeIn.opacity, this.config.animations.backgroundFadeIn.duration);
                this.thumbnails.checkDirection();
                this.thumbnails.checkThumbnailsDimensions();
                this._openControls();
                this._updatePagination();
                this._initItems();
                this.lightboxSliceAnimator.slice(-1 * activeItemIndex * 100, 0, () => {
                    activeItemRef.open(this._getContainerDimensionsAfterOpen(), () => {

                        this.displayYoutube = false;
                        this._stateBehaviorSubject.next('opening');
                        this._checkZoom(activeItemRef);
                    }, () => {

                        this._checkYoutube(item);
                        this._stateBehaviorSubject.next('opened');
                    });
                    this.thumbnails.selectItem(this.activeItem);
                });
            }, 0);
        }
    }

    public getYoutubeVideoId(): string {

        return (this.activeItem as Video).youtubeVieoId;
    }

    public addItem(item: Item): void {

        if (!this.items[item.container]) {

            this.items[item.container] = [];
        }

        this.items[item.container].push(item);
    }

    public thumbnailsToggle() {

        this.thumbnails.toggle();
    }

    public removeItem(item: Item): void {

        const index = this._itemIndex(item);

        if (index > -1) {
            this.items[item.container].splice(index, 1);
        }
    }

    public onToggle(): void {

        this.toolbar.toggle();
        this.lightboxZoom.toggle();
        this.thumbnails.toggle();
    }

    public onClose(event: any): void {

        if ((!event || event.target === this.background.nativeElement) && this.state === 'opened') {

            this.activeItem = undefined;
            this._stateBehaviorSubject.next('closing');
            this.displayYoutube = false;
            this.backgroundVisibilityAnimator.hide(this.config.animations.backgroundFadeOut.duration, null, () => {
                this._pointerEvents = 'none';
                this._stateBehaviorSubject.next('closed');
            });
            this._closeControls();
            if (this._ytPlayer) {

                this._ytPlayer.stopVideo();
            }
        }
    }

    public selectItem(item: Item): void {

        if (item !== this.activeItem) {

            if(this.activeItem) {

                const lastActiveItemIndex = this._itemIndex(this.activeItem);
                const lastActiveItemRef = this._itemRef(lastActiveItemIndex);
                lastActiveItemRef.resetZoom(0);
            }
            this.activeItem = item;
            const activeItemIndex = this._itemIndex(this.activeItem);
            const activeItemRef = this._itemRef(activeItemIndex);
            activeItemRef.resetZoom(0, null, () => {
                this.displayYoutube = false;
            }, () => {
                this.lightboxSliceAnimator.slice(-1 * activeItemIndex * 100, this.config.animations.itemSlice.duration, null, () => {

                    this._checkYoutube(item);
                });
            });

            this._updatePagination();
            this.thumbnails.selectItem(this.activeItem);
            this._checkZoom(activeItemRef);
        }

    }

    public onNext() {

        const activeItemIndex = this._itemIndex(this.activeItem!);

        if (activeItemIndex >= 0 && activeItemIndex < this.items[this.activeItem!.container].length - 1) {

            const item = this.items[this.activeItem!.container][activeItemIndex + 1];
            this.selectItem(item);
        }
    }

    public onLast() {

        const activeItemIndex = this._itemIndex(this.activeItem!);

        if (activeItemIndex >= 0 && activeItemIndex < this.items[this.activeItem!.container].length - 1) {

            const item = this.items[this.activeItem!.container][this.items[this.activeItem!.container].length - 1];
            this.selectItem(item);
        }
    }

    public onFirst() {

        const activeItemIndex = this._itemIndex(this.activeItem!);

        if (activeItemIndex > 0) {

            const item = this.items[this.activeItem!.container][0];
            this.selectItem(item);
        }
    }

    public onPrevious() {

        const activeItemIndex = this._itemIndex(this.activeItem!);

        if (activeItemIndex > 0) {

            const item = this.items[this.activeItem!.container][activeItemIndex - 1];
            this.selectItem(item);
        }
    }

    public zoomIn() {
        const activeItemRef = this._itemRef(this._itemIndex(this.activeItem!));
        activeItemRef.zoomIn(null, () => {

            this._checkZoom(activeItemRef);
        });
    }

    public zoomOut() {
        const activeItemRef = this._itemRef(this._itemIndex(this.activeItem!));
        activeItemRef.zoomOut(null, () => {

            this._checkZoom(activeItemRef);
        });
    }

    public resetZoom() {

        const activeItemRef = this._itemRef(this._itemIndex(this.activeItem!));
        activeItemRef.resetZoom(this.config.animations.resetZoom.duration, null, () => {

            this._checkZoom(activeItemRef);
        });
    }

    public feetToWidth() {

        const activeItemRef = this._itemRef(this._itemIndex(this.activeItem!));
        activeItemRef.feetToWidth(null, () => {

            this._checkZoom(activeItemRef);
        });
    }

    public swipe(action: string) {
        const itemIndex = this._itemIndex(this.activeItem);
        const itemRef = this._itemRef(itemIndex);
        if (!itemRef.isZoomMin()) {

            return;
        }
        switch (action) {
            case 'swipeleft':
                this.onNext();
                break;
            case 'swiperight':
                this.onPrevious();
                break;
        }
    }

    public onReady(event: YT.PlayerEvent): void {

        this._ytPlayer = event.target;
    }

    public onError(event: YT.OnErrorEvent) {
        // on error
    }

    public onChange(event: any): void {

        switch (event.data) {
            case YT.PlayerState.PLAYING:
                this._closeControls();
                break;
            case YT.PlayerState.PAUSED:
                this._openControls();
                break;
        }
    }

    private _initItems(): void {

        this.items[this.activeItem.container].forEach((element: Item) => {

            if (element !== this.activeItem) {

                const elementIndex = this._itemIndex(element);
                const elementRef = this._itemRef(elementIndex);
                elementRef.resetZoom(0);
            }
        });
    }

    private _openControls(): void {

        this.toolbar.open();
        this.lightboxZoom.open();
        this.thumbnails.open();
    }

    private _closeControls(): void {

        this.toolbar.close();
        this.lightboxZoom.close();
        this.thumbnails.close();
    }

    private _getContainerDimensionsAfterOpen(): Dimensions {

        let containerDimensions: Dimensions;

        if (!this.config.controls.thumbnails.disable) {

            if (this.thumbnails.direction === 'horizontal') {
                containerDimensions = new Dimensions(this._itemList.nativeElement.clientWidth, this._itemList.nativeElement.clientHeight - this.thumbnails.thickness - 64);
            } else {
                containerDimensions = new Dimensions(this._itemList.nativeElement.clientWidth - this.thumbnails.thickness, this._itemList.nativeElement.clientHeight - 64);
            }
        } else {
            containerDimensions = new Dimensions(this._itemList.nativeElement.clientWidth, this._itemList.nativeElement.clientHeight - 64);
        }

        return containerDimensions;
    }

    private _updatePagination(): void {

        const activeItemIndex = this._itemIndex(this.activeItem);
        this.pagination.current = activeItemIndex + 1;
        this.pagination.count = this.items[this.activeItem.container].length;
    }

    private _checkYoutube(item: Item) {

        setTimeout(() => {

            if (item !== this.activeItem) {

                this.displayYoutube = false;
            } else {
                if (item.isVideo) {

                    this.displayYoutube = true;
                } else {

                    this.displayYoutube = false;
                }
            }
        }, 0);
    }

    private _itemRef(index: number): LightboxItemComponent {

        return this._itemsRef.toArray()[index];
    }

    private _itemIndex(item: Item): number {

        return this.items[item.container].indexOf(item);
    }

    @HostListener('window:resize', ['$event'])
    private _onResize(event: any) {

        if (this.activeItem) {

            const activeItemRef = this._itemRef(this._itemIndex(this.activeItem!));

            if (!this.activeItem.isVideo) {

                activeItemRef.resize();
            }
            this._checkZoom(activeItemRef);
            this.thumbnails.resize();
        }
    }

    private _checkZoom(item: LightboxItemComponent) {

        if (this.activeItem.isVideo) {

            this.displayZoom = 'hidden';
        } else {

            this.displayZoom = 'visible';
        }

        this.disableZoomIn = item.isZoomMax();
        this.disableZoomOut = item.isZoomMin();
        this.disableResetZoom = item.isZoomMin();
        this.disableFeetToWidth = item.isFeetToWidth();
    }
}
