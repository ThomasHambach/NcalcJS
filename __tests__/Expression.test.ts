import { Expression } from "../src/NCalc/Expression";

describe('Expressions', () => {
    test('ShouldParseValues', () => {
        expect(new Expression("'azerty'").Evaluate()).toBe("azerty");
        expect(new Expression("'true'").Evaluate()).toBe("true");
        expect(new Expression("123456").Evaluate()).toBe(123456);
        expect(new Expression("true").Evaluate()).toBe(true);
    });
    test('ShouldHandleUnicode', () => {
        expect(new Expression("'経済協力開発機構'").Evaluate()).toBe("経済協力開発機構");
        expect(new Expression("'\u0048\u0065\u006C\u006C\u006F'").Evaluate()).toBe("Hello");
        expect(new Expression("'\u3060'").Evaluate()).toBe("だ");
        expect(new Expression("'\u0100'").Evaluate()).toBe("\u0100");
    });
    test('ShouldEscapeCharacters', () => {
        // expect(new Expression("' \' hel lo \' '").Evaluate()).toBe(" ' hel lo ' ");
        expect(new Expression("'\'hello\''").Evaluate()).toBe("'hello'");
        expect(new Expression("'hel\nlo'").Evaluate()).toBe("hel\nlo");
    });
    test('Maths', () => {
        expect(new Expression("Abs(-1)").Evaluate()).toBe(1);
        expect(new Expression("Abs(1)").Evaluate()).toBe(0);
        // Assert.AreEqual(1M, new Expression("Abs(-1)").Evaluate());
        // Assert.AreEqual(0d, new Expression("Acos(1)").Evaluate());
        // Assert.AreEqual(0d, new Expression("Asin(0)").Evaluate());
        // Assert.AreEqual(0d, new Expression("Atan(0)").Evaluate());
        // Assert.AreEqual(2d, new Expression("Ceiling(1.5)").Evaluate());
        // Assert.AreEqual(1d, new Expression("Cos(0)").Evaluate());
        // Assert.AreEqual(1d, new Expression("Exp(0)").Evaluate());
        // Assert.AreEqual(1d, new Expression("Floor(1.5)").Evaluate());
        // Assert.AreEqual(-1d, new Expression("IEEERemainder(3,2)").Evaluate());
        // Assert.AreEqual(0d, new Expression("Log(1,10)").Evaluate());
        // Assert.AreEqual(0d, new Expression("Ln(1)").Evaluate());
        // Assert.AreEqual(0d, new Expression("Log10(1)").Evaluate());
        // Assert.AreEqual(9d, new Expression("Pow(3,2)").Evaluate());
        // Assert.AreEqual(3.22d, new Expression("Round(3.222,2)").Evaluate());
        // Assert.AreEqual(-1, new Expression("Sign(-10)").Evaluate());
        // Assert.AreEqual(0d, new Expression("Sin(0)").Evaluate());
        // Assert.AreEqual(2d, new Expression("Sqrt(4)").Evaluate());
        // Assert.AreEqual(0d, new Expression("Tan(0)").Evaluate());
        // Assert.AreEqual(1d, new Expression("Truncate(1.7)").Evaluate());
        // Assert.AreEqual(-Math.PI/2, (double) new Expression("Atan2(-1,0)").Evaluate(), 1e-16);
        // Assert.AreEqual(Math.PI/2, (double) new Expression("Atan2(1,0)").Evaluate(), 1e-16);
        // Assert.AreEqual(Math.PI, (double) new Expression("Atan2(0,-1)").Evaluate(), 1e-16);
        // Assert.AreEqual(0, (double) new Expression("Atan2(0,1)").Evaluate(), 1e-16);
    })
});
