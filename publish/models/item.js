import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export class Item {
    constructor() {
        this._dimensionsBehaviorSubject = new BehaviorSubject(undefined);
    }
    get dimensions() {
        return this._dimensionsBehaviorSubject.getValue();
    }
    set dimensions(value) {
        this._dimensionsBehaviorSubject.next(value);
    }
    get $dimensions() {
        return this._dimensionsBehaviorSubject.asObservable();
    }
}
//# sourceMappingURL=item.js.map