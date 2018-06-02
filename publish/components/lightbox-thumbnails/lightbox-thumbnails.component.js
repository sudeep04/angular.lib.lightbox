import { Component, Output, EventEmitter, Input, ViewChildren, QueryList, ElementRef, ViewChild, Inject, InjectionToken } from '@angular/core';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ThumbnailsAnimations } from '../../models/thumbnails/animations/thumbnails-animations';
import { ThumbnailsVisibilityAnimator } from '../../models/thumbnails/animations/thumbnails-visibility-animator';
import { ThumbnailsSliceAnimator } from '../../models/thumbnails/animations/thumbnails-slice-animator';
export const WINDOW = new InjectionToken('Window');
export function _window() { return window; }
export class LightboxThumbnailsComponent {
    constructor(_lightboxConfigurationService, _win) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this._win = _win;
        this.items = [];
        this.selectEvent = new EventEmitter();
        this._state = 'closed';
    }
    ngOnInit() {
        if (this._win.innerWidth <= 767) {
            this.thickness = 80;
        }
        else if (this._win.innerWidth <= 1023) {
            this.thickness = 120;
        }
        else if (this._win.innerWidth > 1023) {
            this.thickness = 170;
        }
        this.checkThumbnailsDimensions();
        this.thumbnailsVisibilityAnimator = new ThumbnailsVisibilityAnimator(this.direction, this.thickness);
        this.thumbnailsSliceAnimator = new ThumbnailsSliceAnimator(this.direction);
    }
    get direction() {
        return this.config.controls.thumbnails.position === 'left' || this.config.controls.thumbnails.position === 'right' ? 'vertical' : 'horizontal';
    }
    get config() {
        return this._lightboxConfigurationService;
    }
    open() {
        if (!this.config.controls.thumbnails.disable && this._state !== 'opened') {
            this._state = 'opened';
            this.thumbnailsVisibilityAnimator.show(this.config.animations.thumbnailsShow.duration, null, null);
        }
    }
    close() {
        if (!this.config.controls.thumbnails.disable && this._state !== 'closed') {
            this._state = 'closed';
            this.thumbnailsVisibilityAnimator.hide(this.config.animations.thumbnailsHide.duration, null, null);
        }
    }
    toggle() {
        if (!this.config.controls.thumbnails.disable) {
            if (this._state === 'opened') {
                this.close();
            }
            else {
                this.open();
            }
        }
    }
    resize() {
        if (this._win.innerWidth <= 767 && this.thickness !== 80) {
            this.thickness = 80;
            this._refreshThickness();
        }
        else if (this._win.innerWidth <= 1023 && this._win.innerWidth > 767 && this.thickness !== 120) {
            this.thickness = 120;
            this._refreshThickness();
        }
        else if (this._win.innerWidth > 1023 && this.thickness !== 170) {
            this.thickness = 170;
            this._refreshThickness();
        }
        setTimeout(() => {
            this._animateSlice(this.activeItem, 0);
        }, 0);
    }
    onTap(item) {
        if (item !== this.activeItem) {
            this.selectEvent.emit(item);
        }
    }
    selectItem(item) {
        if (!this.config.controls.thumbnails.disable) {
            this.activeItem = item;
            this._animateSlice(this.activeItem, this.config.animations.itemSlice.duration);
        }
    }
    onWheel(event) {
        let top = this._thumnailsListRef.nativeElement.offsetTop - 12;
        if (event.deltaY > 0) {
            top -= 50;
        }
        else {
            top += 50;
        }
        top = this._getTop(top);
        this._thumnailsListRef.nativeElement.style.top = top + 'px';
        this.thumbnailsSliceAnimator.animation.params.top = top;
    }
    onSwipe(event) {
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
    getItemSrc(item) {
        if (item.src) {
            return item.src;
        }
        if (item.xsSrc) {
            return item.xsSrc;
        }
        if (item.smSrc) {
            return item.smSrc;
        }
        if (item.mdSrc) {
            return item.mdSrc;
        }
        if (item.lgSrc) {
            return item.lgSrc;
        }
        if (item.xlSrc) {
            return item.xlSrc;
        }
        return '';
    }
    checkDirection() {
        if (this.direction === 'vertical') {
            this.thumbnailsSliceAnimator.setDirection('vertical');
            this.thumbnailsVisibilityAnimator.setDirection('vertical');
        }
        else {
            this.thumbnailsSliceAnimator.setDirection('horizontal');
            this.thumbnailsVisibilityAnimator.setDirection('horizontal');
        }
    }
    checkThumbnailsDimensions() {
        if (this.direction === 'vertical') {
            this.thumbnailsWidth = this.thickness + 'px';
            this.thumbnailsHeight = 'auto';
        }
        else {
            this.thumbnailsWidth = 'auto';
            this.thumbnailsHeight = this.thickness + 'px';
        }
    }
    _refreshThickness() {
        this.thumbnailsVisibilityAnimator.setThickness(0, this.thickness);
        this.checkThumbnailsDimensions();
    }
    _animateSlice(item, duration) {
        const activeItemRef = this._thumnailsRef.toArray()[this.items.indexOf(item)];
        if (this.direction === 'horizontal') {
            const left = Math.round(((this._thumnailsContainerRef.nativeElement.clientWidth - activeItemRef.nativeElement.clientWidth) / 2) - activeItemRef.nativeElement.offsetLeft);
            this.thumbnailsSliceAnimator.slice(this._getLeft(left), duration);
        }
        else {
            const top = Math.round(((this._thumnailsContainerRef.nativeElement.clientHeight - activeItemRef.nativeElement.clientHeight) / 2) - activeItemRef.nativeElement.offsetTop);
            this.thumbnailsSliceAnimator.slice(this._getTop(top), duration);
        }
    }
    _getTop(value) {
        let top = value;
        if (top < (this._thumnailsContainerRef.nativeElement.clientHeight - this._thumnailsListRef.nativeElement.clientHeight + 12)) {
            top = this._thumnailsContainerRef.nativeElement.clientHeight - this._thumnailsListRef.nativeElement.clientHeight + 12;
        }
        if (top > 0) {
            top = 0;
        }
        return top;
    }
    _getLeft(value) {
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
LightboxThumbnailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lightbox-thumbnails',
                template: `
      <div #thumnailsContainer
          (swipeleft)="onSwipe($event)"
          (swiperight)="onSwipe($event)"
          (swipeup)="onSwipe($event)"
          (swipedown)="onSwipe($event)"
          (wheel)="onWheel($event)"
          class="thumbnail-container">

          <div #thumnailsList
          [@thumbnailsSlice]="thumbnailsSliceAnimator.animation"
          (@thumbnailsSlice.start)="thumbnailsSliceAnimator.animationStart($event)"
          (@thumbnailsSlice.done)="thumbnailsSliceAnimator.animationDone($event)">
        
              <div #thumnails *ngFor="let item of items"
                  (tap)="onTap(item)"
                  [style.width]="thumbnailsWidth"
                  [style.height]="thumbnailsHeight"
                  [ngClass]="{'active': item === activeItem}"
                  class="thumbnail">

                  <img [src]="getItemSrc(item)" title="{{item.title}}"/>

              </div><!-- END THUMNAILS -->

          </div><!-- END THUMNAILS LIST -->

      </div><!-- END THUMNAILS CONTAINER -->
    `,
                styles: [`
      :host{background-color:#222;flex:1 1 0%;box-sizing:border-box;z-index:2;position:relative}:host .thumbnail-container{overflow:hidden}:host .thumbnail-container>div{display:inline-block;position:relative}:host .thumbnail-container .thumbnail{display:inline-block;cursor:pointer}:host .thumbnail-container .thumbnail img{display:block;pointer-events:none}:host .thumbnail-container .thumbnail.active img{cursor:default}@media (max-width: 359px){:host{display:none}}:host.vertical-thumbnails .thumbnail-container{margin:12px 0;margin-bottom:0px;height:calc(100% - 24px)}:host.vertical-thumbnails .thumbnail-container>div{flex-direction:column}:host.vertical-thumbnails .thumbnail-container .thumbnail{margin-bottom:12px}:host.vertical-thumbnails .thumbnail-container .thumbnail img{width:calc(100% - 24px);margin-left:12px;margin-right:12px}:host.vertical-thumbnails .thumbnail-container .thumbnail.active img{width:calc(100% - 12px);margin-left:6px;margin-right:6px}:host.horizontal-thumbnails .thumbnail-container{height:100%;margin:0px 12px;margin-right:0px;width:calc(100% - 24px)}:host.horizontal-thumbnails .thumbnail-container>div{height:100%;white-space:nowrap}:host.horizontal-thumbnails .thumbnail-container .thumbnail{margin-right:12px}:host.horizontal-thumbnails .thumbnail-container .thumbnail img{height:calc(100% - 24px);margin-top:12px;margin-bottom:12px}:host.horizontal-thumbnails .thumbnail-container .thumbnail.active img{height:calc(100% - 12px);margin-top:6px;margin-bottom:6px}
    `],
                animations: [ThumbnailsAnimations.visibilityAnimation, ThumbnailsAnimations.sliceAnimation],
                providers: [
                    { provide: WINDOW, useFactory: _window }
                ],
                host: {
                    '[@thumbnailsVisibility]': 'thumbnailsVisibilityAnimator.animation',
                    '(@thumbnailsVisibility.start)': 'thumbnailsVisibilityAnimator.animationStart($event)',
                    '(@thumbnailsVisibility.done)': 'thumbnailsVisibilityAnimator.animationDone($event)'
                }
            },] },
];
/** @nocollapse */
LightboxThumbnailsComponent.ctorParameters = () => [
    { type: LightboxConfigurationService, },
    { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] },] },
];
LightboxThumbnailsComponent.propDecorators = {
    "items": [{ type: Input, args: ['items',] },],
    "selectEvent": [{ type: Output },],
    "_thumnailsContainerRef": [{ type: ViewChild, args: ['thumnailsContainer',] },],
    "_thumnailsListRef": [{ type: ViewChild, args: ['thumnailsList',] },],
    "_thumnailsRef": [{ type: ViewChildren, args: ['thumnails',] },],
};
//# sourceMappingURL=lightbox-thumbnails.component.js.map