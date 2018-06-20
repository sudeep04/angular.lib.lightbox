import { Animator } from '../../Animator';
export class ZoomVisibilityAnimator extends Animator {
    constructor() {
        super();
    }
    show(duration, startCb, doneCb) {
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
    hide(duration, startCb, doneCb) {
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
//# sourceMappingURL=zoom-visibility-animator.js.map