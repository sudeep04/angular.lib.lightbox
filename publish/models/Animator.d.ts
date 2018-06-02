import { AnimationEvent } from '@angular/animations';
import { Animation } from './animation.interface';
export declare class Animator<TAnimation extends Animation> {
    animation: TAnimation;
    private _startBehaviorSubject;
    private _doneBehaviorSubject;
    constructor();
    animationStart(event: AnimationEvent): void;
    animationDone(event: AnimationEvent): void;
    protected animate(params: any, startCb?: () => void, doneCb?: () => void): void;
}
