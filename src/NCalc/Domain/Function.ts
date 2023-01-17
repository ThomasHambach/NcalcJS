import { LogicalExpression } from "./LogicalExpression";
import { LogicalExpressionVisitor } from "./LogicalExpressionVisitor";
import { Identifier } from "./Parameter";


    export class NCalcFunction extends LogicalExpression
    {
        public constructor(identifier: Identifier, expressions: LogicalExpression[] )
        {
            super();
            this.Identifier = identifier;
            this.Expressions = expressions;
        }
        
        public Identifier: Identifier;

        public Expressions: LogicalExpression[];

        public Accept(visitor: LogicalExpressionVisitor)
        {
            visitor.Visit(this);
        }
    }