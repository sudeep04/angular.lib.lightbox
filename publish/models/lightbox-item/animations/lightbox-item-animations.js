import { trigger, state, transition, style, animate } from '@angular/animations';
export const LightboxItemAnimations = {
    zoomAnimation: trigger('lightboxItemZoom', [
        state('state1', style({ top: '{{offsetTop}}px', left: '{{offsetLeft}}px', width: '{{width}}%', height: 'auto' }), { params: { offsetLeft: 0, offsetTop: 0, width: 0 } }),
        state('state2', style({ top: '{{offsetTop}}px', left: '{{offsetLeft}}px', width: '{{width}}%', height: 'auto' }), { params: { offsetLeft: 0, offsetTop: 0, width: 0 } }),
        transition('* => *', [
            animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};
//# sourceMappingURL=lightbox-item-animations.js.map