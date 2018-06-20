
import { Position } from './position.interface';
import { Dimensions } from './dimensions.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export class Item {

    public title: string;

    public container: string;

    public src: string;

    public xsSrc: string;

    public smSrc: string;

    public mdSrc: string;

    public lgSrc: string;

    public xlSrc: string;

    public xsBreakpoint: number;

    public smBreakpoint: number;

    public mdBreakpoint: number;

    public lgBreakpoint: number;

    public position?: Position;

    public isVideo: boolean;

    private _dimensionsBehaviorSubject: BehaviorSubject<Dimensions> = new BehaviorSubject<Dimensions>(undefined);

    public get dimensions(): Dimensions {

        return this._dimensionsBehaviorSubject.getValue();
    }

    public set dimensions(value: Dimensions) {

        this._dimensionsBehaviorSubject.next(value);
    }

    public get $dimensions(): Observable<Dimensions> {

        return this._dimensionsBehaviorSubject.asObservable();
    }
}
