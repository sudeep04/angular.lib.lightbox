import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/skip';
import { DoomService } from './doom.service';
export class LightboxService {
    constructor(_doomService) {
        this._doomService = _doomService;
    }
    addItem(item) {
        this._doomService.lightboxComponentRef.instance.addItem(item);
    }
    openItem(item) {
        this._doomService.lightboxComponentRef.instance.openItem(item);
    }
    removeItem(item) {
        this._doomService.lightboxComponentRef.instance.removeItem(item);
    }
    onClosed(func) {
        this._doomService.lightboxComponentRef.instance.$state.filter((state) => state === 'closed').skip(1).first().subscribe(() => {
            func();
        });
    }
    onOpening(func) {
        this._doomService.lightboxComponentRef.instance.$state.filter((state) => state === 'opening').first().subscribe(() => {
            func();
        });
    }
}
LightboxService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LightboxService.ctorParameters = () => [
    { type: DoomService, },
];
//# sourceMappingURL=lightbox.service.js.map