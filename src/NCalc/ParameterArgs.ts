export class ParameterArgs {
    private _result: any;
    public get Result() {
        return this._result;
    }

    public set Result(value: any) {
        this._result = value;
        this.HasResult = true;
    }
    public HasResult = false;
}
