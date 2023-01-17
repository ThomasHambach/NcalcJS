import { EvaluateOptions } from "../EvaluationOptions";
import { Expression } from "../Expression";
import { FunctionArgs } from "../FunctionArgs";
import { TypeCode, Numbers } from "../Numbers";
import { ParameterArgs } from "../ParameterArgs";
import { EvaluateFunctionHandler, EvaluateParameterHandler } from "../types";

export abstract class LogicalExpressionVisitor
{
    public abstract Visit(expression: LogicalExpression): void;
    public abstract Visit(expression: TernaryExpression): void;
    public abstract Visit(expression: BinaryExpression): void;
    public abstract Visit(expression: UnaryExpression): void;
    public abstract Visit(expression: ValueExpression): void;
    public abstract Visit(func: NCalcFunction): void;
    public abstract Visit(func: Identifier): void;
    public abstract Visit(expression: any): void;
}

export class LogicalExpression
{
    
    public constructor() {}
    
    public And(operand: object): BinaryExpression;
    public And(operand: LogicalExpression): BinaryExpression;
    public And(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.And, this, new ValueExpression(operand));
        } else {
            return new BinaryExpression(BinaryExpressionType.And, this, operand);
        }
    }

    public DividedBy(operand: object): BinaryExpression;
    public DividedBy(operand: LogicalExpression): BinaryExpression;
    public DividedBy(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.Div, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Div, this, new ValueExpression(operand));
        }
        
    }

    public EqualsTo(operand: object): BinaryExpression;
    public EqualsTo(operand: LogicalExpression): BinaryExpression;
    public EqualsTo(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.Equal, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Equal, this, new ValueExpression(operand));
        }
        
    }

    public GreaterThan(operand: object): BinaryExpression;
    public GreaterThan(operand: LogicalExpression): BinaryExpression;
    public GreaterThan(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.Greater, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Greater, this, new ValueExpression(operand));
        }
    }

    public GreaterOrEqualThan(operand: object): BinaryExpression;
    public GreaterOrEqualThan(operand: LogicalExpression): BinaryExpression;
    public GreaterOrEqualThan(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.GreaterOrEqual, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.GreaterOrEqual, this, new ValueExpression(operand));
        }
    }

    public LesserThan(operand: object): BinaryExpression;
    public LesserThan(operand: LogicalExpression): BinaryExpression;
    public LesserThan(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Lesser, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Lesser, this, new ValueExpression(operand));
        }
    }

    public LesserOrEqualThan(operand: object): BinaryExpression;
    public LesserOrEqualThan(operand: LogicalExpression): BinaryExpression;
    public LesserOrEqualThan(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.LesserOrEqual, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.LesserOrEqual, this, new ValueExpression(operand));
        }
    }

    public Minus(operand: object): BinaryExpression;
    public Minus(operand: LogicalExpression): BinaryExpression;
    public Minus(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Minus, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Minus, this, new ValueExpression(operand));
        }
    }

    public Modulo(operand: object): BinaryExpression;
    public Modulo(operand: LogicalExpression): BinaryExpression;
    public Modulo(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Modulo, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Modulo, this, new ValueExpression(operand));
        }
    }

    public NotEqual(operand: object): BinaryExpression;
    public NotEqual(operand: LogicalExpression): BinaryExpression;
    public NotEqual(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.NotEqual, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.NotEqual, this, new ValueExpression(operand));
        }
    }

    public Or(operand: object): BinaryExpression;
    public Or(operand: LogicalExpression): BinaryExpression;
    public Or(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Or, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Or, this, new ValueExpression(operand));
        }
    }

    public Plus(operand: object): BinaryExpression;
    public Plus(operand: LogicalExpression): BinaryExpression;
    public Plus(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Plus, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Plus, this, new ValueExpression(operand));
        }
    }

    public Mult(operand: object): BinaryExpression;
    public Mult(operand: LogicalExpression): BinaryExpression;
    public Mult(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Plus, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Plus, this, new ValueExpression(operand));
        }
    }

    public BitwiseOr(operand: object): BinaryExpression;
    public BitwiseOr(operand: LogicalExpression): BinaryExpression;
    public BitwiseOr(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.BitwiseOr, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.BitwiseOr, this, new ValueExpression(operand));
        }
    }

    public BitwiseAnd(operand: object): BinaryExpression;
    public BitwiseAnd(operand: LogicalExpression): BinaryExpression;
    public BitwiseAnd(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.BitwiseAnd, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.BitwiseAnd, this, new ValueExpression(operand));
        }
    }

    public BitwiseXOr(operand: object): BinaryExpression;
    public BitwiseXOr(operand: LogicalExpression): BinaryExpression;
    public BitwiseXOr(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.BitwiseXOr, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.BitwiseXOr, this, new ValueExpression(operand));
        }
    }

    public LeftShift(operand: object): BinaryExpression;
    public LeftShift(operand: LogicalExpression): BinaryExpression;
    public LeftShift(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.LeftShift, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.LeftShift, this, new ValueExpression(operand));
        }
    }

    public RightShift(operand: object): BinaryExpression;
    public RightShift(operand: LogicalExpression): BinaryExpression;
    public RightShift(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.RightShift, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.RightShift, this, new ValueExpression(operand));
        }
    }

    public ToString(): string
    {
        const serializer = new SerializationVisitor();
        this.Accept(serializer);

        return serializer.Result.join("").trim();
    }

    public Accept(visitor: LogicalExpressionVisitor): void
    {
        visitor.Visit(this);
    }
}

