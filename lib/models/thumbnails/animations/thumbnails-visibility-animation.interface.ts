import { Animation } from '../../animation.interface';

export interface ThumbnailsVisibilityAnimation extends Animation {
    params?: {
        maxWidth: string;
        maxHeight: string;
        duration: number;
    };
}
