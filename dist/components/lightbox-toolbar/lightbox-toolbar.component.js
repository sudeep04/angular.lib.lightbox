import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ToolbarAnimations } from '../../models/toolbar/animations/toolbar-animations';
import { ToolbarVisibilityAnimator } from '../../models/toolbar/animations/toolbar-visibility-animator';
export class LightboxToolbarComponent {
    constructor(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.nextEvent = new EventEmitter();
        this.previousEvent = new EventEmitter();
        this.firstEvent = new EventEmitter();
        this.lastEvent = new EventEmitter();
        this.closeEvent = new EventEmitter();
        this.thumbnailsToggleEvent = new EventEmitter();
        this._state = 'closed';
    }
    get config() {
        return this._lightboxConfigurationService;
    }
    ngOnInit() {
        this.toolbarVisibilityAnimator = new ToolbarVisibilityAnimator();
    }
    onNext() {
        this.nextEvent.emit();
    }
    onPrevious() {
        this.previousEvent.emit();
    }
    onFirst() {
        this.firstEvent.emit();
    }
    onLast() {
        this.lastEvent.emit();
    }
    onClose() {
        this.closeEvent.emit();
    }
    onThumbnailsToggle() {
        this.thumbnailsToggleEvent.emit();
    }
    open() {
        if (this._state !== 'opened') {
            this._state = 'opened';
            this.toolbarVisibilityAnimator.show(this.config.animations.toolbarShow.duration);
        }
    }
    close() {
        if (this._state !== 'closed') {
            this._state = 'closed';
            this.toolbarVisibilityAnimator.hide(this.config.animations.toolbarHide.duration);
        }
    }
    toggle() {
        if (this._state === 'opened') {
            this.close();
        }
        else {
            this.open();
        }
    }
}
LightboxToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'lightbox-toolbar',
                template: `
      <div class="toolbar-container">
          <div>
              <button lightbox-icon-button (tap)="onClose()" title="Close">
                  <span class="material-icons">{{config.controls.back.icon}}</span>
              </button>
              <span class="toolbar-title">{{title}}</span>
          </div>
          <div class="nav-menu">
              <button *ngIf="!config.controls.navigation.disable && !config.controls.jumpToStart.disable" lightbox-icon-button [disable]="pagination.current===1" (tap)="onFirst()" title="First">
                  <span class="material-icons">{{config.controls.jumpToStart.icon}}</span>
              </button>
              <button *ngIf="!config.controls.navigation.disable && !config.controls.backward.disable" lightbox-icon-button [disable]="pagination.current===1" (tap)="onPrevious()" title="Previous">
                  <span class="material-icons">{{config.controls.backward.icon}}</span>
              </button>
              <span *ngIf="!config.controls.navigation.disable && !config.controls.itemIndex.disable" class="nav-pagination">{{pagination?.current}} / {{pagination?.count}}</span>
              <button *ngIf="!config.controls.navigation.disable && !config.controls.forward.disable" lightbox-icon-button [disable]="pagination.current===pagination.count" (tap)="onNext()" title="Next">
                  <span class="material-icons">{{config.controls.forward.icon}}</span>
              </button>
              <button *ngIf="!config.controls.navigation.disable && !config.controls.jumpToEnd.disable" lightbox-icon-button [disable]="pagination.current===pagination.count" (tap)="onLast()" title="Last">
                  <span class="material-icons">{{config.controls.jumpToEnd.icon}}</span>
              </button>
          </div>
          <div>
              <button *ngIf="!config.controls.thumbnails.disable" lightbox-icon-button (tap)="onThumbnailsToggle()" title="List">
                  <span class="material-icons">{{config.controls.thumbnails.icon}}</span>
              </button>
          </div>
      </div>
    `,
                styles: [`
      :host{display:block;position:relative;overflow:hidden}:host .toolbar-container{background-color:#000;color:#fff;height:64px;display:flex;align-content:center;justify-content:space-between;position:absolute;z-index:3;bottom:0px;width:100%}:host .toolbar-container>div{display:flex;align-items:center}:host .toolbar-container>div:first-child{flex:1 1 0%;justify-content:flex-start;overflow:hidden;padding-left:12px}:host .toolbar-container .nav-menu{flex:0 0 auto;padding:0 12px}:host .toolbar-container .nav-menu .nav-pagination{margin:0 12px}:host .toolbar-container>div:last-child{flex:1 1 0%;justify-content:flex-end;padding-right:12px}:host .toolbar-container .toolbar-title{overflow:hidden;margin-left:12px;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 52px)}@media (max-width: 479px){:host .toolbar-container .toolbar-title{display:none}}@media (max-width: 359px){:host .toolbar-container>div:last-child{display:none}}
    `],
                animations: [ToolbarAnimations.visibilityAnimation],
                host: {
                    '[@toolbarVisibility]': 'toolbarVisibilityAnimator.animation',
                    '(@toolbarVisibility.start)': 'toolbarVisibilityAnimator.animationStart($event)',
                    '(@toolbarVisibility.done)': 'toolbarVisibilityAnimator.animationDone($event)'
                }
            },] },
];
/** @nocollapse */
LightboxToolbarComponent.ctorParameters = () => [
    { type: LightboxConfigurationService, },
];
LightboxToolbarComponent.propDecorators = {
    "nextEvent": [{ type: Output },],
    "previousEvent": [{ type: Output },],
    "firstEvent": [{ type: Output },],
    "lastEvent": [{ type: Output },],
    "closeEvent": [{ type: Output },],
    "thumbnailsToggleEvent": [{ type: Output },],
    "title": [{ type: Input },],
    "pagination": [{ type: Input },],
};
//# sourceMappingURL=lightbox-toolbar.component.js.map