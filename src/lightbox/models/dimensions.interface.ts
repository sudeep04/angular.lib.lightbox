
export class Dimensions {

    private _height: number;

    private _width: number;

    private _ratio: number;

    constructor(width: number, height: number) {

        this._height = height;
        this._width = width;
        this._ratio = this._width / this._height;
    }

    public get width(): number {

        return this._width;
    }

    public set width(value: number) {

        this._width = value;
        this._ratio = this._width / this._height;
    }

    public get height(): number {

        return this._height;
    }

    public set height(value: number) {

        this._height = value;
        this._ratio = this._width / this._height;
    }

    public get ratio(): number {

        return this._ratio;
    }
}
