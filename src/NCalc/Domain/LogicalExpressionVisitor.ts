import { LogicalExpression } from ".";
import { BinaryExpression } from ".";
import { NCalcFunction } from ".";
import { Identifier } from ".";
import { TernaryExpression } from ".";
import { UnaryExpression } from ".";
import { ValueExpression } from ".";

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