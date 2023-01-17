import { Expression } from "../src/NCalc/Expression";

describe('Expressions', () => {
    test('Shouldparsevalues', () => {


        expect(new Expression("'azerty'").Evaluate()).toBe("azerty");
        expect(new Expression("'true'").Evaluate()).toBe("true");
        expect(new Expression("123456").Evaluate()).toBe(123456);
        expect(new Expression("true").Evaluate()).toBe(true);
        
        // Assert.AreEqual(123456, new Expression("123456").Evaluate());
        // Assert.AreEqual(new DateTime(2001, 01, 01), new Expression("#01/01/2001#").Evaluate());
        // Assert.AreEqual(0.2d, new Expression(".2").Evaluate());
        // Assert.AreEqual(123.456d, new Expression("123.456").Evaluate());
        // Assert.AreEqual(123d, new Expression("123.").Evaluate());
        // Assert.AreEqual(12300d, new Expression("123.E2").Evaluate());
        // Assert.AreEqual(true, new Expression("true").Evaluate());
        // Assert.AreEqual("true", new Expression("'true'").Evaluate());
        // Assert.AreEqual("azerty", new Expression("'azerty'").Evaluate());
    });
});
