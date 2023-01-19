export class InvalidOperationException extends Error {}

// @todo remove me
export enum TypeCode {
  Boolean = 'boolean',
  Byte = 'number',
  SByte = 'number',
  Int16 = 'number',
  UInt16 = 'number',
  Int32 = 'number',
  UInt32 = 'number',
  Int64 = 'bigint',
  UInt64 = 'bigint',
  Single = 'number',
  Double = 'number',
  Decimal = 'number',
}

export class Numbers {
  private static ConvertIfString(s: any): any {
    if (typeof s === 'string' || s instanceof String) {
      return parseFloat(s as string);
    }

    return s;
  }

  public static Add(a: any, b: any): any {
    const aValue = Numbers.ConvertIfString(a);
    const bValue = Numbers.ConvertIfString(b);

    const allowedTypes = ['number', 'bigint'];

    // Heree we have to consider the JS magic to be a bit different.
    const typeCodeA = typeof aValue;
    const typeCodeB = typeof bValue;

    if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
      throw new InvalidOperationException(
        `Operator '+' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`
      );
    }

    return aValue + bValue;
  }

  public static Subtract(a: any, b: any): any {
    const aValue = Numbers.ConvertIfString(a);
    const bValue = Numbers.ConvertIfString(b);

    const allowedTypes = ['number', 'bigint'];

    // Heree we have to consider the JS magic to be a bit different.
    const typeCodeA = typeof a;
    const typeCodeB = typeof b;

    if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
      throw new InvalidOperationException(
        `Operator '-' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`
      );
    }

    return aValue - bValue;
  }

  public static Multiply(a: any, b: any): any {
    const aValue = Numbers.ConvertIfString(a);
    const bValue = Numbers.ConvertIfString(b);

    const allowedTypes = ['number', 'bigint'];

    // Heree we have to consider the JS magic to be a bit different.
    const typeCodeA = typeof a;
    const typeCodeB = typeof b;

    if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
      throw new InvalidOperationException(
        `Operator '*' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`
      );
    }

    return aValue * bValue;
  }

  public static Divide(a: any, b: any): any {
    const aValue = Numbers.ConvertIfString(a);
    const bValue = Numbers.ConvertIfString(b);

    const allowedTypes = ['number', 'bigint'];

    // Heree we have to consider the JS magic to be a bit different.
    const typeCodeA = typeof a;
    const typeCodeB = typeof b;

    if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
      throw new InvalidOperationException(
        `Operator '/' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`
      );
    }

    return aValue / bValue;
  }

  public static Modulo(a: any, b: any): any {
    const aValue = Numbers.ConvertIfString(a);
    const bValue = Numbers.ConvertIfString(b);

    const allowedTypes = ['number', 'bigint'];

    // Heree we have to consider the JS magic to be a bit different.
    const typeCodeA = typeof a;
    const typeCodeB = typeof b;

    if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
      throw new InvalidOperationException(
        `Operator '/' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`
      );
    }

    return aValue % bValue;
  }

  public static Max(a: any, b: any): any {
    const aValue = Numbers.ConvertIfString(a);
    const bValue = Numbers.ConvertIfString(b);

    if (aValue == null && b == null) {
      return null;
    }

    if (aValue == null) {
      return bValue;
    }

    if (bValue == null) {
      return aValue;
    }

    const allowedTypes = ['number', 'bigint'];

    // Heree we have to consider the JS magic to be a bit different.
    const typeCodeA = typeof a;
    const typeCodeB = typeof b;

    if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
      throw new InvalidOperationException(
        `Operator 'MAX' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`
      );
    }

    return Math.max(aValue, bValue);
  }

  public static Min(a: any, b: any): any {
    const aValue = Numbers.ConvertIfString(a);
    const bValue = Numbers.ConvertIfString(b);

    if (aValue == null && b == null) {
      return null;
    }

    if (aValue == null) {
      return bValue;
    }

    if (bValue == null) {
      return aValue;
    }

    const allowedTypes = ['number', 'bigint'];

    // Heree we have to consider the JS magic to be a bit different.
    const typeCodeA = typeof a;
    const typeCodeB = typeof b;

    if (allowedTypes.indexOf(typeCodeA) == -1 || allowedTypes.indexOf(typeCodeB) == -1) {
      throw new InvalidOperationException(
        `Operator 'MIN' cannot be applied to operands of type ${typeCodeA} and ${typeCodeB}.`
      );
    }

    return Math.min(aValue, bValue);
  }
}
