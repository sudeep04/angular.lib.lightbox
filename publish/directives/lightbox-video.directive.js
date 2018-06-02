import { Directive, ElementRef, Input } from '@angular/core';
import { ItemDirectiveBase } from '../models/item-directive-base';
import { LightboxService } from '../services/lightbox.service';
import { Video } from '../models/video';
export class LightboxVideoDirective extends ItemDirectiveBase {
    constructor(_lightboxService, _elementRef) {
        super(_lightboxService, _elementRef);
        this._lightboxService = _lightboxService;
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        if (!this.container) {
            throw new Error("Attribute 'lightbox-container' is required");
        }
        if (!this.title) {
            throw new Error("Attribute 'lightbox-title' is required");
        }
        if (!this.youtubeId) {
            throw new Error("Attribute 'youtube-id' is required");
        }
        const item = new Video();
        item.title = this.title;
        item.container = this.container;
        item.youtubeVieoId = this.youtubeId;
        item.src = this.src;
        item.xsSrc = this.xsSrc;
        item.smSrc = this.smSrc;
        item.mdSrc = this.mdSrc;
        item.lgSrc = this.lgSrc;
        item.xlSrc = this.xlSrc;
        item.xsBreakpoint = this.xsBreakpoint;
        item.smBreakpoint = this.smBreakpoint;
        item.mdBreakpoint = this.mdBreakpoint;
        item.lgBreakpoint = this.mdBreakpoint;
        item.isVideo = true;
        this.item = item;
        this._lightboxService.addItem(this.item);
    }
    ngOnDestroy() {
        this.lightboxService.removeItem(this.item);
    }
}
LightboxVideoDirective.decorators = [
    { type: Directive, args: [{
                selector: 'img[lightbox-video]',
                host: {
                    '[style.cursor]': 'cursor',
                    '[style.visibility]': 'visibility',
                    '(tap)': 'onClick($event)',
                    '(load)': 'onLoad($event)'
                }
            },] },
];
/** @nocollapse */
LightboxVideoDirective.ctorParameters = () => [
    { type: LightboxService, },
    { type: ElementRef, },
];
LightboxVideoDirective.propDecorators = {
    "youtubeId": [{ type: Input, args: ['youtube-id',] },],
};
//# sourceMappingURL=lightbox-video.directive.js.map