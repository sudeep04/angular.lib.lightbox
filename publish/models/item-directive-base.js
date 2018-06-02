import { Input } from '@angular/core';
import { Dimensions } from './dimensions.interface';
export class ItemDirectiveBase {
    constructor(lightboxService, elementRef) {
        this.lightboxService = lightboxService;
        this.elementRef = elementRef;
        this.cursor = 'pointer';
        this._loaded = false;
    }
    onClick(event) {
        if (this._loaded) {
            this.lightboxService.onOpening(() => {
                this.visibility = 'hidden';
            });
            this.item.position = {
                offsetTop: Math.round(this.elementRef.nativeElement.getBoundingClientRect().top),
                offsetLeft: Math.round(this.elementRef.nativeElement.getBoundingClientRect().left)
            };
            this.item.dimensions = new Dimensions(this.elementRef.nativeElement.clientWidth, this.elementRef.nativeElement.clientHeight);
            this.lightboxService.openItem(this.item);
            this.lightboxService.onClosed(() => {
                this.visibility = 'visible';
            });
        }
    }
    onLoad(event) {
        this._loaded = true;
        if (!this.item.dimensions) {
            this.item.dimensions = new Dimensions(this.elementRef.nativeElement.naturalWidth, this.elementRef.nativeElement.naturalHeight);
        }
    }
}
ItemDirectiveBase.propDecorators = {
    "container": [{ type: Input, args: ['container',] },],
    "src": [{ type: Input, args: ['src',] },],
    "title": [{ type: Input, args: ['title',] },],
    "xsBreakpoint": [{ type: Input, args: ['xs-breakpoint',] },],
    "smBreakpoint": [{ type: Input, args: ['sm-breakpoint',] },],
    "mdBreakpoint": [{ type: Input, args: ['md-breakpoint',] },],
    "lgBreakpoint": [{ type: Input, args: ['lg-breakpoint',] },],
    "xsSrc": [{ type: Input, args: ['xs-src',] },],
    "smSrc": [{ type: Input, args: ['sm-src',] },],
    "mdSrc": [{ type: Input, args: ['md-src',] },],
    "lgSrc": [{ type: Input, args: ['lg-src',] },],
    "xlSrc": [{ type: Input, args: ['xl-src',] },],
};
//# sourceMappingURL=item-directive-base.js.map