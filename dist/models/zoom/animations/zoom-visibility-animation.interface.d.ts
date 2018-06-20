import { Animation } from '../../animation.interface';
export interface ZoomVisibilityAnimation extends Animation {
    params?: {
        height: number;
        duration: number;
    };
}
