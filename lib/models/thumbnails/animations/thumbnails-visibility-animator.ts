import { AnimationEvent } from '@angular/animations';
import { ThumbnailsVisibilityAnimation } from './thumbnails-visibility-animation.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Animator } from '../../Animator';

export class ThumbnailsVisibilityAnimator extends Animator<ThumbnailsVisibilityAnimation> {

    private _direction: 'vertical' | 'horizontal';

    private _thickness: number;

    constructor(direction: 'vertical' | 'horizontal', thickness: number) {
        super();
        this._thickness = thickness;
        this.setDirection(direction);
    }

    public setDirection(direction: 'vertical' | 'horizontal'): void {

        this._direction = direction;

        const params = {
            maxHeight: direction === 'horizontal' ? '0px' : '100%',
            maxWidth: direction === 'horizontal' ? '100%' : '0px',
            duration: 0
        };

        this.animate(params, null, null);
    }

    public setThickness(duration: number, thickness: number): void {

        this._thickness = thickness;

        const params = {
            maxHeight: this._direction === 'horizontal' ? (this.animation.params.maxHeight === '0px' ? '0px' : thickness + 'px') : '100%',
            maxWidth: this._direction === 'horizontal' ? '100%' : (this.animation.params.maxWidth === '0px' ? '0px' : thickness + 'px'),
            duration
        };

        this.animate(params, null, null);
    }

    public hide(duration: number, startCb?: () => void, doneCb?: () => void): void {

        const params = {
            maxHeight: this._direction === 'horizontal' ? '0px' : '100%',
            maxWidth: this._direction === 'horizontal' ? '100%' : '0px',
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

    public show(duration: number, startCb?: () => void, doneCb?: () => void): void {

        const params = {
            maxHeight: this._direction === 'horizontal' ? this._thickness + 'px' : '100%',
            maxWidth: this._direction === 'horizontal' ? '100%' : this._thickness + 'px',
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
