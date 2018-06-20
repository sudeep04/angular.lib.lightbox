import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ItemDirectiveBase } from '../models/item-directive-base';
import { LightboxService } from '../services/lightbox.service';
export declare class LightboxImgDirective extends ItemDirectiveBase implements OnInit, OnDestroy {
    private readonly _lightboxService;
    private readonly _elementRef;
    constructor(_lightboxService: LightboxService, _elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
