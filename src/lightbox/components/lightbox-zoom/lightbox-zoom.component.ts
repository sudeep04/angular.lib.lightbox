import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ZoomAnimations } from '../../models/zoom/animations/zoom-animations';
import { ZoomVisibilityAnimator } from '../../models/zoom/animations/zoom-visibility-animator';

@Component({
    selector: 'lightbox-zoom',
    templateUrl: 'lightbox-zoom.component.html',
    styleUrls: ['lightbox-zoom.component.scss'],
    animations: [ ZoomAnimations.visibilityAnimation ],
    host: {
        '[@zoomVisibility]': 'zoomVisibilityAnimator.animation',
        '(@zoomVisibility.start)': 'zoomVisibilityAnimator.animationStart($event)',
        '(@zoomVisibility.done)': 'zoomVisibilityAnimator.animationDone($event)'
    }
})
export class LightboxZoomComponent implements OnInit {

    @Output() public zoomInEvent = new EventEmitter();

    @Output() public zoomOutEvent = new EventEmitter();

    @Output() public resetZoomEvent = new EventEmitter();

    @Output() public feetToWidthEvent = new EventEmitter();

    @Input() public disableZoomIn: boolean;

    @Input() public disableZoomOut: boolean;

    @Input() public disableResetZoom: boolean;

    @Input() public disableFeetToWidth: boolean;

    public zoomVisibilityAnimator: ZoomVisibilityAnimator;

    private _state: 'opened' | 'closed' = 'closed';

    public get config(): LightboxConfigurationService {

        return this._lightboxConfigurationService;
    }

    constructor(
        private readonly _lightboxConfigurationService: LightboxConfigurationService
    ) { }

    public ngOnInit(): void {

        this.zoomVisibilityAnimator = new ZoomVisibilityAnimator();
    }

    public close(): void {

        if (!this.config.controls.zoom.disable && this._state !== 'closed') {

            this._state = 'closed';
            this.zoomVisibilityAnimator.hide(this.config.animations.toolbarHide.duration);
        }
    }

    public open(): void {

        if (!this.config.controls.zoom.disable && this._state !== 'opened') {

            this._state = 'opened';
            this.zoomVisibilityAnimator.show(this.config.animations.zoomShow.duration);
        }
    }

    public toggle(): void {

        if (!this.config.controls.zoom.disable) {

            if (this._state === 'opened') {

                this.close();
            } else {

                this.open();
            }
        }
    }

    public onZoomIn(): void {

        if (!this.disableZoomIn) {

            this.zoomInEvent.emit();
        }
    }

    public onZoomOut(): void {

        if (!this.disableZoomOut) {

            this.zoomOutEvent.emit();
        }
    }

    public onResetZoom(): void {

        if (!this.disableResetZoom) {

            this.resetZoomEvent.emit();
        }
    }

    public onFeetToWidth(): void {

        if (!this.disableFeetToWidth) {

            this.feetToWidthEvent.emit();
        }
    }
}
