import { Animator } from '../../Animator';
export class ThumbnailsVisibilityAnimator extends Animator {
    constructor(direction, thickness) {
        super();
        this._thickness = thickness;
        this.setDirection(direction);
    }
    setDirection(direction) {
        this._direction = direction;
        const params = {
            maxHeight: direction === 'horizontal' ? '0px' : '100%',
            maxWidth: direction === 'horizontal' ? '100%' : '0px',
            duration: 0
        };
        this.animate(params, null, null);
    }
    setThickness(duration, thickness) {
        this._thickness = thickness;
        const params = {
            maxHeight: this._direction === 'horizontal' ? (this.animation.params.maxHeight === '0px' ? '0px' : thickness + 'px') : '100%',
            maxWidth: this._direction === 'horizontal' ? '100%' : (this.animation.params.maxWidth === '0px' ? '0px' : thickness + 'px'),
            duration
        };
        this.animate(params, null, null);
    }
    hide(duration, startCb, doneCb) {
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
    show(duration, startCb, doneCb) {
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
//# sourceMappingURL=thumbnails-visibility-animator.js.map