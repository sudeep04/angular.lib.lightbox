import { Animation } from '../../animation.interface';

export interface LightboxItemZoomAnimation extends Animation {
    params?: {
        width: number;
        offsetTop: number;
        offsetLeft: number;
        duration: number;
    };
}
