import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightboxButtonComponent } from './components/lightbox-button/lightbox-button.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { LightboxToolbarComponent } from './components/lightbox-toolbar/lightbox-toolbar.component';
import { LightboxImgDirective } from './directives/lightbox-img.directive';
import { LightboxVideoDirective } from './directives/lightbox-video.directive';
import { LightboxItemComponent } from './components/lightbox-item/lightbox-item.component';
import { LightboxZoomComponent } from './components/lightbox-zoom/lightbox-zoom.component';
import { LightboxThumbnailsComponent } from './components/lightbox-thumbnails/lightbox-thumbnails.component';
import { LightboxService } from './services/lightbox.service';
import { DoomService } from './services/doom.service';
import { LightboxConfigurationService } from './services/lightbox-configuration.service';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerConfig } from './models/HammerConfig';
import { LazyLoadingModule } from 'lazyloading/publish/lazy-loading.module';
import { YoutubeModule } from 'youtube/publish/youtube.module';
export class LightboxModule {
}
LightboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LightboxButtonComponent,
                    LightboxComponent,
                    LightboxToolbarComponent,
                    LightboxImgDirective,
                    LightboxVideoDirective,
                    LightboxItemComponent,
                    LightboxZoomComponent,
                    LightboxThumbnailsComponent
                ],
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    LazyLoadingModule,
                    YoutubeModule
                ],
                exports: [
                    LightboxImgDirective,
                    LightboxVideoDirective
                ],
                providers: [
                    {
                        provide: HAMMER_GESTURE_CONFIG,
                        useClass: HammerConfig
                    },
                    LightboxService,
                    DoomService,
                    LightboxConfigurationService
                ],
                entryComponents: [LightboxComponent]
            },] },
];
/** @nocollapse */
LightboxModule.ctorParameters = () => [];
//# sourceMappingURL=lightbox.module.js.map