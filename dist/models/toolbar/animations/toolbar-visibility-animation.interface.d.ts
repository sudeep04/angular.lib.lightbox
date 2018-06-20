import { Animation } from '../../animation.interface';
export interface ToolbarVisibilityAnimation extends Animation {
    params?: {
        height: number;
        duration: number;
    };
}
