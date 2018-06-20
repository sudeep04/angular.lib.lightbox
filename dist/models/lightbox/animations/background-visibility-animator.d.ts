import { BackgroundVisibilityAnimation } from './background-visibility-animation.interface';
import { Animator } from '../../Animator';
export declare class BackgroundVisibilityAnimator extends Animator<BackgroundVisibilityAnimation> {
    constructor();
    hide(duration: number, startCb?: () => void, doneCb?: () => void): void;
    show(opacity: number, duration: number, startCb?: () => void, doneCb?: () => void): void;
}