export class NCalcFunction extends LogicalExpression
{
    public constructor(identifier: Identifier, expressions: LogicalExpression[] )
    {
        super();
        this.Identifier = identifier;
        this.Expressions = expressions;
    }
    
    public Identifier: Identifier;

    public Expressions: LogicalExpression[];

    public Accept(visitor: LogicalExpressionVisitor)
    {
        visitor.Visit(this);
    }
}

export class BinaryExpression extends LogicalExpression
{
    constructor(type: BinaryExpressionType, leftExpression: LogicalExpression, rightExpression: LogicalExpression)
    {
        super();
        this.Type = type;
        this.LeftExpression = leftExpression;
        this.RightExpression = rightExpression;
    }

    public LeftExpression: LogicalExpression;

    public RightExpression: LogicalExpression;

    public Type: BinaryExpressionType;

    public Accept(visitor: LogicalExpressionVisitor)
    {
        visitor.Visit(this);
    }
}

export enum BinaryExpressionType
{
    And,
    Or,
    NotEqual,
    LesserOrEqual,
    GreaterOrEqual,
    Lesser,
    Greater,
    Equal,
    Minus,
    Plus,
    Modulo,
    Div,
    Times,
    BitwiseOr,
    BitwiseAnd,
    BitwiseXOr,
    LeftShift,
    RightShift,
    Unknown,
    Exponentiation
}

