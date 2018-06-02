import { ToolbarVisibilityAnimation } from './toolbar-visibility-animation.interface';
import { Animator } from '../../Animator';
export declare class ToolbarVisibilityAnimator extends Animator<ToolbarVisibilityAnimation> {
    constructor();
    show(duration: number, startCb?: () => void, doneCb?: () => void): void;
    hide(duration: number, startCb?: () => void, doneCb?: () => void): void;
}
