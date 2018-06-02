import { Component, ElementRef, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
const BUTTON_HOST_ATTRIBUTES = [
    'lightbox-button',
    'lightbox-icon-button'
];
export class LightboxButtonComponent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.disable = false;
        this.hoverAnimation = 'leave';
        this._isIconButton = this._hasHostAttributes('lightbox-icon-button');
        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                _elementRef.nativeElement.classList.add(attr);
            }
        }
    }
    ngOnChanges() {
        if (this.disable) {
            this._elementRef.nativeElement.classList.add('disable');
            if (this.hoverAnimation === 'enter') {
                this.hoverAnimation = 'leave';
            }
        }
        else {
            if (this._elementRef.nativeElement.classList.contains('disable')) {
                this._elementRef.nativeElement.classList.remove('disable');
            }
        }
    }
    _onMouseEnter() {
        if (!this.disable) {
            this.hoverAnimation = 'enter';
        }
    }
    _onMouseLeave() {
        this.hoverAnimation = 'leave';
    }
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    _hasHostAttributes(...attributes) {
        return attributes.some((attribute) => this._getHostElement().hasAttribute(attribute));
    }
}
LightboxButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'button[lightbox-button], button[lightbox-icon-button]',
                template: `
      <div class="button-focus-overlay" [@hoverAnimation]="hoverAnimation">
          <ng-content></ng-content>
      </div>
    `,
                styles: [`
      :host{color:inherit;border:none;cursor:pointer;height:40px;width:40px;border-radius:50%;position:relative;background-color:transparent;padding:0px;outline:none}:host .button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%;padding:8px}:host.disable{opacity:.5;cursor:default}
    `],
                animations: [
                    trigger('hoverAnimation', [
                        state('enter', style({ backgroundColor: 'rgba(255, 255, 255, 0.3)' })),
                        state('leave', style({ backgroundColor: 'rgba(255, 255, 255, 0)' })),
                        transition('leave => enter', [
                            animate('.1s')
                        ]),
                        transition('enter => leave', [
                            animate('.1s')
                        ])
                    ])
                ],
                host: {
                    '(mouseenter)': '_onMouseEnter()',
                    '(mouseleave)': '_onMouseLeave()'
                }
            },] },
];
/** @nocollapse */
LightboxButtonComponent.ctorParameters = () => [
    { type: ElementRef, },
];
LightboxButtonComponent.propDecorators = {
    "disable": [{ type: Input },],
};
//# sourceMappingURL=lightbox-button.component.js.map