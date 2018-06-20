import { ThumbnailsVisibilityAnimation } from './thumbnails-visibility-animation.interface';
import { Animator } from '../../Animator';
export declare class ThumbnailsVisibilityAnimator extends Animator<ThumbnailsVisibilityAnimation> {
    private _direction;
    private _thickness;
    constructor(direction: 'vertical' | 'horizontal', thickness: number);
    setDirection(direction: 'vertical' | 'horizontal'): void;
    setThickness(duration: number, thickness: number): void;
    hide(duration: number, startCb?: () => void, doneCb?: () => void): void;
    show(duration: number, startCb?: () => void, doneCb?: () => void): void;
}
