import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { NCalcLexer } from "../Grammar/NCalcLexer";
import { NCalcParser } from "../Grammar/NCalcParser";
import { EvaluationVisitor } from "./Domain/EvaluationVisitor";
import { EvaluateOptions } from "./EvaluationOptions";
import { LogicalExpression } from "./Domain/LogicalExpression";

export class Expression {

    public Options: EvaluateOptions = EvaluateOptions.None;

    /**
     * Orginal strings representation of the expression
     */
    protected OriginalExpression: string;

    private static _cacheEnabled: boolean = true;

    private static _compiledExpression: { [key: string]: WeakRef<any> } = {};

    public Error: string = "";

    public ParsedExpression: LogicalExpression;

    protected ParameterEnumerators: {[key: string]: any} = {};

    protected ParametersBackup: {[key: string]: object} = {};

    public Parameters: {[key: string]: any} = {};

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

    public constructor(expression: string, options: EvaluateOptions = EvaluateOptions.None) {

        if (expression == null || expression == "")
        {
            throw new Error("The expression cannot be null or empty");
        }

        this.OriginalExpression = expression;
        if (options)
        {
            this.Options = options;
        }
    }

    public static Compile(expression: string, nocache: boolean): LogicalExpression
    {
        let logicalExpression: LogicalExpression | null = null;
        
        // @todo cache logic

        if (logicalExpression == null)
        {

            // Create the lexer and parser
            let inputStream = new ANTLRInputStream(expression);
            let lexer = new NCalcLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);
            let parser = new NCalcParser(tokenStream);

            logicalExpression = parser.GetExpression();

            if (parser.Errors != null && parser.Errors.length > 0)
            {
                throw new Error(parser.Errors.join("\n"));
            }

        }

        return logicalExpression;
    }

    public HasErrors(): boolean 
    {
        return false;
    }

    public Evaluate(): any
    {
        if (this.HasErrors())
        {
            throw new Error(this.Error);
        }

        if (this.ParsedExpression == null)
        {
            this.ParsedExpression = Expression.Compile(this.OriginalExpression, (this.Options & EvaluateOptions.NoCache) == EvaluateOptions.NoCache);
        }


        var visitor = new EvaluationVisitor(this.Options);
        // visitor.EvaluateFunction += EvaluateFunction;
        // visitor.EvaluateParameter += EvaluateParameter;
        visitor.Parameters = this.Parameters;

        // if array evaluation, execute the same expression multiple times
        if ((this.Options & EvaluateOptions.IterateParameters) == EvaluateOptions.IterateParameters)
        {
            let size = -1;
            this.ParametersBackup = {};
            for (let key in this.Parameters)
            {
                this.ParametersBackup[key] = this.Parameters[key];
            }

            this.ParameterEnumerators = {};
            
            // @todo what?
            // foreach (object parameter in Parameters.Values)
            // {
            //     if (parameter is IEnumerable)
            //     {
            //         int localsize = 0;
            //         foreach (object o in (IEnumerable)parameter)
            //         {
            //             localsize++;
            //         }

            //         if (size == -1)
            //         {
            //             size = localsize;
            //         }
            //         else if (localsize != size)
            //         {
            //             throw new EvaluationException("When IterateParameters option is used, IEnumerable parameters must have the same number of items");
            //         }
            //     }
            // }

            for (let key in this.Parameters)
            {
                var parameter = this.Parameters[key];
                if (parameter != null)
                {
                    this.ParameterEnumerators[key] = parameter.GetEnumerator();
                }
            }

            var results = [];
            for (let i = 0; i < size; i++)
            {
                for (let key in this.ParameterEnumerators)
                {
                    let enumerator = this.ParameterEnumerators[key];
                    enumerator.MoveNext();
                    this.Parameters[key] = enumerator.Current;
                }

                this.ParsedExpression.Accept(visitor);
                results.push(visitor.Result);
            }

            return results;
        }

        this.ParsedExpression.Accept(visitor);
        return visitor.Result;
        
    }

}

function foreach(string: any, arg1: boolean) {
    throw new Error("Function not implemented.");
}
