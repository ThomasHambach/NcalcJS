import { LogicalExpression } from ".";
import { LogicalExpressionVisitor } from ".";

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