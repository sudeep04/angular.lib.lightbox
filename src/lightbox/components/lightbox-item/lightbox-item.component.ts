
import { Component, Input, ElementRef, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';
import { Item } from '../../models/item';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { Video } from '../../models/video';
import { DragPosition } from '../../models/drag-position.interface';
import { LightboxItemAnimations } from '../../models/lightbox-item/animations/lightbox-item-animations';
import { LightboxItemZoomAnimator } from '../../models/lightbox-item/animations/lightbox-item-zoom-animator';
import { Dimensions } from '../../models/dimensions.interface';

const ZOOM_PERCENT = 10;
const ZOOM_MAX_AFTER_WIDTH = 3;

@Component({
    selector: 'lightbox-item',
    templateUrl: 'lightbox-item.component.html',
    styleUrls: ['lightbox-item.component.scss'],
    animations: [LightboxItemAnimations.zoomAnimation]
})
export class LightboxItemComponent implements OnInit {

    @Input('item') public item: Item;

    @Output() public toggleEvent = new EventEmitter();

    public lightboxItemZoomAnimator: LightboxItemZoomAnimator;

    private _dragPosition: DragPosition;

    private _dragging = false;

    private _zoomMin: number;

    private _zoomMax: number = 100 + ZOOM_MAX_AFTER_WIDTH * ZOOM_PERCENT;

    private _currentZoom: number;

    @ViewChild('img') private _img: ElementRef;

    constructor(
        private readonly _elementRef: ElementRef,
        public config: LightboxConfigurationService
    ) { }

    public ngOnInit(): void {
        this.lightboxItemZoomAnimator = new LightboxItemZoomAnimator();
        this.item.isVideo = this.item instanceof Video;
        this.lightboxItemZoomAnimator.animation = { value: 'state1' };
    }

    public open(containerDimensions: Dimensions, startCb?: () => void, doneCb?: () => void): void {

        if (this.item.dimensions) {
            let width = 100 - ZOOM_PERCENT;

            while (containerDimensions.width * (width / 100) / this.item.dimensions.ratio > containerDimensions.height * 9 / 10) {

                width -= ZOOM_PERCENT;
            }

            this._zoomMin = width;
            this._currentZoom = width;
            this.lightboxItemZoomAnimator.origin(this.item.dimensions, this.item.position, this._getContainerDimensions(), startCb, () => {

                this.resetZoom(this.config.animations.itemOpen.duration, containerDimensions, null, doneCb);
            });
        } else {

            if (startCb) {

                startCb();
            }

            if (doneCb) {

                doneCb();
            }
        }
    }

    public resetZoom(duration: number, containerDimensions?: Dimensions, startCb?: () => void, doneCb?: () => void): void {

        if (this.item.dimensions) {

            if (containerDimensions) {
                let width = 100 - ZOOM_PERCENT;

                while (containerDimensions.width * (width / 100) / this.item.dimensions.ratio > containerDimensions.height * 9 / 10) {

                    width -= ZOOM_PERCENT;
                }

                this._zoomMin = width;
                this._currentZoom = width;

                this.lightboxItemZoomAnimator.zoom(width, this.item.dimensions, this._getItemDimensions(), containerDimensions, duration, startCb, doneCb);
            } else {
                let width = 100 - ZOOM_PERCENT;

                while (this._getContainerDimensions().width * (width / 100) / this.item.dimensions.ratio > this._getContainerDimensions().height * 9 / 10) {

                    width -= ZOOM_PERCENT;
                }

                this._zoomMin = width;
                this._currentZoom = width;

                this.lightboxItemZoomAnimator.zoom(width, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), duration, startCb, doneCb);
            }
        } else {

            if (startCb) {

                startCb();
            }

            if (doneCb) {

                doneCb();
            }

            this.item.$dimensions.filter((value) => value !== undefined).first().subscribe(() => {

                this.resetZoom(0);
            });
        }
    }

    public zoomIn(startCb?: () => void, doneCb?: () => void): void {

        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(
                this._currentZoom + ZOOM_PERCENT,
                this.item.dimensions,
                this._getItemDimensions(),
                this._getContainerDimensions(),
                this.config.animations.zoomIn.duration,
                startCb,
                doneCb);

            this._currentZoom += ZOOM_PERCENT;
        } else {

            if (startCb) {

                startCb();
            }

            if (doneCb) {

                doneCb();
            }
        }
    }

    public zoomOut(startCb?: () => void, doneCb?: () => void): void {

        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(
                this._currentZoom - ZOOM_PERCENT,
                this.item.dimensions,
                this._getItemDimensions(),
                this._getContainerDimensions(),
                this.config.animations.zoomIn.duration,
                startCb,
                doneCb);

            this._currentZoom -= ZOOM_PERCENT;
        } else {

            if (startCb) {

                startCb();
            }

            if (doneCb) {

                doneCb();
            }
        }
    }

    public feetToWidth(startCb?: () => void, doneCb?: () => void): void {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(100, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom = 100;
        } else {

            if (startCb) {

                startCb();
            }

            if (doneCb) {

                doneCb();
            }
        }
    }

    public onClick(event: any): void {

        if (!this.item.isVideo) {

            this.toggleEvent.emit();
        }
    }

    public isFeetToWidth(): boolean {
        return this._currentZoom === 100;
    }

    public isZoomMin(): boolean {
        return this._currentZoom <= this._zoomMin;
    }

    public isZoomMax(): boolean {
        return this._currentZoom >= this._zoomMax;
    }

    public onDrag(event: any) {

        if (!this._dragging) {
            if (this._currentZoom === this._zoomMin || (this._elementRef.nativeElement.clientWidth >=
                this._img.nativeElement.clientWidth && this._elementRef.nativeElement.clientHeight >= this._img.nativeElement.clientHeight)) {

                return;
            }
            this._img.nativeElement.style.cursor = 'move';
            this._dragPosition = {
                startX: event.deltaX,
                startY: event.deltaY
            };
        } else {
            if (this._elementRef.nativeElement.clientWidth >= this._img.nativeElement.clientWidth) {
                this._dragPosition.endX = 0;
            } else {
                this._dragPosition.endX = this.lightboxItemZoomAnimator.animation.params.offsetLeft - this._dragPosition.startX + event.deltaX;
                if (this._dragPosition.endX > (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2) {
                    this._dragPosition.endX = (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2;
                }
                if (this._dragPosition.endX < -1 * (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2) {
                    this._dragPosition.endX = -1 * (this._img.nativeElement.clientWidth - this._elementRef.nativeElement.clientWidth) / 2;
                }
            }
            if (this._elementRef.nativeElement.clientHeight >= this._img.nativeElement.clientHeight) {
                this._dragPosition.endY = 0;
            } else {
                this._dragPosition.endY = this.lightboxItemZoomAnimator.animation.params.offsetTop - this._dragPosition.startY + event.deltaY;
                if (this._dragPosition.endY > (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2) {
                    this._dragPosition.endY = (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2;
                }
                if (this._dragPosition.endY < -1 * (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2) {
                    this._dragPosition.endY = -1 * (this._img.nativeElement.clientHeight - this._elementRef.nativeElement.clientHeight) / 2;
                }
            }

            this._img.nativeElement.parentNode.style.left = this._dragPosition.endX + 'px';
            this._img.nativeElement.parentNode.style.top = this._dragPosition.endY + 'px';
        }
        if (event.isFinal) {

            this.lightboxItemZoomAnimator.animation.params.offsetLeft = this._dragPosition.endX;
            this.lightboxItemZoomAnimator.animation.params.offsetTop = this._dragPosition.endY;
            this._img.nativeElement.style.cursor = 'default';
            this._dragging = false;
        } else {

            this._dragging = true;
        }
    }

    protected onLoad(event: Event): void {

        if (!this.item.dimensions) {

            this.item.dimensions = new Dimensions(this._img.nativeElement.naturalWidth, this._img.nativeElement.naturalHeight);
        }
    }

    public getDefaultSrc(): string {
        if(this.item.src) {
            return this.item.src;
        }
        if(this.item.xsSrc) {
            return this.item.xsSrc;
        }
        if(this.item.smSrc) {
            return this.item.smSrc;
        }
        if(this.item.mdSrc) {
            return this.item.mdSrc;
        }
        if(this.item.lgSrc) {
            return this.item.lgSrc;
        }
        if(this.item.xlSrc) {
            return this.item.xlSrc;
        }
    }

    public resize(): void {

        if (this.isZoomMin()) {
            this.resetZoom(0);
        } else {
            this.lightboxItemZoomAnimator.zoom(
                this._currentZoom,
                this.item.dimensions,
                this._getItemDimensions(),
                this._getContainerDimensions(),
                this.config.animations.zoomIn.duration);
        }
    }

    private _getContainerDimensions(): Dimensions {
        return new Dimensions(this._elementRef.nativeElement.clientWidth, this._elementRef.nativeElement.clientHeight);
    }

    private _getItemDimensions(): Dimensions {
        return new Dimensions(this._img.nativeElement.clientWidth, this._img.nativeElement.clientHeight);
    }
}
