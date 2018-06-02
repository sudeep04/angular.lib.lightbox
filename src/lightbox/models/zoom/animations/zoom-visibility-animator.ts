import { AnimationEvent } from '@angular/animations';
import { ZoomVisibilityAnimation } from './zoom-visibility-animation.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Animator } from '../../Animator';

export class ZoomVisibilityAnimator extends Animator<ZoomVisibilityAnimation> {

    constructor() {
        super();
    }

    public show(duration: number, startCb?: () => void, doneCb?: () => void): void {

        const params = {
            height: 64,
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

    public hide(duration: number, startCb?: () => void, doneCb?: () => void): void {

        const params = {
            height: 0,
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
