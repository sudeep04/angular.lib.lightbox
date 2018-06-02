import { trigger, state, transition, style, animate } from '@angular/animations';
export const LightboxAnimations = {
    visibilityAnimation: trigger('backgroundVisibility', [
        state('state1', style({ opacity: '{{opacity}}' }), { params: { opacity: 0 } }),
        state('state2', style({ opacity: '{{opacity}}' }), { params: { opacity: 0 } }),
        transition('* => *', [
            animate('{{duration}}s'),
        ], { params: { duration: 0 } }),
    ]),
    sliceAnimation: trigger('lightboxSlice', [
        state('state1', style({ left: '{{left}}%' }), { params: { left: 0 } }),
        state('state2', style({ left: '{{left}}%' }), { params: { left: 0 } }),
        transition('* => *', [
            animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};
//# sourceMappingURL=lightbox-animations.js.map