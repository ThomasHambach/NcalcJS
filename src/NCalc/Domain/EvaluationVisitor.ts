import { EvaluateOptions, Expression, Numbers, TypeCode, FunctionArgs, ParameterArgs } from "@/NCalc";
import { BinaryExpression, BinaryExpressionType } from "./BinaryExpression";
import { NCalcFunction } from "./Function";
import { LogicalExpressionVisitor } from "./LogicalExpressionVisitor";
import { Identifier } from "./Parameter";
import { TernaryExpression } from "./TernaryExpression";
import { UnaryExpression, UnaryExpressionType } from "./UnaryExpression";
import { ValueExpression } from "./ValueExpression";

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

        private Evaluate(expression: any): object
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
                case "BinaryExpression":
                    this.VisitBinaryExpression(expression);
                case "UnaryExpression":
                    this.VisitUnaryExpression(expression);
                case "ValueExpression":
                    this.VisitValueExpression(expression);
                case "NCalcFunction":
                    this.VisitNCalcFunction(expression);
                case "Identifier":
                    this.VisitIdentifier(expression);
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
            args.Parameters = new Expression[func.Expressions.length]

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
            OnEvaluatefunc(this.IgnoreCase ? func.Identifier.Name.toLowerCase() : func.Identifier.Name, args);

            // If an external implementation was found get the result back
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

                    // this.Result = Math.abs(parseFloat(this.Evaluate(func.Expressions[0])));

                    break;

                // end

                // Start Acos
                // case string n when n.Equals("acos", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Acos", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Acos() takes exactly 1 argument");

                //         this.Result = Math.Acos(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Asin
                // case string n when n.Equals("asin", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Asin", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Asin() takes exactly 1 argument");

                //         this.Result = Math.Asin(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Atan
                // case string n when n.Equals("atan", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Atan", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Atan() takes exactly 1 argument");

                //     Result = Math.Atan(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Atan2
                // case string n when n.Equals("atan2", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Atan2", func.Identifier.Name);

                //     if (func.Expressions.Length != 2)
                //         throw new ArgumentException("Atan2() takes exactly 2 argument");

                //     Result = Math.Atan2(Convert.ToDouble(Evaluate(func.Expressions[0])), Convert.ToDouble(Evaluate(func.Expressions[1])));

                //     break;

                // // end

                // // Start Ceiling
                // case string n when n.Equals("ceiling", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Ceiling", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Ceiling() takes exactly 1 argument");

                //     Result = Math.Ceiling(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Cos

                // case string n when n.Equals("cos", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Cos", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Cos() takes exactly 1 argument");

                //     Result = Math.Cos(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Exp
                // case string n when n.Equals("exp", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Exp", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Exp() takes exactly 1 argument");

                //     Result = Math.Exp(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Floor
                // case string n when n.Equals("floor", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Floor", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Floor() takes exactly 1 argument");

                //     Result = Math.Floor(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start IEEERemainder
                // case string n when n.Equals("ieeeremainder", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("IEEERemainder", func.Identifier.Name);

                //     if (func.Expressions.Length != 2)
                //         throw new ArgumentException("IEEERemainder() takes exactly 2 arguments");

                //     Result = Math.IEEERemainder(Convert.ToDouble(Evaluate(func.Expressions[0])), Convert.ToDouble(Evaluate(func.Expressions[1])));

                //     break;

                // // end

                // // Start Ln
                // case string n when n.Equals("ln", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Ln", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Ln() takes exactly 1 argument");

                //     Result = Math.Log(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Log
                // case string n when n.Equals("log", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Log", func.Identifier.Name);

                //     if (func.Expressions.Length != 2)
                //         throw new ArgumentException("Log() takes exactly 2 arguments");

                //     Result = Math.Log(Convert.ToDouble(Evaluate(func.Expressions[0])), Convert.ToDouble(Evaluate(func.Expressions[1])));

                //     break;

                // // end

                // // Start Log10
                // case string n when n.Equals("log10", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Log10", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Log10() takes exactly 1 argument");

                //     Result = Math.Log10(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Pow
                // case string n when n.Equals("pow", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Pow", func.Identifier.Name);

                //     if (func.Expressions.Length != 2)
                //         throw new ArgumentException("Pow() takes exactly 2 arguments");

                //     Result = Math.Pow(Convert.ToDouble(Evaluate(func.Expressions[0])), Convert.ToDouble(Evaluate(func.Expressions[1])));

                //     break;

                // // end

                // // Start Round
                // case string n when n.Equals("round", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Round", func.Identifier.Name);

                //     if (func.Expressions.Length != 2)
                //         throw new ArgumentException("Round() takes exactly 2 arguments");

                //     MidpointRounding rounding = (_options & EvaluateOptions.RoundAwayFromZero) == EvaluateOptions.RoundAwayFromZero ? MidpointRounding.AwayFromZero : MidpointRounding.ToEven;

                //     Result = Math.Round(Convert.ToDouble(Evaluate(func.Expressions[0])), Convert.ToInt16(Evaluate(func.Expressions[1])), rounding);

                //     break;

                // // end

                // // Start Sign
                // case string n when n.Equals("sign", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Sign", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Sign() takes exactly 1 argument");

                //     Result = Math.Sign(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Sin
                // case string n when n.Equals("sin", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Sin", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Sin() takes exactly 1 argument");

                //     Result = Math.Sin(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Sqrt
                // case string n when n.Equals("sqrt", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Sqrt", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Sqrt() takes exactly 1 argument");

                //     Result = Math.Sqrt(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Tan
                // case string n when n.Equals("tan", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Tan", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Tan() takes exactly 1 argument");

                //     Result = Math.Tan(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Truncate
                // case string n when n.Equals("truncate", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Truncate", func.Identifier.Name);

                //     if (func.Expressions.Length != 1)
                //         throw new ArgumentException("Truncate() takes exactly 1 argument");

                //     Result = Math.Truncate(Convert.ToDouble(Evaluate(func.Expressions[0])));

                //     break;

                // // end

                // // Start Max
                // case string n when n.Equals("max", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Max", func.Identifier.Name);

                //     if (func.Expressions.Length != 2)
                //         throw new ArgumentException("Max() takes exactly 2 arguments");

                //     object maxleft = Evaluate(func.Expressions[0]);
                //     object maxright = Evaluate(func.Expressions[1]);

                //     Result = Numbers.Max(maxleft, maxright);
                //     break;

                // // end

                // // Start Min
                // case string n when n.Equals("min", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("Min", func.Identifier.Name);

                //     if (func.Expressions.Length != 2)
                //         throw new ArgumentException("Min() takes exactly 2 arguments");

                //     object minleft = Evaluate(func.Expressions[0]);
                //     object minright = Evaluate(func.Expressions[1]);

                //     Result = Numbers.Min(minleft, minright);
                //     break;

                // // end

                // // Start if
                // case string n when n.Equals("if", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("if", func.Identifier.Name);

                //     if (func.Expressions.Length != 3)
                //         throw new ArgumentException("if() takes exactly 3 arguments");

                //     bool cond = Convert.ToBoolean(Evaluate(func.Expressions[0]));

                //     Result = cond ? Evaluate(func.Expressions[1]) : Evaluate(func.Expressions[2]);
                //     break;

                // // end

                // // Start in
                // case string n when n.Equals("in", StringComparison.OrdinalIgnoreCase):

                //     CheckCase("in", func.Identifier.Name);

                //     if (func.Expressions.Length < 2)
                //         throw new ArgumentException("in() takes at least 2 arguments");

                //     object parameter = Evaluate(func.Expressions[0]);

                //     bool evaluation = false;

                //     // Goes through any values, and stop whe one is found
                //     for (int i = 1; i < func.Expressions.Length; i++)
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

        public EvaluateFunction: any; // EvaluateFunctionHandler

        private OnEvaluateFunction(name: string, args: FunctionArgs): void
        {
            if (this.EvaluateFunction != null)
                this.EvaluateFunction(name, args);
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

        // @todo
        public EvaluateParameter: any;

        private OnEvaluateParameter(name: string, args: ParameterArgs): void
        {
            if (this.EvaluateParameter != null)
                this.EvaluateParameter(name, args);
        }

        
    }

const OnEvaluatefunc = (arg0: any, args: { Parameters: any; }) => {
    throw new Error("func not implemented.");
}

const equalsIgnoringCase = (text, other) => {
    return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
}

export class ArgumentException extends Error {};