import { Animator } from '../../Animator';
export class BackgroundVisibilityAnimator extends Animator {
    constructor() {
        super();
    }
    hide(duration, startCb, doneCb) {
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
    show(opacity, duration, startCb, doneCb) {
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
//# sourceMappingURL=background-visibility-animator.js.map