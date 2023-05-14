import { Identifier, LogicalExpression, LogicalExpressionVisitor } from '@/NCalc/Domain';

export class NCalcFunction extends LogicalExpression {
    public constructor(identifier: Identifier, expressions: LogicalExpression[]) {
        super();
        this.Identifier = identifier;
        this.Expressions = expressions;
    }

    public Identifier: Identifier;

    public Expressions: LogicalExpression[];

    public ClassName = 'NCalcFunction';

    public Accept(visitor: LogicalExpressionVisitor) {
        visitor.Visit(this);
    }
}