export class EvaluationVisitor extends LogicalExpressionVisitor
    {
        // private delegate T Func<T>();

        private readonly  _options: EvaluateOptions = EvaluateOptions.None;
        // private readonly CultureInfo _cultureInfo;

        private get IgnoreCase() {
            return (this._options & EvaluateOptions.IgnoreCase)
        }

        public constructor(options: EvaluateOptions)
        {
            super();
            this._options = options;
        }

        public Result: any;

        private Evaluate(expression: any): any
        {
            expression.Accept(this);
            return this.Result;
        }

        public Visit(expression: any): void
        {

            switch(expression.constructor.name)
            {
                case "LogicalExpression":
                    throw new Error();
                    break;
                case "TernaryExpression":
                    this.VisitTernary(expression);
                    break;
                case "BinaryExpression":
                    this.VisitBinaryExpression(expression);
                    break;
                case "UnaryExpression":
                    this.VisitUnaryExpression(expression);
                    break;
                case "ValueExpression":
                    this.VisitValueExpression(expression);
                    break;
                case "NCalcFunction":
                    this.VisitNCalcFunction(expression);
                    break;
                case "Identifier":
                    this.VisitIdentifier(expression);
                    break;
                default:
                    throw new Error("Invalud expression type")
            }
        }

        public VisitTernary(expression: TernaryExpression)
        {
            // Evaluates the left expression and saves the value
            expression.LeftExpression.Accept(this);
            let left = this.Result as any == true;

            if (left)
            {
                expression.MiddleExpression.Accept(this);
            }
            else
            {
                expression.RightExpression.Accept(this);
            }
        }
        
        private static CommonTypes: string[] = ["number", "boolean", "string", "bigint"];

        /// <summary>
        /// Gets the the most precise type.
        /// </summary>
        /// <param name="a">Type a.</param>
        /// <param name="b">Type b.</param>
        /// <returns></returns>
        private static GetMostPreciseType(a:string, b:string): string
        {
            for(let t in this.CommonTypes)
            {
                if (a == t || b == t)
                {
                    return t;
                }
            }

            return a;
        }

        public CompareUsingMostPreciseType(a: object, b: object): number
        {
            let mpt = "";
            if (a == null)
            {
                if (b == null)
                    return 0;
                mpt = EvaluationVisitor.GetMostPreciseType(null, typeof b);
            }
            else
            {
                mpt = EvaluationVisitor.GetMostPreciseType(typeof a, typeof b);
            }

            return 0; // @todo Implement it properly
            // return Comparer.Default.Compare(Convert.ChangeType(a, mpt), Convert.ChangeType(b, mpt));
        }

        private static IsReal(value: object): boolean
        {
            var typeCode = typeof value;

            return typeCode == TypeCode.Decimal;
        }

        public VisitBinaryExpression(expression: BinaryExpression): void
        {
            // simulate Lazy<Func<>> behavior for late evaluation
            let leftValue = null;
            const left = (): any =>
            {
                if (leftValue == null)
                {
                    expression.LeftExpression.Accept(this);
                    leftValue = this.Result;
                }
                return leftValue;
            };

            // simulate Lazy<Func<>> behavior for late evaluations
            let rightValue = null;
            const right = (): any =>
            {
                if (rightValue == null)
                {
                    expression.RightExpression.Accept(this);
                    rightValue = this.Result;
                }
                return rightValue;
            };
            
            // @todo re-evaluate this implementation
            switch (expression.Type)
            {
                case BinaryExpressionType.And:
                    this.Result = left() == true && right() == true;
                    break;

                case BinaryExpressionType.Or:
                    this.Result = left() == true || right() == true;
                    break;

                case BinaryExpressionType.Div:
                    this.Result = EvaluationVisitor.IsReal(left()) || EvaluationVisitor.IsReal(right())
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
                    if (typeof left() == "string")
                    {
                        this.Result = left().concat(right());
                    }
                    else
                    {
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

        public VisitUnaryExpression(expression: UnaryExpression): void
        {
            // Recursively evaluates the underlying expression
            expression.Expression.Accept(this);

            switch (expression.Type)
            {
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

        public VisitValueExpression(expression: ValueExpression): void
        {
            this.Result = expression.Value;
        }

        public VisitNCalcFunction(func: NCalcFunction): void
        {
            let args = new FunctionArgs();
            args.Parameters = [];

            // Don't call parameters right now, instead let the func do it as needed.
            // Some parameters shouldn't be called, for instance, in a if(), the "not" value might be a division by zero
            // Evaluating every value could produce unexpected behaviour
            for (let i = 0; i < func.Expressions.length; i++)
            {
                args.Parameters[i] = new Expression(func.Expressions[i].ToString(), this._options);
                // @todo custom funcs
                //args.Parameters[i].Evaluatefunc += Evaluatefunc;
                // args.Parameters[i].EvaluateParameter += EvaluateParameter;

                // Assign the parameters of the Expression to the arguments so that custom funcs and Parameters can use them
                // args.Parameters[i].Parameters = Parameters;
            }

            // Calls external implementation
            this.OnEvaluateFunction(this.IgnoreCase ? func.Identifier.Name.toLowerCase() : func.Identifier.Name, args);

            // // If an external implementation was found get the result back
            if (args.HasResult)
            {
                this.Result = args.Result;
                return;
            }

            switch (func.Identifier.Name.toLowerCase())
            {
                // Start Abs
                case "abs":
                    this.CheckCase("Abs", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Abs() takes exactly 1 argument");

                    this.Result = Math.abs(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Acos
                case "acos":

                    this.CheckCase("Acos", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Acos() takes exactly 1 argument");

                    this.Result = Math.acos(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Asin
                case "asin":

                    this.CheckCase("Asin", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Asin() takes exactly 1 argument");

                    this.Result = Math.asin(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Atan
                case "atan":

                    this.CheckCase("Atan", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Atan() takes exactly 1 argument");

                    this.Result = Math.atan(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Atan2
                case "atan2":

                    this.CheckCase("Atan2", func.Identifier.Name);

                    if (func.Expressions.length != 2)
                        throw new ArgumentException("Atan2() takes exactly 2 argument");

                    this.Result = Math.atan2(parseFloat(this.Evaluate(func.Expressions[0])), parseFloat(this.Evaluate(func.Expressions[1])));

                    break;

                // end

                // Start Ceiling
                case "ceiling":

                    this.CheckCase("Ceiling", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Ceiling() takes exactly 1 argument");

                    this.Result = Math.ceil(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Cos

                case "cos":

                    this.CheckCase("Cos", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Cos() takes exactly 1 argument");

                    this.Result = Math.cos(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Exp
                case "exp":

                    this.CheckCase("Exp", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Exp() takes exactly 1 argument");

                    this.Result = Math.exp(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Floor
                case "floor":

                    this.CheckCase("Floor", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Floor() takes exactly 1 argument");

                    this.Result = Math.floor(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

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
                case "ln":

                    this.CheckCase("Ln", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Ln() takes exactly 1 argument");

                    this.Result = Math.log(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Log
                case "log":

                    this.CheckCase("Log", func.Identifier.Name);

                    if (func.Expressions.length != 2)
                        throw new ArgumentException("Log() takes exactly 2 arguments");

                    this.Result = Math.log(parseFloat(this.Evaluate(func.Expressions[0]))) / Math.log(parseFloat(this.Evaluate(func.Expressions[1])));

                    break;

                // end

                // Start Log10
                case "log10":

                    this.CheckCase("Log10", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Log10() takes exactly 1 argument");

                    this.Result = Math.log10(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Pow
                case "pow":

                    this.CheckCase("Pow", func.Identifier.Name);

                    if (func.Expressions.length != 2)
                        throw new ArgumentException("Pow() takes exactly 2 arguments");

                    this.Result = Math.pow(parseFloat(this.Evaluate(func.Expressions[0])), parseFloat(this.Evaluate(func.Expressions[1])));

                    break;

                // end

                // // Start Round
                // case "round":

                //     this.CheckCase("Round", func.Identifier.Name);

                //     if (func.Expressions.length != 2)
                //         throw new ArgumentException("Round() takes exactly 2 arguments");

                //     const rounding = (this._options & EvaluateOptions.RoundAwayFromZero) == EvaluateOptions.RoundAwayFromZero ? MidpointRounding.AwayFromZero : MidpointRounding.ToEven;

                //     Result = Math.round(parseFloat(this.Evaluate(func.Expressions[0])), Convert.ToInt16(Evaluate(func.Expressions[1])), rounding);

                //     break;

                // // end

                // Start Sign
                case "sign":

                    this.CheckCase("Sign", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Sign() takes exactly 1 argument");

                    this.Result = Math.sign(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Sin
                case "sin":

                    this.CheckCase("Sin", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Sin() takes exactly 1 argument");

                    this.Result = Math.sin(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Sqrt
                case "sqrt":

                    this.CheckCase("Sqrt", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Sqrt() takes exactly 1 argument");

                    this.Result = Math.sqrt(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Tan
                case "tan":

                    this.CheckCase("Tan", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Tan() takes exactly 1 argument");

                    this.Result = Math.tan(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Truncate
                case "truncate":

                    this.CheckCase("Truncate", func.Identifier.Name);

                    if (func.Expressions.length != 1)
                        throw new ArgumentException("Truncate() takes exactly 1 argument");

                    this.Result = Math.trunc(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // // Start Max
                // case "max":

                //     this.CheckCase("Max", func.Identifier.Name);

                //     if (func.Expressions.length != 2)
                //         throw new ArgumentException("Max() takes exactly 2 arguments");

                //     object maxleft = Evaluate(func.Expressions[0]);
                //     object maxright = Evaluate(func.Expressions[1]);

                //     Result = Numbers.Max(maxleft, maxright);
                //     break;

                // // end

                // // Start Min
                // case "min":

                //     this.CheckCase("Min", func.Identifier.Name);

                //     if (func.Expressions.length != 2)
                //         throw new ArgumentException("Min() takes exactly 2 arguments");

                //     object minleft = Evaluate(func.Expressions[0]);
                //     object minright = Evaluate(func.Expressions[1]);

                //     Result = Numbers.Min(minleft, minright);
                //     break;

                // // end

                // // Start if
                // case "if":

                //     this.CheckCase("if", func.Identifier.Name);

                //     if (func.Expressions.length != 3)
                //         throw new ArgumentException("if() takes exactly 3 arguments");

                //     bool cond = Convert.ToBoolean(Evaluate(func.Expressions[0]));

                //     Result = cond ? Evaluate(func.Expressions[1]) : Evaluate(func.Expressions[2]);
                //     break;

                // // end

                // // Start in
                // case "in":

                //     this.CheckCase("in", func.Identifier.Name);

                //     if (func.Expressions.length < 2)
                //         throw new ArgumentException("in() takes at least 2 arguments");

                //     object parameter = Evaluate(func.Expressions[0]);

                //     bool evaluation = false;

                //     // Goes through any values, and stop whe one is found
                //     for (int i = 1; i < func.Expressions.length; i++)
                //     {
                //         object argument = Evaluate(func.Expressions[i]);
                //         if (CompareUsingMostPreciseType(parameter, argument) == 0)
                //         {
                //             evaluation = true;
                //             break;
                //         }
                //     }

                //     Result = evaluation;
                //     break;

                // // end

                // default:
                //     throw new ArgumentException("func not found",
                //         func.Identifier.Name);
            }
        }

        private CheckCase(func: string, called: string): void
        {
            if (this.IgnoreCase)
            {
                if (equalsIgnoringCase(func, called))
                {
                    return;
                }

                throw new ArgumentException(`Function '${called}' not found`);
            }

            if (func != called)
            {
                throw new Error(`Function not found ${called}. Try ${func} instead.`);
            }
        }

        public Parameters: {[key: string]: any} = {};

        public EvaluateFunction: {[key: string]: EvaluateFunctionHandler} = {};
        public EvaluateParameter: {[key: string]: EvaluateParameterHandler} = {};

        private OnEvaluateFunction(name: string, args: FunctionArgs): void
        {
            if(this.EvaluateFunction.hasOwnProperty(name))
            {
                // @todo
                this.EvaluateFunction[name](args);
            }      
        }

        private OnEvaluateParameter(name: string, args: ParameterArgs): void
        {
            if(this.EvaluateParameter.hasOwnProperty(name))
            {
                //this.EvaluateParameter[name](args);
            }      
        }

        public VisitIdentifier(parameter: Identifier): void
        {
            if (this.Parameters.ContainsKey(parameter.Name))
            {
                // The parameter is defined in the hashtable
                if (this.Parameters[parameter.Name].constructor.name == "Expression")
                {
                    // The parameter is itself another Expression
                    let expression = this.Parameters[parameter.Name];

                    // Overloads parameters 
                    // @todo HMMMM
                    expression.Parameters = this.Parameters;
                    // for(let p in this.Parameters)
                    // {
                    //     expression.Parameters[p.Key] = p.Value;
                    // }

                    // expression.Evaluatefunc += Evaluatefunc;
                    // expression.EvaluateParameter += EvaluateParameter;

                    this.Result = (this.Parameters[parameter.Name]).Evaluate();
                } else {
                    this.Result = this.Parameters[parameter.Name];
                }
                   
            }
            else
            {
                // The parameter should be defined in a call back method
                var args = new ParameterArgs();

                // Calls external implementation
                this.OnEvaluateParameter(parameter.Name, args);

                if (!args.HasResult)
                    throw new ArgumentException(`Parameter was not defined ${parameter.Name}`);

                this.Result = args.Result;
            }
        }
        
    }


const equalsIgnoringCase = (text, other) => {
    return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
}

export class ArgumentException extends Error {};
export class Identifier extends LogicalExpression
{
    public constructor(name: string)
    {
        super();
        this.Name = name;
    }

    public Name: string = "";


    public Accept(visitor: LogicalExpressionVisitor)
    {
        visitor.Visit(this);
    }
}

export class SerializationVisitor extends LogicalExpressionVisitor
{
    // @todo Find out how to convert this to JS
    private readonly _numberFormatInfo: any;

    protected EncapsulateNoValue(expression: LogicalExpression)
    {
        if (expression.constructor.name == "ValueExpression")
        {
            expression.Accept(this);
        }
        else
        {
            this.Result.push("(");
            expression.Accept(this);
            
            // trim spaces before adding a closing paren
            while(this.Result[this.Result.length - 1] == ' ')
                this.Result.splice(this.Result.length - 1, 1);
            
            this.Result.push(") ");
        }
    }

    public constructor()
    {
        super();
        this.Result = [];
        this._numberFormatInfo = {};
    }

    public Result: string[] = [];

    public Visit(expression: LogicalExpression): void;
    public Visit(expression: TernaryExpression): void;
    public Visit(expression: BinaryExpression): void;
    public Visit(expression: UnaryExpression): void;
    public Visit(expression: ValueExpression): void;
    public Visit(func: NCalcFunction): void;
    public Visit(parameter: Identifier): void;
    public Visit(arg: any)
    {
        const requestType = arg.constructor.name;
        switch (requestType)
        {
            case "LogicalExpression":
                this.VisitLogical(arg);
                break;
            case "TernaryExpression":
                this.VisitTernary(arg);
                break;
            case "BinaryExpression":
                this.VisitBinary(arg);
                break;
            case "UnaryExpression":
                this.VisitUnary(arg);
                break;
            case "ValueExpression":
                this.VisitValue(arg);
                break;
            case "NcalcFunction":
                this.VisitFunction(arg);
                break;
            case "Identifier":
                this.VisitIdentifier(arg);
                break;
            default:
                throw new Error(`Unknown visit type given, received '${requestType}'`);
        }
    }

    protected VisitLogical(expression: LogicalExpression): void
    {
        throw new Error("The method or operation is not implemented.");
    }

    public VisitTernary(expression: TernaryExpression): void
    {
        this.EncapsulateNoValue(expression.LeftExpression);

        this.Result.push("? ");

        this.EncapsulateNoValue(expression.MiddleExpression);

        this.Result.push(": ");

        this.EncapsulateNoValue(expression.RightExpression);
    }

    public VisitBinary(expression: BinaryExpression)
    {
        this.EncapsulateNoValue(expression.LeftExpression);

        switch (expression.Type)
        {
            case BinaryExpressionType.And:
                this.Result.push("and ");
                break;

            case BinaryExpressionType.Or:
                this.Result.push("or ");
                break;

            case BinaryExpressionType.Div:
                this.Result.push("/ ");
                break;

            case BinaryExpressionType.Equal:
                this.Result.push("= ");
                break;

            case BinaryExpressionType.Greater:
                this.Result.push("> ");
                break;

            case BinaryExpressionType.GreaterOrEqual:
                this.Result.push(">= ");
                break;

            case BinaryExpressionType.Lesser:
                this.Result.push("< ");
                break;

            case BinaryExpressionType.LesserOrEqual:
                this.Result.push("<= ");
                break;

            case BinaryExpressionType.Minus:
                this.Result.push("- ");
                break;

            case BinaryExpressionType.Modulo:
                this.Result.push("% ");
                break;

            case BinaryExpressionType.NotEqual:
                this.Result.push("!= ");
                break;

            case BinaryExpressionType.Plus:
                this.Result.push("+ ");
                break;

            case BinaryExpressionType.Times:
                this.Result.push("* ");
                break;

            case BinaryExpressionType.BitwiseAnd:
                this.Result.push("& ");
                break;

            case BinaryExpressionType.BitwiseOr:
                this.Result.push("| ");
                break;

            case BinaryExpressionType.BitwiseXOr:
                this.Result.push("~ ");
                break;

            case BinaryExpressionType.LeftShift:
                this.Result.push("<< ");
                break;

            case BinaryExpressionType.RightShift:
                this.Result.push(">> ");
                break;
        }

        this.EncapsulateNoValue(expression.RightExpression);
    }

    public VisitUnary(expression: UnaryExpression)
    {
        switch (expression.Type)
        {
            case UnaryExpressionType.Not:
                this.Result.push("!");
                break;

            case UnaryExpressionType.Negate:
                this.Result.push("-");
                break;

            case UnaryExpressionType.BitwiseNot:
                this.Result.push("~");
                break;
        }

        this.EncapsulateNoValue(expression.Expression);
    }

    public VisitValue(expression: ValueExpression): void
    {
        switch (expression.Type)
        {
            case ValueType.Boolean:
                // @todo ??
                this.Result.push(expression.Value as unknown as string)
                this.Result.push(" ");
                break;

            case ValueType.DateTime:
                this.Result.push("#")
                this.Result.push(expression.Value.toString())
                this.Result.push("#")
                this.Result.push(" ");
                break;

            case ValueType.Float:
                this.Result.push(parseFloat(expression.Value.toString()).toFixed(2));
                this.Result.push(" ");
                break;

            case ValueType.Integer:
                this.Result.push(expression.Value.toString())
                this.Result.push(" ");
                break;

            case ValueType.String:
                this.Result.push("'")
                this.Result.push(expression.Value.toString())
                this.Result.push("'")
                this.Result.push(" ");
                break;
        }
    }

    public VisitFunction(func: NCalcFunction)
    {
        this.Result.push(func.Identifier.Name);

        this.Result.push("(");

        for(let i=0; i<func.Expressions.length; i++)
        {
            func.Expressions[i].Accept(this);
            if (i < func.Expressions.length-1)
            {
                this.Result.splice(this.Result.length - 1, 1);
                this.Result.push(", ");
            }
        }

        // trim spaces before adding a closing paren
        while (this.Result[this.Result.length - 1] == ' ')
            this.Result.splice(this.Result.length - 1, 1);

        this.Result.push(") ");
    }

    public VisitIdentifier(parameter: Identifier)
    {
        this.Result.push("[")
        this.Result.push(parameter.Name)
        this.Result.push("] ");
    }


}

export class TernaryExpression extends LogicalExpression
{
    public constructor(leftExpression: LogicalExpression, middleExpression: LogicalExpression, rightExpression: LogicalExpression)
    {
        super();
        this.LeftExpression = leftExpression;
        this.MiddleExpression = middleExpression;
        this.RightExpression = rightExpression;
    }

    public LeftExpression: LogicalExpression;

    public MiddleExpression: LogicalExpression;

    public RightExpression: LogicalExpression;

    public Accept(visitor: LogicalExpressionVisitor)
    {
        visitor.Visit(this);
    }
}

export class UnaryExpression extends LogicalExpression
{
    public constructor(type: UnaryExpressionType, expression: LogicalExpression)
    {
        super();
        this.Type = type;
        this.Expression = expression;
    }

    public Expression: LogicalExpression;

    public Type: UnaryExpressionType;

    public Accept(visitor: LogicalExpressionVisitor)
    {
        visitor.Visit(this);
    }
}

export enum UnaryExpressionType
{
    Not,
    Negate,
    BitwiseNot,
    Positive
}

export class EvaluationException extends Error { }

    export class ValueExpression extends LogicalExpression
    {

        public constructor();
        public constructor(value: string);
        public constructor(value: number);
        public constructor(value: boolean);
        public constructor(value: string, valueType: ValueType);
        public constructor(value: number, valueType: ValueType);
        public constructor(value: boolean, valueType: ValueType);
        public constructor(value?: any, valueType?: ValueType)
        {
            super();
            if (value !== null && value != undefined)
            {
                this.Value = value;
                if (valueType === null || valueType === undefined)
                {
                    const detectedType = typeof value;
                    switch (detectedType)
                    {
                        case "number":
                        case "bigint":
                            this.Type = ValueType.Integer;
                            break;
                        case "string":
                            // Attempt to check if it is a date
                            if (new Date(value) as unknown as string !== "Invalid Date" && !isNaN(new Date(value) as unknown as number)) {
                                this.Type = ValueType.DateTime;
                            } else {
                                this.Type = ValueType.String;
                            }
                            break;
                        case "boolean":
                            this.Type = ValueType.Boolean;
                            break;
                        default:
                            throw new EvaluationException("This value could not be handled: " + value);
                    }
                }
            }

            if (valueType)
            {
                this.Type = valueType;
            }
        }

        public Value: any = "";
        public Type: ValueType = ValueType.Boolean;

        public Accept(visitor: LogicalExpressionVisitor)
        {
            visitor.Visit(this);
        }
    }

    export enum ValueType
    {
        None = 0,
        Integer = 1,
        String = 2,
        DateTime = 3,
        Float = 4,
        Boolean = 5
    }
