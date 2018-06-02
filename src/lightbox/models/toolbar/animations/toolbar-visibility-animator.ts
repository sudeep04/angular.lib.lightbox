import { AnimationEvent } from '@angular/animations';
import { ToolbarVisibilityAnimation } from './toolbar-visibility-animation.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Animator } from '../../Animator';

export class ToolbarVisibilityAnimator extends Animator<ToolbarVisibilityAnimation> {

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
