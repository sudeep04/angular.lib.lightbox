import { Position } from './position.interface';
import { Dimensions } from './dimensions.interface';
import { Observable } from 'rxjs/Observable';
export declare class Item {
    title: string;
    container: string;
    src: string;
    xsSrc: string;
    smSrc: string;
    mdSrc: string;
    lgSrc: string;
    xlSrc: string;
    xsBreakpoint: number;
    smBreakpoint: number;
    mdBreakpoint: number;
    lgBreakpoint: number;
    position?: Position;
    isVideo: boolean;
    private _dimensionsBehaviorSubject;
    dimensions: Dimensions;
    readonly $dimensions: Observable<Dimensions>;
}
