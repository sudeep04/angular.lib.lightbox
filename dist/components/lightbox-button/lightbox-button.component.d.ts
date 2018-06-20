import { ElementRef, OnChanges } from '@angular/core';
export declare class LightboxButtonComponent implements OnChanges {
    private _elementRef;
    disable: boolean;
    hoverAnimation: 'leave' | 'enter';
    private _isIconButton;
    constructor(_elementRef: ElementRef);
    ngOnChanges(): void;
    private _onMouseEnter();
    private _onMouseLeave();
    private _getHostElement();
    private _hasHostAttributes(...attributes);
}
