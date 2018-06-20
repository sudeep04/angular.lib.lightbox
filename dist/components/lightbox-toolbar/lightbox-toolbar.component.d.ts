import { EventEmitter, OnInit } from '@angular/core';
import { Pagination } from '../../models/pagination.interface';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ToolbarVisibilityAnimator } from '../../models/toolbar/animations/toolbar-visibility-animator';
export declare class LightboxToolbarComponent implements OnInit {
    private readonly _lightboxConfigurationService;
    nextEvent: EventEmitter<{}>;
    previousEvent: EventEmitter<{}>;
    firstEvent: EventEmitter<{}>;
    lastEvent: EventEmitter<{}>;
    closeEvent: EventEmitter<{}>;
    thumbnailsToggleEvent: EventEmitter<{}>;
    title: string;
    pagination: Pagination;
    toolbarVisibilityAnimator: ToolbarVisibilityAnimator;
    private _state;
    readonly config: LightboxConfigurationService;
    constructor(_lightboxConfigurationService: LightboxConfigurationService);
    ngOnInit(): void;
    onNext(): void;
    onPrevious(): void;
    onFirst(): void;
    onLast(): void;
    onClose(): void;
    onThumbnailsToggle(): void;
    open(): void;
    close(): void;
    toggle(): void;
}
