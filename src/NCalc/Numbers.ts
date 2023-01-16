export class InvalidOperationException extends Error {}

// @todo remove me
export enum TypeCode {
    Boolean = "boolean",
    Byte = "number",
    SByte = "number",
    Int16 = "number",
    UInt16 = "number",
    Int32 = "number",
    UInt32 = "number",
    Int64 = "bigint",
    UInt64 = "bigint",
    Single = "number",
    Double = "number",
    Decimal = "number"
}

    export class Numbers
    {
        private static ConvertIfString(s: object): object
        {
            if (typeof s === 'string' || s instanceof String)
            {
                return parseFloat(s as string) as unknown as object;
            }

            return s;
        }

        public static Add(a: object, b: object): object
        {
            const aValue = Numbers.ConvertIfString(a) as unknown as number;
            const bValue = Numbers.ConvertIfString(b) as unknown as number;

            const allowedTypes = ["number", "bigint"]
            
            // Heree we have to consider the JS magic to be a bit different.
            const typeCodeA = typeof a;
            const typeCodeB = typeof b;

            if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1)
            {
                throw new InvalidOperationException(`Operator '+' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
            }

            return (aValue + bValue) as unknown as object;

        }


        public static Subtract(a: object, b: object): object
        {
            const aValue = Numbers.ConvertIfString(a) as unknown as number;
            const bValue = Numbers.ConvertIfString(b) as unknown as number;

            const allowedTypes = ["number", "bigint"]
            
            // Heree we have to consider the JS magic to be a bit different.
            const typeCodeA = typeof a;
            const typeCodeB = typeof b;

            if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1)
            {
                throw new InvalidOperationException(`Operator '-' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
            }

            return (aValue - bValue) as unknown as object;

        }

        public static Multiply(a: object, b: object): object
        {
            const aValue = Numbers.ConvertIfString(a) as unknown as number;
            const bValue = Numbers.ConvertIfString(b) as unknown as number;

            const allowedTypes = ["number", "bigint"]
            
            // Heree we have to consider the JS magic to be a bit different.
            const typeCodeA = typeof a;
            const typeCodeB = typeof b;

            if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1)
            {
                throw new InvalidOperationException(`Operator '*' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
            }

            return (aValue * bValue) as unknown as object;

        }

        public static Divide(a: object, b: object): object
        {
            const aValue = Numbers.ConvertIfString(a) as unknown as number;
            const bValue = Numbers.ConvertIfString(b) as unknown as number;

            const allowedTypes = ["number", "bigint"]
            
            // Heree we have to consider the JS magic to be a bit different.
            const typeCodeA = typeof a;
            const typeCodeB = typeof b;

            if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1)
            {
                throw new InvalidOperationException(`Operator '/' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
            }

            return (aValue / bValue) as unknown as object;

        }

        public static Modulo(a: object, b: object): object
        {
            const aValue = Numbers.ConvertIfString(a) as unknown as number;
            const bValue = Numbers.ConvertIfString(b) as unknown as number;

            const allowedTypes = ["number", "bigint"]
            
            // Heree we have to consider the JS magic to be a bit different.
            const typeCodeA = typeof a;
            const typeCodeB = typeof b;

            if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1)
            {
                throw new InvalidOperationException(`Operator '/' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
            }

            return (aValue % bValue) as unknown as object;

        }

        public static Max(a: object, b: object): object
        {
            const aValue = Numbers.ConvertIfString(a) as unknown as number;
            const bValue = Numbers.ConvertIfString(b) as unknown as number;

            if (aValue == null && b == null)
            {
                return null as unknown as object;
            }

            if (aValue == null)
            {
                return bValue as unknown as object;
            }
            
            if (bValue == null)
            {
                return aValue as unknown as object;
            }

            const allowedTypes = ["number", "bigint"]
            
            // Heree we have to consider the JS magic to be a bit different.
            const typeCodeA = typeof a;
            const typeCodeB = typeof b;

            if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1)
            {
                throw new InvalidOperationException(`Operator 'MAX' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
            }

            return Math.max(aValue, bValue) as unknown as object;

        }

        public static Min(a: object, b: object): object
        {
            const aValue = Numbers.ConvertIfString(a) as unknown as number;
            const bValue = Numbers.ConvertIfString(b) as unknown as number;

            if (aValue == null && b == null)
            {
                return null as unknown as object;
            }

            if (aValue == null)
            {
                return bValue as unknown as object;
            }
            
            if (bValue == null)
            {
                return aValue as unknown as object;
            }

            const allowedTypes = ["number", "bigint"]
            
            // Heree we have to consider the JS magic to be a bit different.
            const typeCodeA = typeof a;
            const typeCodeB = typeof b;

            if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1)
            {
                throw new InvalidOperationException(`Operator 'MIN' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`);
            }

            return Math.min(aValue, bValue) as unknown as object;

        }

    }
