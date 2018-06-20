import { Animation } from '../../animation.interface';
export interface LightboxSliceAnimation extends Animation {
    params?: {
        left: number;
        duration: number;
    };
}
