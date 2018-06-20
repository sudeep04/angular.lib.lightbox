import { Animation } from '../../animation.interface';

export interface BackgroundVisibilityAnimation extends Animation {
    params?: {
        opacity: number;
        duration: number;
    };
}
