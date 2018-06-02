import { EventEmitter, OnInit } from '@angular/core';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ZoomVisibilityAnimator } from '../../models/zoom/animations/zoom-visibility-animator';
export declare class LightboxZoomComponent implements OnInit {
    private readonly _lightboxConfigurationService;
    zoomInEvent: EventEmitter<{}>;
    zoomOutEvent: EventEmitter<{}>;
    resetZoomEvent: EventEmitter<{}>;
    feetToWidthEvent: EventEmitter<{}>;
    disableZoomIn: boolean;
    disableZoomOut: boolean;
    disableResetZoom: boolean;
    disableFeetToWidth: boolean;
    zoomVisibilityAnimator: ZoomVisibilityAnimator;
    private _state;
    readonly config: LightboxConfigurationService;
    constructor(_lightboxConfigurationService: LightboxConfigurationService);
    ngOnInit(): void;
    close(): void;
    open(): void;
    toggle(): void;
    onZoomIn(): void;
    onZoomOut(): void;
    onResetZoom(): void;
    onFeetToWidth(): void;
}
