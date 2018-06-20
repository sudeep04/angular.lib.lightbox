import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export class Animator {
    constructor() {
        this.animation = { value: 'state1' };
        this._startBehaviorSubject = new BehaviorSubject('state1');
        this._doneBehaviorSubject = new BehaviorSubject('state1');
    }
    animationStart(event) {
        this._startBehaviorSubject.next(event.toState);
    }
    animationDone(event) {
        this._doneBehaviorSubject.next(event.toState);
    }
    animate(params, startCb, doneCb) {
        const animation = {
            value: this.animation.value === 'state1' ? 'state2' : 'state1',
            params: Object.assign({}, params)
        };
        this.animation = animation;
        if (startCb) {
            this._startBehaviorSubject.filter((value) => value === animation.value).first().subscribe(() => {
                startCb();
            });
        }
        if (doneCb) {
            this._doneBehaviorSubject.filter((value) => value === animation.value).first().subscribe(() => {
                doneCb();
            });
        }
    }
}
//# sourceMappingURL=Animator.js.map