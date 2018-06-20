import { ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef } from '@angular/core';
import { LightboxComponent } from '../components/lightbox/lightbox.component';
export declare class DoomService {
    private readonly _appRef;
    private readonly _componentFactoryResolver;
    private readonly _injector;
    private readonly _document;
    private _lightboxComponentRef;
    constructor(_appRef: ApplicationRef, _componentFactoryResolver: ComponentFactoryResolver, _injector: Injector, _document: any);
    readonly lightboxComponentRef: ComponentRef<LightboxComponent>;
}
