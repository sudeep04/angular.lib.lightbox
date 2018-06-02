import { Animation } from '../../animation.interface';

export interface ThumbnailsSliceAnimation extends Animation {
    params?: {
        top: number;
        left: number;
        duration: number;
    };
}
