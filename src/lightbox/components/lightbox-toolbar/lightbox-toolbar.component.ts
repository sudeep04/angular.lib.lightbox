import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Pagination } from '../../models/pagination.interface';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ToolbarAnimations } from '../../models/toolbar/animations/toolbar-animations';
import { ToolbarVisibilityAnimator } from '../../models/toolbar/animations/toolbar-visibility-animator';

@Component({
    selector: 'lightbox-toolbar',
    templateUrl: 'lightbox-toolbar.component.html',
    styleUrls: ['lightbox-toolbar.component.scss'],
    animations: [ToolbarAnimations.visibilityAnimation],
    host: {
        '[@toolbarVisibility]': 'toolbarVisibilityAnimator.animation',
        '(@toolbarVisibility.start)': 'toolbarVisibilityAnimator.animationStart($event)',
        '(@toolbarVisibility.done)': 'toolbarVisibilityAnimator.animationDone($event)'
    }
})
export class LightboxToolbarComponent implements OnInit {

    @Output() public nextEvent = new EventEmitter();

    @Output() public previousEvent = new EventEmitter();

    @Output() public firstEvent = new EventEmitter();

    @Output() public lastEvent = new EventEmitter();

    @Output() public closeEvent = new EventEmitter();

    @Output() public thumbnailsToggleEvent = new EventEmitter();

    @Input() public title: string;

    @Input() public pagination: Pagination;

    public toolbarVisibilityAnimator: ToolbarVisibilityAnimator;

    private _state: 'opened' | 'closed' = 'closed';

    public get config(): LightboxConfigurationService {

        return this._lightboxConfigurationService;
    }

    constructor(
        private readonly _lightboxConfigurationService: LightboxConfigurationService
    ) { }

    public ngOnInit(): void {

        this.toolbarVisibilityAnimator = new ToolbarVisibilityAnimator();
    }

    public onNext(): void {

        this.nextEvent.emit();
    }

    public onPrevious(): void {

        this.previousEvent.emit();
    }

    public onFirst(): void {

        this.firstEvent.emit();
    }

    public onLast(): void {

        this.lastEvent.emit();
    }

    public onClose(): void {

        this.closeEvent.emit();
    }

    public onThumbnailsToggle() {

        this.thumbnailsToggleEvent.emit();
    }

    public open(): void {

        if (this._state !== 'opened') {

            this._state = 'opened';
            this.toolbarVisibilityAnimator.show(this.config.animations.toolbarShow.duration);
        }
    }

    public close(): void {

        if (this._state !== 'closed') {

            this._state = 'closed';
            this.toolbarVisibilityAnimator.hide(this.config.animations.toolbarHide.duration);
        }
    }

    public toggle(): void {

        if (this._state === 'opened') {

            this.close();
        } else {

            this.open();
        }
    }
}
