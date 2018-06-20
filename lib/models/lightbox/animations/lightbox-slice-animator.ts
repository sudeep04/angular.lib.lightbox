import { AnimationEvent } from '@angular/animations';
import { LightboxSliceAnimation } from './lightbox-slice-animation.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Animator } from '../../Animator';

export class LightboxSliceAnimator extends Animator<LightboxSliceAnimation> {

    constructor() {
        super();
    }

    public slice(offset: number, duration: number, startCb?: () => void, doneCb?: () => void): void {

        const params = {
            left: offset,
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
