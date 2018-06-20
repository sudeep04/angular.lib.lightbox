import { AnimationEvent } from '@angular/animations';
import { LightboxItemZoomAnimation } from './lightbox-item-zoom-animation.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Animator } from '../../Animator';
import { Dimensions } from '../../dimensions.interface';
import { Position } from '../../position.interface';

const ZOOM_PERCENT = 10;

export class LightboxItemZoomAnimator extends Animator<LightboxItemZoomAnimation> {

    constructor() {
        super();
    }

    public origin(itemOriginalDimensions: Dimensions, itemOriginalPosition: Position, containerDimensions: Dimensions, startCb?: () => void, doneCb?: () => void): void {

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

    public zoom(width: number, itemOriginalDimensions: Dimensions, itemDimensions: Dimensions, containerDimensions: Dimensions, duration: number, startCb?: () => void, doneCb?: () => void): void {

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

    private _getZoomOffsetLeft(itemDimensions: Dimensions, containerDimensions: Dimensions, offset: number, width: number) {

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

    private _getZoomOffsetTop(itemDimensions: Dimensions, containerDimensions: Dimensions, offset: number, height: number) {

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
