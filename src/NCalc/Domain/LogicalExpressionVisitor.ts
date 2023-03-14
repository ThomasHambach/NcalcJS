import { BinaryExpression, Identifier, LogicalExpression, NCalcFunction, TernaryExpression, UnaryExpression, ValueExpression } from '.';

export abstract class LogicalExpressionVisitor {
    public abstract Visit(expression: LogicalExpression): void;
    public abstract Visit(expression: TernaryExpression): void;
    public abstract Visit(expression: BinaryExpression): void;
    public abstract Visit(expression: UnaryExpression): void;
    public abstract Visit(expression: ValueExpression): void;
    public abstract Visit(func: NCalcFunction): void;
    public abstract Visit(func: Identifier): void;
    public abstract Visit(expression: any): void;
}