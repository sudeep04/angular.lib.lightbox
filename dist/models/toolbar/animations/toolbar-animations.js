import { trigger, state, transition, style, animate } from '@angular/animations';
export const ToolbarAnimations = {
    visibilityAnimation: trigger('toolbarVisibility', [
        state('state1', style({ height: '{{height}}px' }), { params: { height: 0 } }),
        state('state2', style({ height: '{{height}}px' }), { params: { height: 0 } }),
        transition('* => *', [
            animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};
//# sourceMappingURL=toolbar-animations.js.map