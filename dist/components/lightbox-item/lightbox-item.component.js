import { Component, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { Video } from '../../models/video';
import { LightboxItemAnimations } from '../../models/lightbox-item/animations/lightbox-item-animations';
import { LightboxItemZoomAnimator } from '../../models/lightbox-item/animations/lightbox-item-zoom-animator';
import { Dimensions } from '../../models/dimensions.interface';
const ZOOM_PERCENT = 10;
const ZOOM_MAX_AFTER_WIDTH = 3;
export class LightboxItemComponent {
    constructor(_elementRef, config) {
        this._elementRef = _elementRef;
        this.config = config;
        this.toggleEvent = new EventEmitter();
        this._dragging = false;
        this._zoomMax = 100 + ZOOM_MAX_AFTER_WIDTH * ZOOM_PERCENT;
    }
    ngOnInit() {
        this.lightboxItemZoomAnimator = new LightboxItemZoomAnimator();
        this.item.isVideo = this.item instanceof Video;
        this.lightboxItemZoomAnimator.animation = { value: 'state1' };
    }
    open(containerDimensions, startCb, doneCb) {
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
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    }
    resetZoom(duration, containerDimensions, startCb, doneCb) {
        if (this.item.dimensions) {
            if (containerDimensions) {
                let width = 100 - ZOOM_PERCENT;
                while (containerDimensions.width * (width / 100) / this.item.dimensions.ratio > containerDimensions.height * 9 / 10) {
                    width -= ZOOM_PERCENT;
                }
                this._zoomMin = width;
                this._currentZoom = width;
                this.lightboxItemZoomAnimator.zoom(width, this.item.dimensions, this._getItemDimensions(), containerDimensions, duration, startCb, doneCb);
            }
            else {
                let width = 100 - ZOOM_PERCENT;
                while (this._getContainerDimensions().width * (width / 100) / this.item.dimensions.ratio > this._getContainerDimensions().height * 9 / 10) {
                    width -= ZOOM_PERCENT;
                }
                this._zoomMin = width;
                this._currentZoom = width;
                this.lightboxItemZoomAnimator.zoom(width, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), duration, startCb, doneCb);
            }
        }
        else {
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
    zoomIn(startCb, doneCb) {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(this._currentZoom + ZOOM_PERCENT, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom += ZOOM_PERCENT;
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    }
    zoomOut(startCb, doneCb) {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(this._currentZoom - ZOOM_PERCENT, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom -= ZOOM_PERCENT;
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    }
    feetToWidth(startCb, doneCb) {
        if (this.item.dimensions) {
            this.lightboxItemZoomAnimator.zoom(100, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration, startCb, doneCb);
            this._currentZoom = 100;
        }
        else {
            if (startCb) {
                startCb();
            }
            if (doneCb) {
                doneCb();
            }
        }
    }
    onClick(event) {
        if (!this.item.isVideo) {
            this.toggleEvent.emit();
        }
    }
    isFeetToWidth() {
        return this._currentZoom === 100;
    }
    isZoomMin() {
        return this._currentZoom <= this._zoomMin;
    }
    isZoomMax() {
        return this._currentZoom >= this._zoomMax;
    }
    onDrag(event) {
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
        }
        else {
            if (this._elementRef.nativeElement.clientWidth >= this._img.nativeElement.clientWidth) {
                this._dragPosition.endX = 0;
            }
            else {
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
            }
            else {
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
        }
        else {
            this._dragging = true;
        }
    }
    onLoad(event) {
        if (!this.item.dimensions) {
            this.item.dimensions = new Dimensions(this._img.nativeElement.naturalWidth, this._img.nativeElement.naturalHeight);
        }
    }
    getDefaultSrc() {
        if (this.item.src) {
            return this.item.src;
        }
        if (this.item.xsSrc) {
            return this.item.xsSrc;
        }
        if (this.item.smSrc) {
            return this.item.smSrc;
        }
        if (this.item.mdSrc) {
            return this.item.mdSrc;
        }
        if (this.item.lgSrc) {
            return this.item.lgSrc;
        }
        if (this.item.xlSrc) {
            return this.item.xlSrc;
        }
    }
    resize() {
        if (this.isZoomMin()) {
            this.resetZoom(0);
        }
        else {
            this.lightboxItemZoomAnimator.zoom(this._currentZoom, this.item.dimensions, this._getItemDimensions(), this._getContainerDimensions(), this.config.animations.zoomIn.duration);
        }
    }
    _getContainerDimensions() {
        return new Dimensions(this._elementRef.nativeElement.clientWidth, this._elementRef.nativeElement.clientHeight);
    }
    _getItemDimensions() {
        return new Dimensions(this._img.nativeElement.clientWidth, this._img.nativeElement.clientHeight);
    }
}
LightboxItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'lightbox-item',
                template: `
      <div
          draggable="true"
          (tap)="onClick($event)"
          (pan)="onDrag($event)"
          [@lightboxItemZoom]="lightboxItemZoomAnimator.animation"
          (@lightboxItemZoom.start)="lightboxItemZoomAnimator.animationStart($event)"
          (@lightboxItemZoom.done)="lightboxItemZoomAnimator.animationDone($event)">
          <img #img lazy-loading
              draggable="false"
              [src]="getDefaultSrc()"
              [xs-src]="item.xsSrc"
              [sm-src]="item.smSrc"
              [md-src]="item.mdSrc"
              [lg-src]="item.lgSrc"
              [xl-src]="item.xlSrc"
              [xs-breakpoint]="item.xsBreakpoint"
              [sm-breakpoint]="item.smBreakpoint"
              [md-breakpoint]="item.mdBreakpoint"
              [lg-breakpoint]="item.lgBreakpoint"
              (load)="onLoad($event)"/>
      </div>
    `,
                styles: [`
      :host{z-index:1;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;flex:0 0 100%;pointer-events:none}:host>div{pointer-events:auto;position:relative}:host img{position:relative;height:auto;width:100%}
    `],
                animations: [LightboxItemAnimations.zoomAnimation]
            },] },
];
/** @nocollapse */
LightboxItemComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: LightboxConfigurationService, },
];
LightboxItemComponent.propDecorators = {
    "item": [{ type: Input, args: ['item',] },],
    "toggleEvent": [{ type: Output },],
    "_img": [{ type: ViewChild, args: ['img',] },],
};
//# sourceMappingURL=lightbox-item.component.js.map