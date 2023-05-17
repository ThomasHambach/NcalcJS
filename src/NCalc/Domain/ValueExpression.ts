import { EvaluationException, LogicalExpression, LogicalExpressionVisitor } from '@/NCalc/Domain';

export class ValueExpression extends LogicalExpression {
    public constructor();
    public constructor(value: string);
    public constructor(value: number);
    public constructor(value: boolean);
    public constructor(value: string, valueType: ValueType);
    public constructor(value: number, valueType: ValueType);
    public constructor(value: boolean, valueType: ValueType);
    public constructor(value?: any, valueType?: ValueType) {
        super();
        if (value !== null && value != undefined) {
            this.Value = value;
            if (valueType === null || valueType === undefined) {
                const detectedType = typeof value;
                switch (detectedType) {
                case 'number':
                case 'bigint':
                    this.Type = ValueType.Integer;
                    break;
                case 'string':
                    // Attempt to check if it is a date
                    if (
                        (new Date(value) as unknown as string) !== 'Invalid Date' &&
              !isNaN(new Date(value) as unknown as number)
                    ) {
                        this.Type = ValueType.DateTime;
                    } else {
                        this.Type = ValueType.String;
                    }
                    break;
                case 'boolean':
                    this.Type = ValueType.Boolean;
                    break;
                default:
                    throw new EvaluationException('This value could not be handled: ' + value);
                }
            }
        }

        if (valueType) {
            this.Type = valueType;
        }
    }

    public Value: any = '';
    public Type: ValueType = ValueType.Boolean;
    public ClassName = 'ValueExpression';

    public Accept(visitor: LogicalExpressionVisitor) {
        visitor.Visit(this);
    }
}

export enum ValueType {
  None = 0,
  Integer = 1,
  String = 2,
  DateTime = 3,
  Float = 4,
  Boolean = 5
}
