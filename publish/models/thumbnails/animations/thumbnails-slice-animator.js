import { Animator } from '../../Animator';
export class ThumbnailsSliceAnimator extends Animator {
    constructor(direction) {
        super();
        this.setDirection(direction);
    }
    setDirection(direction) {
        this._direction = direction;
        const params = {
            top: direction === 'horizontal' ? 0 : 0,
            left: direction === 'horizontal' ? 0 : 0,
            duration: 0
        };
        this.animate(params, null, null);
    }
    slice(offset, duration, startCb, doneCb) {
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
//# sourceMappingURL=thumbnails-slice-animator.js.map