import { AnimationEvent } from '@angular/animations';
import { ThumbnailsSliceAnimation } from './thumbnails-slice-animation.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Animator } from '../../Animator';

export class ThumbnailsSliceAnimator extends Animator<ThumbnailsSliceAnimation> {

    private _direction: 'vertical' | 'horizontal';

    constructor(direction: 'vertical' | 'horizontal') {
        super();
        this.setDirection(direction);
    }

    public setDirection(direction: 'vertical' | 'horizontal'): void {

        this._direction = direction;

        const params = {
            top: direction === 'horizontal' ? 0 : 0,
            left: direction === 'horizontal' ? 0 : 0,
            duration: 0
        };

        this.animate(params, null, null);
    }

    public slice(offset: number, duration: number, startCb?: () => void, doneCb?: () => void): void {

        const params = {
            top: this._direction === 'horizontal' ? 0 : offset,
            left: this._direction === 'horizontal' ? offset : 0,
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
