import { ArgumentException, BinaryExpression, BinaryExpressionType, Identifier, LogicalExpressionVisitor, NCalcFunction, TernaryExpression, UnaryExpression, UnaryExpressionType } from '@/NCalc/Domain';
import { EvaluateOptions } from '@/NCalc/EvaluationOptions';
import { Numbers, TypeCode } from '@/NCalc/Numbers';
import { Expression } from '@/NCalc/Expression';
import { FunctionArgs } from '@/NCalc//FunctionArgs';
import { ParameterArgs } from '@/NCalc//ParameterArgs';
import { EvaluateFunctionHandler, EvaluateParameterHandler } from '@/NCalc//types';
import { ValueExpression } from '@/NCalc/Domain/ValueExpression';

const equalsIgnoringCase = (text, other) => {
    return text.localeCompare(other, undefined, {sensitivity: 'base'}) === 0;
};

export class EvaluationVisitor extends LogicalExpressionVisitor {
    // private delegate T Func<T>();

    private readonly _options: EvaluateOptions = EvaluateOptions.None;
    // private readonly CultureInfo _cultureInfo;

    private get IgnoreCase() {
        return this._options & EvaluateOptions.IgnoreCase;
    }

    public constructor(options: EvaluateOptions) {
        super();
        this._options = options;
    }

    public Result: any;

    private Evaluate(expression: any): any {
        expression.Accept(this);
        return this.Result;
    }

    public static FromJson(expression: any)
    {
        switch (expression.ClassName) {
        case 'LogicalExpression':
            throw new Error();
        case 'TernaryExpression':
            return new TernaryExpression(this.FromJson(expression.LeftExpression), this.FromJson(expression.MiddleExpression), this.FromJson(expression.RightExpression));
            break;
        case 'BinaryExpression':
            return new BinaryExpression(expression.Type, this.FromJson(expression.LeftExpression), this.FromJson(expression.RightExpression));
            break;
        case 'UnaryExpression':
            return new UnaryExpression(expression.Type, this.FromJson(expression.Expression));
            break;
        case 'ValueExpression':
            return new ValueExpression(expression.Value, expression.ValueType);
            break;
        case 'NCalcFunction':
            return new NCalcFunction(expression.Identifier, expression.Expressions.map(x => this.FromJson(x)));
            break;
        case 'Identifier':
            return new Identifier(expression.Name);
            break;
        default:
            throw new Error(`Invalid expression type: ${expression.constructor.name}`);
        }
    }

    public Visit(expression: any): void {
        switch (expression.constructor.name) {
        case 'LogicalExpression':
            throw new Error();
        case 'TernaryExpression':
            this.VisitTernary(expression);
            break;
        case 'BinaryExpression':
            this.VisitBinaryExpression(expression);
            break;
        case 'UnaryExpression':
            this.VisitUnaryExpression(expression);
            break;
        case 'ValueExpression':
            this.VisitValueExpression(expression);
            break;
        case 'NCalcFunction':
            this.VisitNCalcFunction(expression);
            break;
        case 'Identifier':
            this.VisitIdentifier(expression);
            break;
        default:
            throw new Error(`Invalid expression type: ${expression.constructor.name}`);
        }
    }

    public VisitTernary(expression: TernaryExpression) {
    // Evaluates the left expression and saves the value
        expression.LeftExpression.Accept(this);
        const left = this.Result == true;

        if (left) {
            expression.MiddleExpression.Accept(this);
        } else {
            expression.RightExpression.Accept(this);
        }
    }

    private static CommonTypes: string[] = ['number', 'boolean', 'string', 'bigint'];

    /// <summary>
    /// Gets the the most precise type.
    /// </summary>
    /// <param name="a">Type a.</param>
    /// <param name="b">Type b.</param>
    /// <returns></returns>
    private static GetMostPreciseType(a: string, b: string): string {
        for (const t in this.CommonTypes) {
            if (typeof a == t || typeof b == t) {
                return t;
            }
        }

        return a;
    }

    // @todo Revisit this function for equality
    public CompareUsingMostPreciseType(a: any, b: any): number {
        if (a == null && b == null) {
            return 0;
        }

        if (a == null) {
            return -1;
        }

        if (b == null) {
            return 1;
        }

        if (typeof a == 'number' || typeof b == 'number') {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            return 0;
        } else {
            return a == b ? 0 : 1;
        }

    // return Comparer.Default.Compare(Convert.ChangeType(a, mpt), Convert.ChangeType(b, mpt));
    }

    private static IsReal(value: object): boolean {
        const typeCode = typeof value;

        return typeCode == TypeCode.Decimal;
    }

