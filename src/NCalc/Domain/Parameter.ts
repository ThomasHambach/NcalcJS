import { LogicalExpression } from "@/NCalc/Domain";
import { LogicalExpressionVisitor } from "@/NCalc/Domain";


    export class Identifier extends LogicalExpression
    {
        public constructor(name: string)
        {
            super();
            this.Name = name;
        }

        public Name: string = "";


        public Accept(visitor: LogicalExpressionVisitor)
        {
            visitor.Visit(this);
        }
    }
