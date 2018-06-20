import { AnimationEvent } from '@angular/animations';
import { BackgroundVisibilityAnimation } from './background-visibility-animation.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Animator } from '../../Animator';

export class BackgroundVisibilityAnimator extends Animator<BackgroundVisibilityAnimation> {

    constructor() {
        super();
    }

    public hide(duration: number, startCb?: () => void, doneCb?: () => void): void {

        const params = {
            opacity: 0,
            duration
        };

        this.animate(params, () => {

            if (startCb) {

                startCb();
            }
        }, () => {

            if (doneCb) {

                doneCb();
            }
        });
    }

    public show(opacity: number, duration: number, startCb?: () => void, doneCb?: () => void): void {

        const params = {
            opacity,
            duration
        };

        this.animate(params, () => {

            if (startCb) {

                startCb();
            }
        }, () => {

            if (doneCb) {

                doneCb();
            }
        });
    }
}
