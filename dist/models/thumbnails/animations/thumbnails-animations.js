import { trigger, state, transition, style, animate } from '@angular/animations';
export const ThumbnailsAnimations = {
    visibilityAnimation: trigger('thumbnailsVisibility', [
        state('state1', style({ maxWidth: '{{maxWidth}}', maxHeight: '{{maxHeight}}' }), { params: { maxWidth: '0px', maxHeight: '0px' } }),
        state('state2', style({ maxWidth: '{{maxWidth}}', maxHeight: '{{maxHeight}}' }), { params: { maxWidth: '0px', maxHeight: '0px' } }),
        transition('* => *', [
            animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ]),
    sliceAnimation: trigger('thumbnailsSlice', [
        state('state1', style({ top: '{{top}}px', left: '{{left}}px' }), { params: { top: 0, left: 0 } }),
        state('state2', style({ top: '{{top}}px', left: '{{left}}px' }), { params: { top: 0, left: 0 } }),
        transition('* => *', [
            animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};
//# sourceMappingURL=thumbnails-animations.js.map