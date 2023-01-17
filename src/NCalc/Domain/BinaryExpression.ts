import { LogicalExpression } from "./LogicalExpression";
import { LogicalExpressionVisitor } from "./LogicalExpressionVisitor";

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
