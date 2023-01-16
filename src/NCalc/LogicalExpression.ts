import { BinaryExpression, BinaryExpressionType } from "./Domain/BinaryExpression";
import { LogicalExpressionVisitor } from "./Domain/LogicalExpressionVisitor";
import { SerializationVisitor } from "./Domain/SerializationVisitor";
import { ValueExpression } from "./Domain/ValueExpression";
const BS: string = '\\';

export class LogicalExpression
{
    

    private static extractString(text: string): string
    {
        let sb: string[] = [];
        let startIndex = 1; // Skip initial quote
        let slashIndex = -1;

        const textencoder = new TextEncoder();
        const decoder = new TextDecoder();

        while ((slashIndex = sb.join().indexOf(BS, startIndex)) != -1)
        {
            let escapeType = sb[slashIndex + 1];
            switch (escapeType)
            {
                case 'u':
                    let hcode = [sb[slashIndex + 4], sb[slashIndex + 5]].join();
                    let lcode = [sb[slashIndex + 2], sb[slashIndex + 3]].join();

                    const hBytes = new Uint16Array(hcode.length);
                    const lBytes = new Uint16Array(lcode.length);

                    const merged = new Uint16Array(hBytes.length + lBytes.length);
                    merged.set(hBytes);
                    merged.set(lBytes, hBytes.length);

                    const unicodeChar = decoder.decode(merged);

                    // let unicodeChar = Encoding.Unicode.GetChars(new byte[] { System.Convert.ToByte(hcode, 16), System.Convert.ToByte(lcode, 16) })[0];
                    sb.splice(slashIndex, 6, unicodeChar);
                    // sb.Insert(slashIndex, unicodeChar);
                    break;
                case 'n': sb.splice(slashIndex, 2, '\n'); break;
                case 'r': sb.splice(slashIndex, 2, '\r'); break;
                case 't': sb.splice(slashIndex, 2, '\t'); break;
                case '\'': sb.splice(slashIndex, 2, '\''); break;
                case '\\': sb.splice(slashIndex, 2, '\\'); break;
                default: throw new Error("Unvalid escape sequence: \\" + escapeType);
            }

            startIndex = slashIndex + 1;

        }

        sb.splice(0, 1);
        sb.splice(sb.length - 1, 1);

        return sb.join();
    }
    
    public And(operand: object): BinaryExpression;
    public And(operand: LogicalExpression): BinaryExpression;
    public And(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.And, this, new ValueExpression(operand));
        } else {
            return new BinaryExpression(BinaryExpressionType.And, this, operand);
        }
    }

    public DividedBy(operand: object): BinaryExpression;
    public DividedBy(operand: LogicalExpression): BinaryExpression;
    public DividedBy(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.Div, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Div, this, new ValueExpression(operand));
        }
        
    }

    public EqualsTo(operand: object): BinaryExpression;
    public EqualsTo(operand: LogicalExpression): BinaryExpression;
    public EqualsTo(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.Equal, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Equal, this, new ValueExpression(operand));
        }
        
    }

    public GreaterThan(operand: object): BinaryExpression;
    public GreaterThan(operand: LogicalExpression): BinaryExpression;
    public GreaterThan(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.Greater, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Greater, this, new ValueExpression(operand));
        }
    }

    public GreaterOrEqualThan(operand: object): BinaryExpression;
    public GreaterOrEqualThan(operand: LogicalExpression): BinaryExpression;
    public GreaterOrEqualThan(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
            return new BinaryExpression(BinaryExpressionType.GreaterOrEqual, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.GreaterOrEqual, this, new ValueExpression(operand));
        }
    }

    public LesserThan(operand: object): BinaryExpression;
    public LesserThan(operand: LogicalExpression): BinaryExpression;
    public LesserThan(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Lesser, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Lesser, this, new ValueExpression(operand));
        }
    }

    public LesserOrEqualThan(operand: object): BinaryExpression;
    public LesserOrEqualThan(operand: LogicalExpression): BinaryExpression;
    public LesserOrEqualThan(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.LesserOrEqual, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.LesserOrEqual, this, new ValueExpression(operand));
        }
    }

    public Minus(operand: object): BinaryExpression;
    public Minus(operand: LogicalExpression): BinaryExpression;
    public Minus(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Minus, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Minus, this, new ValueExpression(operand));
        }
    }

    public Modulo(operand: object): BinaryExpression;
    public Modulo(operand: LogicalExpression): BinaryExpression;
    public Modulo(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Modulo, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Modulo, this, new ValueExpression(operand));
        }
    }

    public NotEqual(operand: object): BinaryExpression;
    public NotEqual(operand: LogicalExpression): BinaryExpression;
    public NotEqual(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.NotEqual, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.NotEqual, this, new ValueExpression(operand));
        }
    }

    public Or(operand: object): BinaryExpression;
    public Or(operand: LogicalExpression): BinaryExpression;
    public Or(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Or, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Or, this, new ValueExpression(operand));
        }
    }

    public Plus(operand: object): BinaryExpression;
    public Plus(operand: LogicalExpression): BinaryExpression;
    public Plus(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Plus, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Plus, this, new ValueExpression(operand));
        }
    }

    public Mult(operand: object): BinaryExpression;
    public Mult(operand: LogicalExpression): BinaryExpression;
    public Mult(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.Plus, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.Plus, this, new ValueExpression(operand));
        }
    }

    public BitwiseOr(operand: object): BinaryExpression;
    public BitwiseOr(operand: LogicalExpression): BinaryExpression;
    public BitwiseOr(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.BitwiseOr, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.BitwiseOr, this, new ValueExpression(operand));
        }
    }

    public BitwiseAnd(operand: object): BinaryExpression;
    public BitwiseAnd(operand: LogicalExpression): BinaryExpression;
    public BitwiseAnd(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.BitwiseAnd, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.BitwiseAnd, this, new ValueExpression(operand));
        }
    }

    public BitwiseXOr(operand: object): BinaryExpression;
    public BitwiseXOr(operand: LogicalExpression): BinaryExpression;
    public BitwiseXOr(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.BitwiseXOr, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.BitwiseXOr, this, new ValueExpression(operand));
        }
    }

    public LeftShift(operand: object): BinaryExpression;
    public LeftShift(operand: LogicalExpression): BinaryExpression;
    public LeftShift(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.LeftShift, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.LeftShift, this, new ValueExpression(operand));
        }
    }

    public RightShift(operand: object): BinaryExpression;
    public RightShift(operand: LogicalExpression): BinaryExpression;
    public RightShift(operand: any): BinaryExpression
    {
        if (Object.getPrototypeOf(operand) === "LogicalExpression"){
             return new BinaryExpression(BinaryExpressionType.RightShift, this, operand);
        } else {
            return new BinaryExpression(BinaryExpressionType.RightShift, this, new ValueExpression(operand));
        }
    }

    public ToString(): string
    {
        const serializer = new SerializationVisitor();
        this.Accept(serializer);

        return serializer.Result.join("").trim();
    }

    public Accept(visitor: LogicalExpressionVisitor): void
    {
        visitor.Visit(this);
    }
}

