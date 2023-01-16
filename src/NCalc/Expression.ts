import { EvaluateOptions } from "./EvaluationOptions";
import { LogicalExpression } from "./LogicalExpression";

export class Expression {

    public EvaluationOptions: EvaluateOptions = EvaluateOptions.None;

    /**
     * Orginal strings representation of the expression
     */
    protected OriginalExpression: string;

    private static _cacheEnabled: boolean = true;

    private static _compiledExpression: { [key: string]: WeakRef<any> } = {};

    public get CacheEnabled()
    {
        return Expression._cacheEnabled;
    }

    public set CacheEnabled(value: boolean)
    {
        Expression._cacheEnabled = value;
        if (value === false)
        {
            Expression._compiledExpression = {};
        }
    }

    public constructor(expression: string, options: EvaluateOptions) {

        if (expression == null || expression == "")
        {
            throw new Error("The expression cannot be null or empty");
        }

        this.OriginalExpression = expression;
        if (options)
        {
            this.EvaluationOptions = options;
        }
    }

    public static Compile(expression: string, nocache: boolean): LogicalExpression
        {
            let logicalExpression: LogicalExpression | null = null;
            
            // @todo cache logic

            if (logicalExpression == null)
            {
                var lexer = new NCalcLexer(new ANTLRStringStream(expression));
                var parser = new NCalcParser(new CommonTokenStream(lexer));

                logicalExpression = parser.GetExpression();

                if (parser.Errors != null && parser.Errors.Count > 0)
                {
                    throw new EvaluationException(String.Join(Environment.NewLine, parser.Errors.ToArray()));
                }

                if (_cacheEnabled && !nocache)
                {
                    try
                    {
                        Rwl.AcquireWriterLock(Timeout.Infinite);
                        _compiledExpressions[expression] = new WeakReference(logicalExpression);
                    }
                    finally
                    {
                        Rwl.ReleaseWriterLock();
                    }

                    CleanCache();

                    Trace.TraceInformation("Expression added to cache: " + expression);
                }
            }

            return logicalExpression;
        }

    public Evaluate(): object {
        return {};
    }

}