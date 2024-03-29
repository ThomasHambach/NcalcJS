import {Expression} from './Expression';

export class FunctionArgs {
    private _result: any;

    public HasResult: boolean;

    private _parameters: Expression[] = [];

    public get Result() {
        return this._result;
    }

    public set Result(value: any) {
        this._result = value;
        this.HasResult = true;
    }

    public get Parameters(): Expression[] {
        return this._parameters;
    }

    public set Parameters(value: Expression[]) {
        this._parameters = value;
    }
}
