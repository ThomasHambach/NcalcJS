import { LogicalExpression, LogicalExpressionVisitor } from '@/NCalc/Domain';

export class UnaryExpression extends LogicalExpression {
    public constructor(type: UnaryExpressionType, expression: LogicalExpression) {
        super();
        this.Type = type;
        this.Expression = expression;
    }

    public Expression: LogicalExpression;

    public Type: UnaryExpressionType;

    public ClassName = 'UnaryExpression';

    public Accept(visitor: LogicalExpressionVisitor) {
        visitor.Visit(this);
    }
}

export enum UnaryExpressionType {
    Not,
    Negate,
    BitwiseNot,
    Positive
  }