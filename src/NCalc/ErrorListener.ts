/* eslint-disable @typescript-eslint/no-explicit-any */
export class ErrorListener {

    private _errors: any = [];
    
    public get errors() {
        return this._errors;
    }

    public syntaxError(...args: any) {
        this._errors.push(args);
    }

    // Left empty on purpose, if we do not implement these methods, NcalcJS will crash.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    reportAmbiguity() {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    reportAttemptingFullContext() {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    reportContextSensitivity() {
    }
}