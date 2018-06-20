import { Animator } from '../../Animator';
export class LightboxSliceAnimator extends Animator {
    constructor() {
        super();
    }
    slice(offset, duration, startCb, doneCb) {
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
//# sourceMappingURL=lightbox-slice-animator.js.map