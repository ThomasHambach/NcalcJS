import { LogicalExpression, LogicalExpressionVisitor } from '@/NCalc/Domain';

export class Identifier extends LogicalExpression {
    public constructor(name: string) {
        super();
        this.Name = name;
    }

    public Name = '';

    public Accept(visitor: LogicalExpressionVisitor) {
        visitor.Visit(this);
    }
}