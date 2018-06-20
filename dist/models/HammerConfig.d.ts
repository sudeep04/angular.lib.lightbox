import { HammerGestureConfig } from '@angular/platform-browser';
export declare class HammerConfig extends HammerGestureConfig {
    overrides: {
        swipe: {
            direction: number;
        };
        pan: {
            direction: number;
        };
    };
}
