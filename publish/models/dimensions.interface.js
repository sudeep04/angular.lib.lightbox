export class Dimensions {
    constructor(width, height) {
        this._height = height;
        this._width = width;
        this._ratio = this._width / this._height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
        this._ratio = this._width / this._height;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
        this._ratio = this._width / this._height;
    }
    get ratio() {
        return this._ratio;
    }
}
//# sourceMappingURL=dimensions.interface.js.map