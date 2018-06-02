import { LightboxSliceAnimation } from './lightbox-slice-animation.interface';
import { Animator } from '../../Animator';
export declare class LightboxSliceAnimator extends Animator<LightboxSliceAnimation> {
    constructor();
    slice(offset: number, duration: number, startCb?: () => void, doneCb?: () => void): void;
}
