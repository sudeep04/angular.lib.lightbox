import { ThumbnailsSliceAnimation } from './thumbnails-slice-animation.interface';
import { Animator } from '../../Animator';
export declare class ThumbnailsSliceAnimator extends Animator<ThumbnailsSliceAnimation> {
    private _direction;
    constructor(direction: 'vertical' | 'horizontal');
    setDirection(direction: 'vertical' | 'horizontal'): void;
    slice(offset: number, duration: number, startCb?: () => void, doneCb?: () => void): void;
}
