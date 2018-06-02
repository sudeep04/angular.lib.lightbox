import { ControlsConfiguration } from '../models/controls-configuration.interface';
import { AnimationsConfiguration } from '../models/animations-configuration.interface';
export declare class LightboxConfigurationService {
    private _configuration;
    constructor();
    readonly controls: ControlsConfiguration;
    readonly animations: AnimationsConfiguration;
}
