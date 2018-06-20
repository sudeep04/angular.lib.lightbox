import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ZoomAnimations } from '../../models/zoom/animations/zoom-animations';
import { ZoomVisibilityAnimator } from '../../models/zoom/animations/zoom-visibility-animator';
export class LightboxZoomComponent {
    constructor(_lightboxConfigurationService) {
        this._lightboxConfigurationService = _lightboxConfigurationService;
        this.zoomInEvent = new EventEmitter();
        this.zoomOutEvent = new EventEmitter();
        this.resetZoomEvent = new EventEmitter();
        this.feetToWidthEvent = new EventEmitter();
        this._state = 'closed';
    }
    get config() {
        return this._lightboxConfigurationService;
    }
    ngOnInit() {
        this.zoomVisibilityAnimator = new ZoomVisibilityAnimator();
    }
    close() {
        if (!this.config.controls.zoom.disable && this._state !== 'closed') {
            this._state = 'closed';
            this.zoomVisibilityAnimator.hide(this.config.animations.toolbarHide.duration);
        }
    }
    open() {
        if (!this.config.controls.zoom.disable && this._state !== 'opened') {
            this._state = 'opened';
            this.zoomVisibilityAnimator.show(this.config.animations.zoomShow.duration);
        }
    }
    toggle() {
        if (!this.config.controls.zoom.disable) {
            if (this._state === 'opened') {
                this.close();
            }
            else {
                this.open();
            }
        }
    }
    onZoomIn() {
        if (!this.disableZoomIn) {
            this.zoomInEvent.emit();
        }
    }
    onZoomOut() {
        if (!this.disableZoomOut) {
            this.zoomOutEvent.emit();
        }
    }
    onResetZoom() {
        if (!this.disableResetZoom) {
            this.resetZoomEvent.emit();
        }
    }
    onFeetToWidth() {
        if (!this.disableFeetToWidth) {
            this.feetToWidthEvent.emit();
        }
    }
}
LightboxZoomComponent.decorators = [
    { type: Component, args: [{
                selector: 'lightbox-zoom',
                template: `
      <div *ngIf="!config.controls.zoom.disable">
          <button *ngIf="!config.controls.zoomOut.disable" [disable]="disableZoomOut" lightbox-icon-button (tap)="onZoomOut()" title="Zoom out">
              <span class="material-icons">{{config.controls.zoomOut.icon}}</span>
          </button>
          <button *ngIf="!config.controls.resetZoom.disable" [disable]="disableResetZoom" lightbox-icon-button (tap)="onResetZoom()" title="Reset zoom">
              <span class="material-icons">{{config.controls.resetZoom.icon}}</span>
          </button>
          <button *ngIf="!config.controls.feetToWidth.disable" [disable]="disableFeetToWidth" lightbox-icon-button (tap)="onFeetToWidth()" title="Feet to width">
              <span class="material-icons">{{config.controls.feetToWidth.icon}}</span>
          </button>
          <button *ngIf="!config.controls.zoomIn.disable" [disable]="disableZoomIn" lightbox-icon-button (tap)="onZoomIn()" title="Zoom in">
              <span class="material-icons">{{config.controls.zoomIn.icon}}</span>
          </button>
      </div>
    `,
                styles: [`
      :host{color:#fff;height:64px;display:flex;align-items:center;align-content:center;justify-content:center;position:absolute;width:100%;z-index:2;pointer-events:none;overflow:hidden;bottom:12px}:host>div{background-color:#000;pointer-events:auto;padding:3px;height:40px;width:auto;border-radius:3px;display:flex}:host button{background-color:#000}
    `],
                animations: [ZoomAnimations.visibilityAnimation],
                host: {
                    '[@zoomVisibility]': 'zoomVisibilityAnimator.animation',
                    '(@zoomVisibility.start)': 'zoomVisibilityAnimator.animationStart($event)',
                    '(@zoomVisibility.done)': 'zoomVisibilityAnimator.animationDone($event)'
                }
            },] },
];
/** @nocollapse */
LightboxZoomComponent.ctorParameters = () => [
    { type: LightboxConfigurationService, },
];
LightboxZoomComponent.propDecorators = {
    "zoomInEvent": [{ type: Output },],
    "zoomOutEvent": [{ type: Output },],
    "resetZoomEvent": [{ type: Output },],
    "feetToWidthEvent": [{ type: Output },],
    "disableZoomIn": [{ type: Input },],
    "disableZoomOut": [{ type: Input },],
    "disableResetZoom": [{ type: Input },],
    "disableFeetToWidth": [{ type: Input },],
};
//# sourceMappingURL=lightbox-zoom.component.js.map