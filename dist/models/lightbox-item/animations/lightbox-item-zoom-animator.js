import { Animator } from '../../Animator';
const ZOOM_PERCENT = 10;
export class LightboxItemZoomAnimator extends Animator {
    constructor() {
        super();
    }
    origin(itemOriginalDimensions, itemOriginalPosition, containerDimensions, startCb, doneCb) {
        const offsetLeft = Math.round(itemOriginalPosition.offsetLeft + (itemOriginalDimensions.width - containerDimensions.width) / 2);
        const offsetTop = Math.round(itemOriginalPosition.offsetTop + (itemOriginalDimensions.height - containerDimensions.height) / 2);
        const params = {
            width: Math.round(itemOriginalDimensions.width * 100 / containerDimensions.width),
            offsetTop,
            offsetLeft,
            duration: 0
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
    zoom(width, itemOriginalDimensions, itemDimensions, containerDimensions, duration, startCb, doneCb) {
        const params = {
            width,
            offsetLeft: this.animation.params ? this._getZoomOffsetLeft(itemDimensions, containerDimensions, this.animation.params.offsetLeft, itemOriginalDimensions.width * width / 100) : 0,
            offsetTop: this.animation.params ? this._getZoomOffsetTop(itemDimensions, containerDimensions, this.animation.params.offsetTop, itemOriginalDimensions.height * width / 100) : 0,
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
    _getZoomOffsetLeft(itemDimensions, containerDimensions, offset, width) {
        if (containerDimensions.width >= width) {
            return 0;
        }
        if (offset > (width - itemDimensions.width) / 2) {
            offset = (width - itemDimensions.width) / 2;
        }
        if (offset < -1 * (width - itemDimensions.width) / 2) {
            offset = -1 * (width - itemDimensions.width) / 2;
        }
        return offset;
    }
    _getZoomOffsetTop(itemDimensions, containerDimensions, offset, height) {
        if (containerDimensions.height >= height) {
            return 0;
        }
        if (offset > (height - itemDimensions.height) / 2) {
            offset = (height - itemDimensions.height) / 2;
        }
        if (offset < -1 * (height - itemDimensions.height) / 2) {
            offset = -1 * (height - itemDimensions.height) / 2;
        }
        return offset;
    }
}
//# sourceMappingURL=lightbox-item-zoom-animator.js.map