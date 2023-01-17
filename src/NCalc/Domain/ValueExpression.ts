import { LogicalExpression } from "./LogicalExpression";
import { LogicalExpressionVisitor } from "./LogicalExpressionVisitor";

export class EvaluationException extends Error { }

    export class ValueExpression extends LogicalExpression
    {

        public constructor();
        public constructor(value: string);
        public constructor(value: number);
        public constructor(value: boolean);
        public constructor(value: string, valueType: ValueType);
        public constructor(value?: any, valueType?: ValueType)
        {
            super();
            if (value)
            {
                this.Value = value;
                if (!valueType)
                {
                    const detectedType = typeof value;
                    switch (detectedType)
                    {
                        case "number":
                        case "bigint":
                            this.Type = ValueType.Integer;
                            break;
                        case "string":
                            // Attempt to check if it is a date
                            if (new Date(value) as unknown as string !== "Invalid Date" && !isNaN(new Date(value) as unknown as number)) {
                                this.Type = ValueType.DateTime;
                            } else {
                                this.Type = ValueType.String;
                            }
                            break;
                        case "boolean":
                            this.Type = ValueType.Boolean;
                        default:
                            throw new EvaluationException("This value could not be handled: " + value);
                    }
                }
            }

            if (valueType)
            {
                this.Type = valueType;
            }
        }

        public Value: object = "" as unknown as object; // @todo also wrong to be undefined
        public Type: ValueType = ValueType.Boolean; // @todo what

        public Accept(visitor: LogicalExpressionVisitor)
        {
            visitor.Visit(this);
        }
    }

    export enum ValueType
    {
        Integer,
        String,
        DateTime,
        Float,
        Boolean
    }
