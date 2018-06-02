import { Component, Output, EventEmitter, Input, ViewChildren, QueryList, ElementRef, ViewChild, OnInit, Inject, InjectionToken } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';
import { Item } from '../../models/item';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ThumbnailsAnimations } from '../../models/thumbnails/animations/thumbnails-animations';
import { ThumbnailsVisibilityAnimator } from '../../models/thumbnails/animations/thumbnails-visibility-animator';
import { ThumbnailsSliceAnimator } from '../../models/thumbnails/animations/thumbnails-slice-animator';

export const WINDOW = new InjectionToken('Window');
export function _window() { return window; }

@Component({
    selector: 'lightbox-thumbnails',
    templateUrl: 'lightbox-thumbnails.component.html',
    styleUrls: ['lightbox-thumbnails.component.scss'],
    animations: [ThumbnailsAnimations.visibilityAnimation, ThumbnailsAnimations.sliceAnimation],
    providers: [
        { provide: WINDOW, useFactory: _window }
    ],
    host: {
        '[@thumbnailsVisibility]': 'thumbnailsVisibilityAnimator.animation',
        '(@thumbnailsVisibility.start)': 'thumbnailsVisibilityAnimator.animationStart($event)',
        '(@thumbnailsVisibility.done)': 'thumbnailsVisibilityAnimator.animationDone($event)'
    }
})
export class LightboxThumbnailsComponent implements OnInit {

    @Input('items') public items: Item[] = [];

    @Output() public selectEvent = new EventEmitter();

    public thumbnailsVisibilityAnimator: ThumbnailsVisibilityAnimator;

    public thumbnailsSliceAnimator: ThumbnailsSliceAnimator;

    public activeItem: Item;

    public thumbnailsWidth: string;

    public thumbnailsHeight: string;

    public thickness: number;

    @ViewChild('thumnailsContainer') private _thumnailsContainerRef: ElementRef;

    @ViewChild('thumnailsList') private _thumnailsListRef: ElementRef;

    @ViewChildren('thumnails') private _thumnailsRef: QueryList<ElementRef>;

    private _state: 'opened' | 'closed' = 'closed';

    constructor(
        private readonly _lightboxConfigurationService: LightboxConfigurationService,
        @Inject(WINDOW) public readonly _win: any
    ) { }

    public ngOnInit(): void {

        if (this._win.innerWidth <= 767) {

            this.thickness = 80;
        } else if (this._win.innerWidth <= 1023) {

            this.thickness = 120;
        } else if (this._win.innerWidth > 1023) {

            this.thickness = 170;
        }
        this.checkThumbnailsDimensions();
        this.thumbnailsVisibilityAnimator = new ThumbnailsVisibilityAnimator(this.direction, this.thickness);
        this.thumbnailsSliceAnimator = new ThumbnailsSliceAnimator(this.direction);
    }

    public get direction(): 'vertical' | 'horizontal' {

        return this.config.controls.thumbnails.position === 'left' || this.config.controls.thumbnails.position === 'right' ? 'vertical' : 'horizontal';
    }

    public get config(): LightboxConfigurationService {

        return this._lightboxConfigurationService;
    }

    public open(): void {

        if (!this.config.controls.thumbnails.disable && this._state !== 'opened') {

            this._state = 'opened';
            this.thumbnailsVisibilityAnimator.show(this.config.animations.thumbnailsShow.duration, null, null);
        }
    }

    public close(): void {

        if (!this.config.controls.thumbnails.disable && this._state !== 'closed') {

            this._state = 'closed';
            this.thumbnailsVisibilityAnimator.hide(this.config.animations.thumbnailsHide.duration, null, null);
        }
    }

    public toggle(): void {

        if (!this.config.controls.thumbnails.disable) {

            if (this._state === 'opened') {

                this.close();
            } else {

                this.open();
            }
        }
    }

    public resize(): void {

        if (this._win.innerWidth <= 767 && this.thickness !== 80) {

            this.thickness = 80;
            this._refreshThickness();
        } else if (this._win.innerWidth <= 1023 && this._win.innerWidth > 767 && this.thickness !== 120) {

            this.thickness = 120;
            this._refreshThickness();
        } else if (this._win.innerWidth > 1023 && this.thickness !== 170) {

            this.thickness = 170;
            this._refreshThickness();
        }

        setTimeout(() => {

            this._animateSlice(this.activeItem, 0);
        }, 0);
    }

