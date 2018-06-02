import { Component, ViewChild, QueryList, ViewChildren, HostListener, ViewEncapsulation, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LightboxToolbarComponent } from '../lightbox-toolbar/lightbox-toolbar.component';
import { LightboxThumbnailsComponent } from '../lightbox-thumbnails/lightbox-thumbnails.component';
import { LightboxZoomComponent } from '../lightbox-zoom/lightbox-zoom.component';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { LightboxSliceAnimator } from '../../models/lightbox/animations/lightbox-slice-animator';
import { LightboxAnimations } from '../../models/lightbox/animations/lightbox-animations';
import { BackgroundVisibilityAnimator } from '../../models/lightbox/animations/background-visibility-animator';
import { Dimensions } from '../../models/dimensions.interface';
export class LightboxComponent {
    constructor(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.pagination = { current: 0, count: 0 };
        this.displayZoom = 'hidden';
        this.displayYoutube = false;
        this.items = {};
        this.state = 'closed';
        this._stateBehaviorSubject = new BehaviorSubject('closed');
        this._pointerEvents = 'none';
    }
    get $state() {
        return this._stateBehaviorSubject.asObservable();
    }
    get config() {
        return this._lightboxConfigurationService;
    }
    ngOnInit() {
        this.lightboxSliceAnimator = new LightboxSliceAnimator();
        this.backgroundVisibilityAnimator = new BackgroundVisibilityAnimator();
        this._stateSubscription = this.$state.subscribe((value) => {
            this.state = value;
        });
    }
    ngOnDestroy() {
        this._stateSubscription.unsubscribe();
    }
    openItem(item) {
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
    getYoutubeVideoId() {
        return this.activeItem.youtubeVieoId;
    }
    addItem(item) {
        if (!this.items[item.container]) {
            this.items[item.container] = [];
        }
        this.items[item.container].push(item);
    }
    thumbnailsToggle() {
        this.thumbnails.toggle();
    }
    removeItem(item) {
        const index = this._itemIndex(item);
        if (index > -1) {
            this.items[item.container].splice(index, 1);
        }
    }
    onToggle() {
        this.toolbar.toggle();
        this.lightboxZoom.toggle();
        this.thumbnails.toggle();
    }
    onClose(event) {
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
    selectItem(item) {
        if (item !== this.activeItem) {
            if (this.activeItem) {
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
    onNext() {
        const activeItemIndex = this._itemIndex((this.activeItem));
        if (activeItemIndex >= 0 && activeItemIndex < this.items[this.activeItem.container].length - 1) {
            const item = this.items[this.activeItem.container][activeItemIndex + 1];
            this.selectItem(item);
        }
    }
    onLast() {
        const activeItemIndex = this._itemIndex((this.activeItem));
        if (activeItemIndex >= 0 && activeItemIndex < this.items[this.activeItem.container].length - 1) {
            const item = this.items[this.activeItem.container][this.items[this.activeItem.container].length - 1];
            this.selectItem(item);
        }
    }
    onFirst() {
        const activeItemIndex = this._itemIndex((this.activeItem));
        if (activeItemIndex > 0) {
            const item = this.items[this.activeItem.container][0];
            this.selectItem(item);
        }
    }
    onPrevious() {
        const activeItemIndex = this._itemIndex((this.activeItem));
        if (activeItemIndex > 0) {
            const item = this.items[this.activeItem.container][activeItemIndex - 1];
            this.selectItem(item);
        }
    }
    zoomIn() {
        const activeItemRef = this._itemRef(this._itemIndex((this.activeItem)));
        activeItemRef.zoomIn(null, () => {
            this._checkZoom(activeItemRef);
        });
    }
    zoomOut() {
        const activeItemRef = this._itemRef(this._itemIndex((this.activeItem)));
        activeItemRef.zoomOut(null, () => {
            this._checkZoom(activeItemRef);
        });
    }
    resetZoom() {
        const activeItemRef = this._itemRef(this._itemIndex((this.activeItem)));
        activeItemRef.resetZoom(this.config.animations.resetZoom.duration, null, () => {
            this._checkZoom(activeItemRef);
        });
    }
    feetToWidth() {
        const activeItemRef = this._itemRef(this._itemIndex((this.activeItem)));
        activeItemRef.feetToWidth(null, () => {
            this._checkZoom(activeItemRef);
        });
    }
    swipe(action) {
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
    onReady(event) {
        this._ytPlayer = event.target;
    }
    onError(event) {
        // on error
    }
    onChange(event) {
        switch (event.data) {
            case YT.PlayerState.PLAYING:
                this._closeControls();
                break;
            case YT.PlayerState.PAUSED:
                this._openControls();
                break;
        }
    }
    _initItems() {
        this.items[this.activeItem.container].forEach((element) => {
            if (element !== this.activeItem) {
                const elementIndex = this._itemIndex(element);
                const elementRef = this._itemRef(elementIndex);
                elementRef.resetZoom(0);
            }
        });
    }
    _openControls() {
        this.toolbar.open();
        this.lightboxZoom.open();
        this.thumbnails.open();
    }
    _closeControls() {
        this.toolbar.close();
        this.lightboxZoom.close();
        this.thumbnails.close();
    }
    _getContainerDimensionsAfterOpen() {
        let containerDimensions;
        if (!this.config.controls.thumbnails.disable) {
            if (this.thumbnails.direction === 'horizontal') {
                containerDimensions = new Dimensions(this._itemList.nativeElement.clientWidth, this._itemList.nativeElement.clientHeight - this.thumbnails.thickness - 64);
            }
            else {
                containerDimensions = new Dimensions(this._itemList.nativeElement.clientWidth - this.thumbnails.thickness, this._itemList.nativeElement.clientHeight - 64);
            }
        }
        else {
            containerDimensions = new Dimensions(this._itemList.nativeElement.clientWidth, this._itemList.nativeElement.clientHeight - 64);
        }
        return containerDimensions;
    }
    _updatePagination() {
        const activeItemIndex = this._itemIndex(this.activeItem);
        this.pagination.current = activeItemIndex + 1;
        this.pagination.count = this.items[this.activeItem.container].length;
    }
    _checkYoutube(item) {
        setTimeout(() => {
            if (item !== this.activeItem) {
                this.displayYoutube = false;
            }
            else {
                if (item.isVideo) {
                    this.displayYoutube = true;
                }
                else {
                    this.displayYoutube = false;
                }
            }
        }, 0);
    }
    _itemRef(index) {
        return this._itemsRef.toArray()[index];
    }
    _itemIndex(item) {
        return this.items[item.container].indexOf(item);
    }
    _onResize(event) {
        if (this.activeItem) {
            const activeItemRef = this._itemRef(this._itemIndex((this.activeItem)));
            if (!this.activeItem.isVideo) {
                activeItemRef.resize();
            }
            this._checkZoom(activeItemRef);
            this.thumbnails.resize();
        }
    }
    _checkZoom(item) {
        if (this.activeItem.isVideo) {
            this.displayZoom = 'hidden';
        }
        else {
            this.displayZoom = 'visible';
        }
        this.disableZoomIn = item.isZoomMax();
        this.disableZoomOut = item.isZoomMin();
        this.disableResetZoom = item.isZoomMin();
        this.disableFeetToWidth = item.isFeetToWidth();
    }
}
LightboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'lightbox',
                template: `
      <div class="lightbox-background"
          [@backgroundVisibility]="backgroundVisibilityAnimator.animation"
          (@backgroundVisibility.start)="backgroundVisibilityAnimator.animationStart($event)"
          (@backgroundVisibility.done)="backgroundVisibilityAnimator.animationDone($event)">
      </div>

      <lightbox-toolbar #toolbar
          [ngStyle]="{'order': config.controls.toolbar.position === 'top' ? 1 : 2 }"
          [pagination]="pagination"
          [title]="activeItem?.title"
          (closeEvent)="onClose($event)"
          (firstEvent)="onFirst()"
          (previousEvent)="onPrevious()"
          (nextEvent)="onNext()"
          (lastEvent)="onLast()"
          (thumbnailsToggleEvent)="thumbnailsToggle()">
      </lightbox-toolbar>

      <div class="lightbox-container"
          [ngStyle]="{'order': config.controls.toolbar.position === 'bottom' ? 1 : 2 }"
          [ngClass]="{'vertical-container': config.controls.thumbnails.position === 'left' || config.controls.thumbnails.position === 'right', 'horizontal-container': config.controls.thumbnails.position === 'top' || config.controls.thumbnails.position === 'bottom'}">
    
          <div class="lightbox-items-container"
              [ngStyle]="{'order': config.controls.thumbnails.position === 'bottom' || config.controls.thumbnails.position === 'right' ? 1 : 2 }">
        
              <div #background 
                  [ngStyle]="{'visibility': state === 'closed' || state === 'closing' ? 'hidden' : 'visible' }" 
                  (tap)="onClose($event)" 
                  (swipeleft)="swipe($event.type)" 
                  (swiperight)="swipe($event.type)" 
                  class="lightbox-items-background">

                  <div *ngIf="activeItem" class="item-list" #itemList
                      [@lightboxSlice]="lightboxSliceAnimator.animation"
                      (@lightboxSlice.start)="lightboxSliceAnimator.animationStart($event)"
                      (@lightboxSlice.done)="lightboxSliceAnimator.animationDone($event)">
                      <lightbox-item (toggleEvent)="onToggle()" #lightboxItem *ngFor="let item of items[activeItem.container]" [item]="item">
                      </lightbox-item>
                  </div>
              </div>

              <lightbox-zoom #lightboxZoom
                  [style.visibility]="displayZoom"
                  [disableZoomIn]="disableZoomIn"
                  [disableZoomOut]="disableZoomOut"
                  [disableResetZoom]="disableResetZoom"
                  [disableFeetToWidth]="disableFeetToWidth"
                  (zoomInEvent)="zoomIn()"
                  (zoomOutEvent)="zoomOut()"
                  (resetZoomEvent)="resetZoom()"
                  (feetToWidthEvent)="feetToWidth()">
              </lightbox-zoom>

              <youtube
                  [ngStyle]="{'visibility': displayYoutube ? 'visible' : 'hidden' }" 
                  [videoId]="activeItem? getYoutubeVideoId() : undefined"
                   (ready)="onReady($event)"
                  (change)="onChange($event)"
                  (error)="onError($event)">
              </youtube>

          </div>
          <lightbox-thumbnails [ngClass]="{'vertical-thumbnails': config.controls.thumbnails.position === 'left' || config.controls.thumbnails.position === 'right', 'horizontal-thumbnails': config.controls.thumbnails.position === 'top' || config.controls.thumbnails.position === 'bottom'}" #thumbnails [items]="activeItem? items[activeItem.container]:[]" (selectEvent)="selectItem($event)"
          [ngStyle]="{'order': config.controls.thumbnails.position === 'top' || config.controls.thumbnails.position === 'left' ? 1 : 2 }">
          </lightbox-thumbnails>
      </div>
    `,
                styles: [`
      lightbox{pointer-events:none;top:0;left:0;height:100%;width:100%;display:flex;flex-direction:column}lightbox .lightbox-background,lightbox .lightbox-items-background{height:100%;width:100%;position:absolute;top:0;z-index:1}lightbox .lightbox-background .item-list,lightbox .lightbox-items-background .item-list{position:relative;height:100%;display:flex}lightbox .lightbox-container{display:flex;flex:1 1 0%;position:relative;overflow:hidden}lightbox .lightbox-items-container{flex:1 1 0%;box-sizing:border-box;height:100%;position:relative}.lightbox-overlay-container{pointer-events:none;position:fixed;z-index:10000;height:100%;width:100%;top:0px;left:0px}lightbox .lightbox-container.vertical-container{flex-direction:row}lightbox .lightbox-container.horizontal-container{flex-direction:column}
    `],
                animations: [LightboxAnimations.visibilityAnimation, LightboxAnimations.sliceAnimation],
                host: {
                    '[style.pointer-events]': '_pointerEvents',
                },
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
LightboxComponent.ctorParameters = () => [
    { type: LightboxConfigurationService, },
];
LightboxComponent.propDecorators = {
    "background": [{ type: ViewChild, args: ['background',] },],
    "toolbar": [{ type: ViewChild, args: ['toolbar',] },],
    "thumbnails": [{ type: ViewChild, args: ['thumbnails',] },],
    "lightboxZoom": [{ type: ViewChild, args: ['lightboxZoom',] },],
    "_itemList": [{ type: ViewChild, args: ['itemList',] },],
    "_itemsRef": [{ type: ViewChildren, args: ['lightboxItem',] },],
    "_onResize": [{ type: HostListener, args: ['window:resize', ['$event'],] },],
};
//# sourceMappingURL=lightbox.component.js.map