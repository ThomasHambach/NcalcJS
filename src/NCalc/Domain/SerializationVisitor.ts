import { BinaryExpression, BinaryExpressionType } from "./BinaryExpression";
import { NCalcFunction } from "./Function";
import { LogicalExpression } from "./LogicalExpression";
import { LogicalExpressionVisitor } from "./LogicalExpressionVisitor";
import { Identifier } from "./Parameter";
import { TernaryExpression } from "./TernaryExpression";
import { UnaryExpression, UnaryExpressionType } from "./UnaryExpression";
import { ValueExpression, ValueType } from "./ValueExpression";


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
