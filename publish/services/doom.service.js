import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LightboxComponent } from '../components/lightbox/lightbox.component';
export class DoomService {
    constructor(_appRef, _componentFactoryResolver, _injector, _document) {
        this._appRef = _appRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this._document = _document;
        this._lightboxComponentRef = this._componentFactoryResolver
            .resolveComponentFactory(LightboxComponent)
            .create(this._injector);
        this._lightboxComponentRef.changeDetectorRef.detectChanges();
        this._appRef.attachView(this._lightboxComponentRef.hostView);
        const domElement = this._lightboxComponentRef.hostView
            .rootNodes[0];
        const container = this._document.createElement('div');
        container.classList.add('lightbox-overlay-container');
        this._document.body.appendChild(container);
        container.appendChild(domElement);
    }
    get lightboxComponentRef() {
        return this._lightboxComponentRef;
    }
}
DoomService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DoomService.ctorParameters = () => [
    { type: ApplicationRef, },
    { type: ComponentFactoryResolver, },
    { type: Injector, },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
//# sourceMappingURL=doom.service.js.map