    public VisitBinaryExpression(expression: BinaryExpression): void {
    // simulate Lazy<Func<>> behavior for late evaluation
        let leftValue = null;
        const left = (): any => {
            if (leftValue == null) {
                expression.LeftExpression.Accept(this);
                leftValue = this.Result;
            }
            return leftValue;
        };

        // simulate Lazy<Func<>> behavior for late evaluations
        let rightValue = null;
        const right = (): any => {
            if (rightValue == null) {
                expression.RightExpression.Accept(this);
                rightValue = this.Result;
            }
            return rightValue;
        };

        // @todo re-evaluate this implementation
        switch (expression.Type) {
        case BinaryExpressionType.And:
            this.Result = left() == true && right() == true;
            break;

        case BinaryExpressionType.Or:
            this.Result = left() == true || right() == true;
            break;

        case BinaryExpressionType.Div:
            this.Result =
          EvaluationVisitor.IsReal(left()) || EvaluationVisitor.IsReal(right())
              ? Numbers.Divide(left(), right())
              : Numbers.Divide(parseFloat(left()) as unknown as any, right());
            break;

        case BinaryExpressionType.Equal:
        // Use the type of the left operand to make the comparison
            this.Result = this.CompareUsingMostPreciseType(left(), right()) == 0;
            break;

        case BinaryExpressionType.Greater:
        // Use the type of the left operand to make the comparison
            this.Result = this.CompareUsingMostPreciseType(left(), right()) > 0;
            break;

        case BinaryExpressionType.GreaterOrEqual:
        // Use the type of the left operand to make the comparison
            this.Result = this.CompareUsingMostPreciseType(left(), right()) >= 0;
            break;

        case BinaryExpressionType.Lesser:
        // Use the type of the left operand to make the comparison
            this.Result = this.CompareUsingMostPreciseType(left(), right()) < 0;
            break;

        case BinaryExpressionType.LesserOrEqual:
        // Use the type of the left operand to make the comparison
            this.Result = this.CompareUsingMostPreciseType(left(), right()) <= 0;
            break;

        case BinaryExpressionType.Minus:
            this.Result = Numbers.Subtract(left(), right());
            break;

        case BinaryExpressionType.Modulo:
            this.Result = Numbers.Modulo(left(), right());
            break;

        case BinaryExpressionType.NotEqual:
        // Use the type of the left operand to make the comparison
            this.Result = this.CompareUsingMostPreciseType(left(), right()) != 0;
            break;

        case BinaryExpressionType.Plus:
            if (typeof left() == 'string') {
                this.Result = left().concat(right());
            } else {
                this.Result = Numbers.Add(left(), right());
            }

            break;

        case BinaryExpressionType.Times:
            this.Result = Numbers.Multiply(left(), right());
            break;

        case BinaryExpressionType.BitwiseAnd:
            this.Result = parseInt(left()) & parseInt(right());
            break;

        case BinaryExpressionType.BitwiseOr:
            this.Result = parseInt(left()) | parseInt(right());
            break;

        case BinaryExpressionType.BitwiseXOr:
            this.Result = parseInt(left()) ^ parseInt(right());
            break;

        case BinaryExpressionType.LeftShift:
            this.Result = parseInt(left()) << parseInt(right());
            break;

        case BinaryExpressionType.RightShift:
            this.Result = parseInt(left()) >> parseInt(right());
            break;

        case BinaryExpressionType.Exponentiation:
            this.Result = Math.pow(parseFloat(left()), parseFloat(right()));
            break;
        }
    }

    public VisitUnaryExpression(expression: UnaryExpression): void {
    // Recursively evaluates the underlying expression
        expression.Expression.Accept(this);

        switch (expression.Type) {
        case UnaryExpressionType.Not:
            this.Result = !(this.Result == true);
            break;

        case UnaryExpressionType.Negate:
            this.Result = Numbers.Subtract(0 as unknown as object, this.Result);
            break;

        case UnaryExpressionType.BitwiseNot:
            this.Result = ~parseInt(this.Result);
            break;

        case UnaryExpressionType.Positive:
        // No-op
            break;
        }
    }

    public VisitValueExpression(expression: ValueExpression): void {
        this.Result = expression.Value;
    }

