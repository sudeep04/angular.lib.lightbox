import { trigger, state, transition, style, animate, AnimationTriggerMetadata } from '@angular/animations';

export const ZoomAnimations: {
    readonly visibilityAnimation: AnimationTriggerMetadata;
} = {
        visibilityAnimation: trigger('zoomVisibility', [
            state('state1',
                style({ height: '{{height}}px' }),
                { params: { height: 0 } }),
            state('state2',
                style({ height: '{{height}}px' }),
                { params: { height: 0 } }),
            transition('* => *', [
                animate('{{duration}}s')
            ], { params: { duration: 0 } })
        ])
    };