    public onTap(item: Item): void {

        if (item !== this.activeItem) {
            this.selectEvent.emit(item);
        }
    }

    public selectItem(item: Item): void {

        if (!this.config.controls.thumbnails.disable) {

            this.activeItem = item;
            this._animateSlice(this.activeItem, this.config.animations.itemSlice.duration);
        }
    }

    public onWheel(event: any): void {

        let top = this._thumnailsListRef.nativeElement.offsetTop - 12;

        if (event.deltaY > 0) {

            top -= 50;
        } else {

            top += 50;
        }

        top = this._getTop(top);

        this._thumnailsListRef.nativeElement.style.top = top + 'px';
        this.thumbnailsSliceAnimator.animation.params.top = top;
    }

    public onSwipe(event: any) {

        if ((event.type === 'swipeleft' || event.type === 'swiperight') && this.direction === 'horizontal') {

            let left = this._thumnailsListRef.nativeElement.offsetLeft - 12;

            left += event.deltaX;

            this.thumbnailsSliceAnimator.slice(this._getLeft(left), this.config.animations.thumbnailsSlice.duration);
        }

        if ((event.type === 'swipeup' || event.type === 'swipedown') && this.direction === 'vertical') {

            let top = this._thumnailsListRef.nativeElement.offsetTop - 12;

            top += event.deltaY;

            this.thumbnailsSliceAnimator.slice(this._getTop(top), this.config.animations.thumbnailsSlice.duration);
        }
    }

    public getItemSrc(item: Item): string {

        if (item.src) { return item.src; }
        if (item.xsSrc) { return item.xsSrc; }
        if (item.smSrc) { return item.smSrc; }
        if (item.mdSrc) { return item.mdSrc; }
        if (item.lgSrc) { return item.lgSrc; }
        if (item.xlSrc) { return item.xlSrc; }

        return '';
    }

    public checkDirection(): void {

        if (this.direction === 'vertical') {
            this.thumbnailsSliceAnimator.setDirection('vertical');
            this.thumbnailsVisibilityAnimator.setDirection('vertical');
        } else {

            this.thumbnailsSliceAnimator.setDirection('horizontal');
            this.thumbnailsVisibilityAnimator.setDirection('horizontal');
        }
    }

    public checkThumbnailsDimensions(): void {

        if (this.direction === 'vertical') {

            this.thumbnailsWidth = this.thickness + 'px';
            this.thumbnailsHeight = 'auto';
        } else {

            this.thumbnailsWidth = 'auto';
            this.thumbnailsHeight = this.thickness + 'px';
        }
    }

    private _refreshThickness(): void {

        this.thumbnailsVisibilityAnimator.setThickness(0, this.thickness);
        this.checkThumbnailsDimensions();
    }

    private _animateSlice(item: Item, duration: number): void {

        const activeItemRef = this._thumnailsRef.toArray()[this.items.indexOf(item)];

        if (this.direction === 'horizontal') {

            const left = Math.round(((this._thumnailsContainerRef.nativeElement.clientWidth - activeItemRef.nativeElement.clientWidth) / 2) - activeItemRef.nativeElement.offsetLeft);

            this.thumbnailsSliceAnimator.slice(this._getLeft(left), duration);
        } else {

            const top = Math.round(((this._thumnailsContainerRef.nativeElement.clientHeight - activeItemRef.nativeElement.clientHeight) / 2) - activeItemRef.nativeElement.offsetTop);

            this.thumbnailsSliceAnimator.slice(this._getTop(top), duration);
        }
    }

    private _getTop(value: number): number {

        let top = value;

        if (top < (this._thumnailsContainerRef.nativeElement.clientHeight - this._thumnailsListRef.nativeElement.clientHeight + 12)) {

            top = this._thumnailsContainerRef.nativeElement.clientHeight - this._thumnailsListRef.nativeElement.clientHeight + 12;
        }

        if (top > 0) {

            top = 0;
        }

        return top;
    }

    private _getLeft(value: number): number {

        let left = value;

        if (left < (this._thumnailsContainerRef.nativeElement.clientWidth - this._thumnailsListRef.nativeElement.clientWidth + 12)) {

            left = this._thumnailsContainerRef.nativeElement.clientWidth - this._thumnailsListRef.nativeElement.clientWidth + 12;
        }

        if (left > 0) {

            left = 0;
        }

        return left;
    }
}
