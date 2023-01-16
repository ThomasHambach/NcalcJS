import { LogicalExpression } from "../LogicalExpression";
import { LogicalExpressionVisitor } from "./LogicalExpressionVisitor";


    export class Identifier extends LogicalExpression
    {
        public Identifier(name: string)
        {
            this.Name = name;
        }

        public Name: string = "";


        public Accept(visitor: LogicalExpressionVisitor)
        {
            visitor.Visit(this);
        }
    }
