import { AnimationEvent } from '@angular/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Animation } from './animation.interface';

export class Animator<TAnimation extends Animation> {

    public animation: TAnimation;

    private _startBehaviorSubject: BehaviorSubject<'state1' | 'state2'>;

    private _doneBehaviorSubject: BehaviorSubject<'state1' | 'state2'>;

    constructor() {

        this.animation = { value: 'state1' } as TAnimation;
        this._startBehaviorSubject = new BehaviorSubject<'state1' | 'state2'>('state1');
        this._doneBehaviorSubject = new BehaviorSubject<'state1' | 'state2'>('state1');
    }

    public animationStart(event: AnimationEvent): void {

        this._startBehaviorSubject.next(event.toState as 'state1' | 'state2');
    }

    public animationDone(event: AnimationEvent): void {

        this._doneBehaviorSubject.next(event.toState as 'state1' | 'state2');
    }

    protected animate(params: any, startCb?: () => void, doneCb?: () => void): void {

        const animation: TAnimation = {
            value: this.animation.value === 'state1' ? 'state2' : 'state1',
            params: Object.assign({}, params)
        } as TAnimation;

        this.animation = animation;

        if (startCb) {
            this._startBehaviorSubject.filter((value) => value === animation.value).first().subscribe(() => {
                startCb();
            });
        }

        if (doneCb) {
            this._doneBehaviorSubject.filter((value) => value === animation.value).first().subscribe(() => {

                doneCb();
            });
        }
    }
}