    public VisitNCalcFunction(func: NCalcFunction): void {
        const args = new FunctionArgs();
        args.Parameters = [];

        // Don't call parameters right now, instead let the func do it as needed.
        // Some parameters shouldn't be called, for instance, in a if(), the "not" value might be a division by zero
        // Evaluating every value could produce unexpected behaviour
        for (let i = 0; i < func.Expressions.length; i++) {
            args.Parameters[i] = new Expression(func.Expressions[i], this._options);
            args.Parameters[i].EvaluateFunction = this.EvaluateFunction;
            args.Parameters[i].EvaluateParameter = this.EvaluateParameter;

            // Assign the parameters of the Expression to the arguments so that custom funcs and Parameters can use them
            args.Parameters[i].Parameters = this.Parameters;
        }

        // Calls external implementation
        this.OnEvaluateFunction(
            this.IgnoreCase ? func.Identifier.Name.toLowerCase() : func.Identifier.Name,
            args
        );

        // // If an external implementation was found get the result back
        if (args.HasResult) {
            this.Result = args.Result;
            return;
        }

        switch (func.Identifier.Name.toLowerCase()) {
        // Start Abs
        case 'abs':{
            this.CheckCase('Abs', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Abs() takes exactly 1 argument');

            this.Result = Math.abs(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Acos
        case 'acos':{
            this.CheckCase('Acos', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Acos() takes exactly 1 argument');

            this.Result = Math.acos(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Asin
        case 'asin':{
            this.CheckCase('Asin', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Asin() takes exactly 1 argument');

            this.Result = Math.asin(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Atan
        case 'atan':{
            this.CheckCase('Atan', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Atan() takes exactly 1 argument');

            this.Result = Math.atan(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Atan2
        case 'atan2':{
            this.CheckCase('Atan2', func.Identifier.Name);

            if (func.Expressions.length != 2)
                throw new ArgumentException('Atan2() takes exactly 2 argument');

            this.Result = Math.atan2(
                parseFloat(this.Evaluate(func.Expressions[0])),
                parseFloat(this.Evaluate(func.Expressions[1]))
            );

            break;
        }
        // end

        // Start Ceiling
        case 'ceiling':{
            this.CheckCase('Ceiling', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Ceiling() takes exactly 1 argument');

            this.Result = Math.ceil(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Cos

        case 'cos':{
            this.CheckCase('Cos', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Cos() takes exactly 1 argument');

            this.Result = Math.cos(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Exp
        case 'exp':{
            this.CheckCase('Exp', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Exp() takes exactly 1 argument');

            this.Result = Math.exp(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Floor
        case 'floor':{
            this.CheckCase('Floor', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Floor() takes exactly 1 argument');

            this.Result = Math.floor(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // // Start IEEERemainder
        // case "ieeeremainder":

        //     this.CheckCase("IEEERemainder", func.Identifier.Name);

        //     if (func.Expressions.length != 2)
        //         throw new ArgumentException("IEEERemainder() takes exactly 2 arguments");

        //     Result = Math.IEEERemainder(parseFloat(this.Evaluate(func.Expressions[0])), parseFloat(this.Evaluate(func.Expressions[1])));

        //     break;

        // // end

        // Start Ln
        case 'ln':{
            this.CheckCase('Ln', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Ln() takes exactly 1 argument');

            this.Result = Math.log(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Log
        case 'log':{
            this.CheckCase('Log', func.Identifier.Name);

            if (func.Expressions.length != 2)
                throw new ArgumentException('Log() takes exactly 2 arguments');

            this.Result =
          Math.log(parseFloat(this.Evaluate(func.Expressions[0]))) /
          Math.log(parseFloat(this.Evaluate(func.Expressions[1])));

            break;
        }
        // end

        // Start Log10
        case 'log10':{
            this.CheckCase('Log10', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Log10() takes exactly 1 argument');

            this.Result = Math.log10(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Pow
        case 'pow':{
            this.CheckCase('Pow', func.Identifier.Name);

            if (func.Expressions.length != 2)
                throw new ArgumentException('Pow() takes exactly 2 arguments');

            this.Result = Math.pow(
                parseFloat(this.Evaluate(func.Expressions[0])),
                parseFloat(this.Evaluate(func.Expressions[1]))
            );

            break;
        }
        // end

        // Start Round
        // @todo Implementation is incorrect!
        case 'round':{
            this.CheckCase('Round', func.Identifier.Name);

            if (func.Expressions.length != 2)
                throw new ArgumentException('Round() takes exactly 2 arguments');

            // const rounding = (this._options & EvaluateOptions.RoundAwayFromZero) == EvaluateOptions.RoundAwayFromZero ? MidpointRounding.AwayFromZero : MidpointRounding.ToEven;

            this.Result = Math.round(parseFloat(this.Evaluate(func.Expressions[0]))).toFixed(
                this.Evaluate(func.Expressions[1])
            );

            break;
        }
        // end

        // Start Sign
        case 'sign':{
            this.CheckCase('Sign', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Sign() takes exactly 1 argument');

            this.Result = Math.sign(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Sin
        case 'sin':{
            this.CheckCase('Sin', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Sin() takes exactly 1 argument');

            this.Result = Math.sin(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Sqrt
        case 'sqrt':{
            this.CheckCase('Sqrt', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Sqrt() takes exactly 1 argument');

            this.Result = Math.sqrt(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Tan
        case 'tan':{
            this.CheckCase('Tan', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Tan() takes exactly 1 argument');

            this.Result = Math.tan(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Truncate
        case 'truncate':{
            this.CheckCase('Truncate', func.Identifier.Name);

            if (func.Expressions.length != 1)
                throw new ArgumentException('Truncate() takes exactly 1 argument');

            this.Result = Math.trunc(parseFloat(this.Evaluate(func.Expressions[0])));

            break;
        }
        // end

        // Start Max
        case 'max':{
            this.CheckCase('Max', func.Identifier.Name);

            if (func.Expressions.length != 2)
                throw new ArgumentException('Max() takes exactly 2 arguments');

            const maxleft = this.Evaluate(func.Expressions[0]);
            const maxright = this.Evaluate(func.Expressions[1]);

            this.Result = Numbers.Max(maxleft, maxright);
            break;
        }
        // end

        // Start Min
        case 'min':{
            this.CheckCase('Min', func.Identifier.Name);

            if (func.Expressions.length != 2)
                throw new ArgumentException('Min() takes exactly 2 arguments');

            const minleft = this.Evaluate(func.Expressions[0]);
            const minright = this.Evaluate(func.Expressions[1]);

            this.Result = Numbers.Min(minleft, minright);
            break;
        }
        // end

        // Start if
        case 'if': {
            this.CheckCase('if', func.Identifier.Name);

            if (func.Expressions.length != 3)
                throw new ArgumentException('if() takes exactly 3 arguments');

            const val = this.Evaluate(func.Expressions[0]);
            const cond = val == true ? true : false;

            this.Result = cond
                ? this.Evaluate(func.Expressions[1])
                : this.Evaluate(func.Expressions[2]);
            break;
        }
        // end

        // Start in
        case 'in': {
            this.CheckCase('in', func.Identifier.Name);

            if (func.Expressions.length < 2)
                throw new ArgumentException('in() takes at least 2 arguments');

            const parameter = this.Evaluate(func.Expressions[0]);
            let evaluation = false;

            // Goes through any values, and stop whe one is found
            for (let i = 1; i < func.Expressions.length; i++) {
                const argument = this.Evaluate(func.Expressions[i]);
                if (this.CompareUsingMostPreciseType(parameter, argument) == 0) {
                    evaluation = true;
                    break;
                }
            }

            this.Result = evaluation;
            break;
        }
        // end

        default:
            throw new ArgumentException(`Function ${func.Identifier.Name} was not found.`);
        }
    }

    private CheckCase(func: string, called: string): void {
        if (this.IgnoreCase) {
            if (equalsIgnoringCase(func, called)) {
                return;
            }

            throw new ArgumentException(`Function '${called}' not found`);
        }

        if (func != called) {
            throw new Error(`Function not found ${called}. Try ${func} instead.`);
        }
    }

    public Parameters: {[key: string]: any} = {};

    public EvaluateFunction: {[key: string]: EvaluateFunctionHandler} = {};
    public EvaluateParameter: {[key: string]: EvaluateParameterHandler} = {};

    private OnEvaluateFunction(name: string, args: FunctionArgs): void {
        if (Object.prototype.hasOwnProperty.call(this.EvaluateFunction, name)) {
            // @todo
            this.EvaluateFunction[name](args);
        }
    }

    private OnEvaluateParameter(name: string, args: ParameterArgs): void {
        if (Object.prototype.hasOwnProperty.call(this.EvaluateParameter, name)) {
            this.EvaluateParameter[name](args);
        }
    }

    public VisitIdentifier(parameter: Identifier): void {
        if (Object.prototype.hasOwnProperty.call(this.Parameters, parameter.Name)) {
            // The parameter is defined in the hashtable
            if (this.Parameters[parameter.Name].constructor.name == 'Expression') {
                // The parameter is itself another Expression
                const expression = this.Parameters[parameter.Name];

                // Overloads parameters
                for (const p in this.Parameters) {
                    expression.Parameters[p] = this.Parameters[p];
                }

                expression.EvaluateFunction = this.EvaluateFunction;
                expression.EvaluateParameter = this.EvaluateParameter;

                this.Result = this.Parameters[parameter.Name].Evaluate();
            } else {
                this.Result = this.Parameters[parameter.Name];
            }
        } else {
            // The parameter should be defined in a call back method
            const args = new ParameterArgs();

            // Calls external implementation
            this.OnEvaluateParameter(parameter.Name, args);

            if (!args.HasResult)
                throw new ArgumentException(`Parameter '${parameter.Name}' was not defined `);

            this.Result = args.Result;
        }
    }
}