import { LightboxService } from '../services/lightbox.service';
import { ElementRef } from '@angular/core';
import { Item } from './item';
export declare class ItemDirectiveBase {
    protected readonly lightboxService: LightboxService;
    protected readonly elementRef: ElementRef;
    protected container: string;
    protected src: string;
    protected title: string;
    protected xsBreakpoint: number;
    protected smBreakpoint: number;
    protected mdBreakpoint: number;
    protected lgBreakpoint: number;
    protected xsSrc: string;
    protected smSrc: string;
    protected mdSrc: string;
    protected lgSrc: string;
    protected xlSrc: string;
    protected item: Item;
    protected cursor: 'pointer' | 'default';
    protected visibility: 'hidden' | 'visible';
    private _loaded;
    constructor(lightboxService: LightboxService, elementRef: ElementRef);
    protected onClick(event: Event): void;
    protected onLoad(event: Event): void;
}
