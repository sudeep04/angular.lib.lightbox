import { ZoomVisibilityAnimation } from './zoom-visibility-animation.interface';
import { Animator } from '../../Animator';
export declare class ZoomVisibilityAnimator extends Animator<ZoomVisibilityAnimation> {
    constructor();
    show(duration: number, startCb?: () => void, doneCb?: () => void): void;
    hide(duration: number, startCb?: () => void, doneCb?: () => void): void;
}
