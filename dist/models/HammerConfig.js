import { HammerGestureConfig } from '@angular/platform-browser';
export class HammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: Hammer.DIRECTION_ALL },
            pan: { direction: Hammer.DIRECTION_ALL }
        };
    }
}
//# sourceMappingURL=HammerConfig.js.map