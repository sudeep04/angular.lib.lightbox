import { HammerGestureConfig } from '@angular/platform-browser';

export class HammerConfig extends HammerGestureConfig {
    public overrides = {
        swipe: { direction: Hammer.DIRECTION_ALL },
        pan: { direction: Hammer.DIRECTION_ALL }
    };
}
