import { BinaryExpression } from "./BinaryExpression";
import { NCalcFunction } from "./Function";
import { LogicalExpression } from "./LogicalExpression";
import { Identifier } from "./Parameter";
import { TernaryExpression } from "./TernaryExpression";
import { UnaryExpression } from "./UnaryExpression";
import { ValueExpression } from "./ValueExpression";

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