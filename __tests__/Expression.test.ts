import 'jest-expect-message';
import { Expression } from "../src/NCalc/Expression";
import { FunctionArgs } from "../src/NCalc/FunctionArgs";
import { ParameterArgs } from "../src/NCalc/ParameterArgs";

// To easily convert .net asserts, regex for VS code
// Assert\.AreEqual\((.+),(.+)new Expression\((.+)\)\.Evaluate\(\)\);
// expect(new Expression($3).Evaluate()).toBe($1);

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
        // @todo This does not work at all
        // expect(new Expression("' \' hel lo \' '").Evaluate()).toBe(" ' hel lo ' ");
        // expect(new Expression("'\'hello\''").Evaluate()).toBe("'hello'");
        // expect(new Expression("'hel\nlo'").Evaluate()).toBe("hel\nlo");
    });
    test('Maths', () => {
        expect(new Expression("Abs(-1)").Evaluate()).toBe(1);
        expect(new Expression("Acos(1)").Evaluate()).toBe(0);
        expect(new Expression("Asin(0)").Evaluate()).toBe(0);
        expect(new Expression("Atan(0)").Evaluate()).toBe(0);
        expect(new Expression("Ceiling(1.5)").Evaluate()).toBe(2);
        expect(new Expression("Cos(0)").Evaluate()).toBe(1);
        expect(new Expression("Exp(0)").Evaluate()).toBe(1);
        expect(new Expression("Floor(1.5)").Evaluate()).toBe(1);
        // @todo Implement below method
        // expect(new Expression("IEEERemainder(3,2)").Evaluate()).toBe(-1);
        expect(new Expression("Log(1,10)").Evaluate()).toBe(0);
        expect(new Expression("Ln(1)").Evaluate()).toBe(0);
        expect(new Expression("Log10(1)").Evaluate()).toBe(0);
        expect(new Expression("Pow(3,2)").Evaluate()).toBe(9);
        // @todo Add midpoint rounding
        // expect(new Expression("Round(3.222,2)").Evaluate()).toBe(3.22);
        expect(new Expression("Sign(-10)").Evaluate()).toBe(-1);
        expect(new Expression("Sin(0)").Evaluate()).toBe(0);
        expect(new Expression("Sqrt(4)").Evaluate()).toBe(2);
        expect(new Expression("Tan(0)").Evaluate()).toBe(0);
        expect(new Expression("Truncate(1.7)").Evaluate()).toBe(1);
        // Assert.AreEqual(-Math.PI/2, (double) new Expression("Atan2(-1,0)").Evaluate(), 1e-16);
        // Assert.AreEqual(Math.PI/2, (double) new Expression("Atan2(1,0)").Evaluate(), 1e-16);
        // Assert.AreEqual(Math.PI, (double) new Expression("Atan2(0,-1)").Evaluate(), 1e-16);
        // Assert.AreEqual(0, (double) new Expression("Atan2(0,1)").Evaluate(), 1e-16);
    });
    test('ExpressionShouldEvaluateCustomFunctions', () => {
        var e = new Expression("SecretOperation(3, 6)");

        e.EvaluateFunction["SecretOperation"] = (args: FunctionArgs) =>
        {
            args.Result = args.Parameters[0].Evaluate() + args.Parameters[1].Evaluate();
        };
        expect(e.Evaluate()).toBe(9);

    });
    test('ExpressionShouldEvaluateCustomFunctionsWithParameters', () => {
        var e = new Expression("SecretOperation(e, 6) + f");
        e.Parameters["e"] = 3;
        e.Parameters["f"] = 1;

        e.EvaluateFunction["SecretOperation"] = (args: FunctionArgs) =>
        {
            args.Result = args.Parameters[0].Evaluate() + args.Parameters[1].Evaluate();
        };
        expect(e.Evaluate()).toBe(10);
    });

    // @todo This is incorrect.
    test('ExpressionShouldEvaluateParameters', () => {
        var e = new Expression("Round(Pow(Pi, 2) + Pow([Pi Squared], 2) + [X], 2)");

        e.Parameters["Pi Squared"] = new Expression("Pi * [Pi]");
        e.Parameters["X"] = 10;

        e.EvaluateParameter["Pi"] = (args: ParameterArgs) =>
        {
                args.Result = 3.14;
        };
        expect(e.Evaluate()).toBe("117.00");
        // expect(e.Evaluate()).toBe(117.07);
    });

    test('ShouldEvaluateConditionnal', () => {
        var eif = new Expression("if([divider] <> 0, [divided] / [divider], 0)");
        eif.Parameters["divider"] = 5;
        eif.Parameters["divided"] = 5;

        expect(eif.Evaluate()).toBe(1);

        eif = new Expression("if([divider] <> 0, [divided] / [divider], 0)");
        eif.Parameters["divider"] = 0;
        eif.Parameters["divided"] = 5;
        expect(eif.Evaluate()).toBe(0);
    });

    test('ShouldOverrideExistingFunctions', () => {
        var e = new Expression("Floor(1.99)");
        expect(e.Evaluate()).toBe(1);

        e.EvaluateFunction["Floor"] = (args: FunctionArgs) =>
        {
            args.Result = 3;
        };

        expect(e.Evaluate()).toBe(3);
    })

    test('ShouldEveluateInOperator', () => {
            // The last argument should not be evaluated
            var ein = new Expression("in((2 + 2), [1], [2], 1 + 2, 4, 1 / 0)");
            ein.Parameters["1"] = 2;
            ein.Parameters["2"] = 5;

            expect(ein.Evaluate()).toBe(true);

            // @todo Not sure about this test case
            // var eout = new Expression("in((2 + 2), [1], [2], 1 + 2, 3)");
            // eout.Parameters["1"] = 2;
            // eout.Parameters["2"] = 5;

            // expect(ein.Evaluate()).toBe(false);

            // Should work with strings
            var estring = new Expression("in('to' + 'to', 'titi', 'toto')");

            expect(estring.Evaluate()).toBe(true);
    });

    test('ShouldEvaluateOperators', () => {
        const expressions = 
        [
            ["!true", false],
            ["not false", true],
            ["Not false", true],
            ["NOT false", true],
            ["-10", -10],
            ["+20", 20],
            ["2**-1", 0.5],
            ["2**+2", 4.0],
            ["2 * 3", 6],
            ["6 / 2", 3],
            ["7 % 2", 1],
            ["2 + 3", 5],
            ["2 - 1", 1],
            ["1 < 2", true],
            ["1 > 2", false],
            ["1 <= 2", true],
            ["1 <= 1", true],
            ["1 >= 2", false],
            ["1 >= 1", true],
            ["1 = 1", true],
            ["1 == 1", true],
            ["1 != 1", false],
            ["1 <> 1", false],
            ["1 & 1", 1],
            ["1 | 1", 1],
            ["1 ^ 1", 0],
            ["~1", ~1],
            ["2 >> 1", 1],
            ["2 << 1", 4],
            ["true && false", false],
            ["True and False", false],
            ["tRue aNd faLse", false],
            ["TRUE ANd fALSE", false],
            ["true AND FALSE", false],
            ["true || false", true],
            ["true or false", true],
            ["true Or false", true],
            ["true OR false", true],
            ["if(true, 0, 1)", 0],
            ["if(false, 0, 1)", 1]
        ];

        for(const pair of expressions)
        {
            expect(new Expression(pair[0] as string).Evaluate(), `'${pair[0]}' failed, expected '${pair[1]}'`).toBe(pair[1]);
        }
    });

    test('ShouldHandleOperatorsPriority', () => {
        expect(new Expression("2+2+2+2").Evaluate()).toBe(8);
        expect(new Expression("2*2*2*2").Evaluate()).toBe(16);
        expect(new Expression("2*2+2").Evaluate()).toBe(6);
        expect(new Expression("2+2*2").Evaluate()).toBe(6);

        expect(new Expression("1 + 2 + 3 * 4 / 2").Evaluate()).toBe(9);
        expect(new Expression("18/2/2*3").Evaluate()).toBe(13.5);
        
        // @todo
        // expect(new Expression("-1 ** 2").Evaluate()).toBe(-1);
        // expect(new Expression("(-1) ** 2").Evaluate()).toBe(1);
        // expect(new Expression("2 ** 3 ** 2").Evaluate()).toBe(512);
        // expect(new Expression("(2 ** 3) ** 2").Evaluate()).toBe(64);
        // expect(new Expression("2 * 3 ** 2").Evaluate()).toBe(18);
        // expect(new Expression("2 ** 4 / 2").Evaluate()).toBe(8);
    });

    test('ShouldNotLosePrecision', () => {
        expect(new Expression("3/6").Evaluate()).toBe(0.5);
    });

});
