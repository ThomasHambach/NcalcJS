import 'jest-expect-message';
import {Expression} from '../src/NCalc/Expression';
import {FunctionArgs} from '../src/NCalc/FunctionArgs';
import {ParameterArgs} from '../src/NCalc/ParameterArgs';
import {
    BinaryExpression,
    BinaryExpressionType,
    Identifier,
    NCalcFunction,
    ValueExpression
} from '../src/NCalc/Domain/index';
import {EvaluateOptions} from '../src/NCalc/EvaluationOptions';

// To easily convert .net asserts, regex for VS code
// Assert\.AreEqual\((.+),(.+)new Expression\((.+)\)\.Evaluate\(\)\);
// expect(new Expression($3).Evaluate()).toBe($1);

describe('Expressions', () => {
    test('ShouldCache', () => {
        const expression = new Expression('1 + 2');
        expect(Expression.CachedExpressions['1 + 2']).toBe(undefined);
        expression.Evaluate();
        expect(Expression.CachedExpressions).toHaveProperty('1 + 2');
    });

    test('ShouldParseValues', () => {
        expect(new Expression('\'azerty\'').Evaluate()).toBe('azerty');
        expect(new Expression('\'true\'').Evaluate()).toBe('true');
        expect(new Expression('123456').Evaluate()).toBe(123456);
        expect(new Expression('true').Evaluate()).toBe(true);
    });
    test('ShouldHandleUnicode', () => {
        expect(new Expression('\'経済協力開発機構\'').Evaluate()).toBe('経済協力開発機構');
        expect(new Expression('\'\u0048\u0065\u006C\u006C\u006F\'').Evaluate()).toBe('Hello');
        expect(new Expression('\'\u3060\'').Evaluate()).toBe('だ');
        expect(new Expression('\'\u0100\'').Evaluate()).toBe('\u0100');
    });
    test('ShouldEscapeCharacters', () => {
    // @todo This does not work at all
    // expect(new Expression("' ' hel lo ' '").Evaluate()).toBe(" ' hel lo ' ");
    // expect(new Expression("''hello''").Evaluate()).toBe("'hello'");
    // expect(new Expression("'hel\nlo'").Evaluate()).toBe('hel\nlo');
    });
    test('Maths', () => {
        expect(new Expression('Abs(-1)').Evaluate()).toBe(1);
        expect(new Expression('Acos(1)').Evaluate()).toBe(0);
        expect(new Expression('Asin(0)').Evaluate()).toBe(0);
        expect(new Expression('Atan(0)').Evaluate()).toBe(0);
        expect(new Expression('Ceiling(1.5)').Evaluate()).toBe(2);
        expect(new Expression('Cos(0)').Evaluate()).toBe(1);
        expect(new Expression('Exp(0)').Evaluate()).toBe(1);
        expect(new Expression('Floor(1.5)').Evaluate()).toBe(1);
        // @todo Implement below method
        // expect(new Expression("IEEERemainder(3,2)").Evaluate()).toBe(-1);
        expect(new Expression('Log(1,10)').Evaluate()).toBe(0);
        expect(new Expression('Ln(1)').Evaluate()).toBe(0);
        expect(new Expression('Log10(1)').Evaluate()).toBe(0);
        expect(new Expression('Pow(3,2)').Evaluate()).toBe(9);
        // @todo Add midpoint rounding
        // expect(new Expression("Round(3.222,2)").Evaluate()).toBe(3.22);
        expect(new Expression('Sign(-10)').Evaluate()).toBe(-1);
        expect(new Expression('Sin(0)').Evaluate()).toBe(0);
        expect(new Expression('Sqrt(4)').Evaluate()).toBe(2);
        expect(new Expression('Tan(0)').Evaluate()).toBe(0);
        expect(new Expression('Truncate(1.7)').Evaluate()).toBe(1);
        expect(new Expression('Max(1,2)').Evaluate()).toBe(2);
        expect(new Expression('Min(1,2)').Evaluate()).toBe(1);
    // Assert.AreEqual(-Math.PI/2, (double) new Expression("Atan2(-1,0)").Evaluate(), 1e-16);
    // Assert.AreEqual(Math.PI/2, (double) new Expression("Atan2(1,0)").Evaluate(), 1e-16);
    // Assert.AreEqual(Math.PI, (double) new Expression("Atan2(0,-1)").Evaluate(), 1e-16);
    // Assert.AreEqual(0, (double) new Expression("Atan2(0,1)").Evaluate(), 1e-16);
    });
    test('ExpressionShouldEvaluateCustomFunctions', () => {
        const e = new Expression('SecretOperation(3, 6)');

        e.EvaluateFunction['SecretOperation'] = (args: FunctionArgs) => {
            args.Result = args.Parameters[0].Evaluate() + args.Parameters[1].Evaluate();
        };
        expect(e.Evaluate()).toBe(9);
    });
    test('ExpressionShouldEvaluateCustomFunctionsWithParameters', () => {
        const e = new Expression('SecretOperation(e, 6) + f');
        e.Parameters['e'] = 3;
        e.Parameters['f'] = 1;

        e.EvaluateFunction['SecretOperation'] = (args: FunctionArgs) => {
            args.Result = args.Parameters[0].Evaluate() + args.Parameters[1].Evaluate();
        };
        expect(e.Evaluate()).toBe(10);
    });

    // @todo This is incorrect.
    test('ExpressionShouldEvaluateParameters', () => {
        const e = new Expression('Round(Pow(Pi, 2) + Pow([Pi Squared], 2) + [X], 2)');

        e.Parameters['Pi Squared'] = new Expression('Pi * [Pi]');
        e.Parameters['X'] = 10;

        e.EvaluateParameter['Pi'] = (args: ParameterArgs) => {
            args.Result = 3.14;
        };
        expect(e.Evaluate()).toBe('117.00');
    // expect(e.Evaluate()).toBe(117.07);
    });

    test('ShouldEvaluateConditionnal', () => {
        let eif = new Expression('if([divider] <> 0, [divided] / [divider], 0)');
        eif.Parameters['divider'] = 5;
        eif.Parameters['divided'] = 5;

        expect(eif.Evaluate()).toBe(1);

        eif = new Expression('if([divider] <> 0, [divided] / [divider], 0)');
        eif.Parameters['divider'] = 0;
        eif.Parameters['divided'] = 5;
        expect(eif.Evaluate()).toBe(0);
    });

    test('ShouldOverrideExistingFunctions', () => {
        const e = new Expression('Floor(1.99)');
        expect(e.Evaluate()).toBe(1);

        e.EvaluateFunction['Floor'] = (args: FunctionArgs) => {
            args.Result = 3;
        };

        expect(e.Evaluate()).toBe(3);
    });

    test('ShouldEveluateInOperator', () => {
    // The last argument should not be evaluated
        const ein = new Expression('in((2 + 2), [1], [2], 1 + 2, 4, 1 / 0)');
        ein.Parameters['1'] = 2;
        ein.Parameters['2'] = 5;

        expect(ein.Evaluate()).toBe(true);

        // @todo Not sure about this test case
        // var eout = new Expression("in((2 + 2), [1], [2], 1 + 2, 3)");
        // eout.Parameters["1"] = 2;
        // eout.Parameters["2"] = 5;

        // expect(ein.Evaluate()).toBe(false);

        // Should work with strings
        const estring = new Expression('in(\'to\' + \'to\', \'titi\', \'toto\')');

        expect(estring.Evaluate()).toBe(true);
    });

    test('ShouldEvaluateOperators', () => {
        const expressions = [
            ['!true', false],
            ['not false', true],
            ['Not false', true],
            ['NOT false', true],
            ['-10', -10],
            ['+20', 20],
            //['2**-1', 0.5],
            //['2**+2', 4.0],
            ['2 * 3', 6],
            ['6 / 2', 3],
            ['7 % 2', 1],
            ['2 + 3', 5],
            ['2 - 1', 1],
            ['1 < 2', true],
            ['1 > 2', false],
            ['1 <= 2', true],
            ['1 <= 1', true],
            ['1 >= 2', false],
            ['1 >= 1', true],
            ['1 = 1', true],
            ['1 == 1', true],
            ['1 != 1', false],
            ['1 <> 1', false],
            ['1 & 1', 1],
            ['1 | 1', 1],
            ['1 ^ 1', 0],
            ['~1', ~1],
            ['2 >> 1', 1],
            ['2 << 1', 4],
            ['true && false', false],
            ['True and False', false],
            ['tRue aNd faLse', false],
            ['TRUE ANd fALSE', false],
            ['true AND FALSE', false],
            ['true || false', true],
            ['true or false', true],
            ['true Or false', true],
            ['true OR false', true],
            ['if(true, 0, 1)', 0],
            ['if(false, 0, 1)', 1]
        ];

        for (const pair of expressions) {
            expect(
                new Expression(pair[0] as string).Evaluate(),
                `'${pair[0]}' failed, expected '${pair[1]}'`
            ).toBe(pair[1]);
        }
    });

    test('ShouldHandleOperatorsPriority', () => {
        expect(new Expression('2+2+2+2').Evaluate()).toBe(8);
        expect(new Expression('2*2*2*2').Evaluate()).toBe(16);
        expect(new Expression('2*2+2').Evaluate()).toBe(6);
        expect(new Expression('2+2*2').Evaluate()).toBe(6);

        expect(new Expression('1 + 2 + 3 * 4 / 2').Evaluate()).toBe(9);
        expect(new Expression('18/2/2*3').Evaluate()).toBe(13.5);

    // expect(new Expression('-1 ** 2').Evaluate()).toBe(-1);
    // expect(new Expression('(-1) ** 2').Evaluate()).toBe(1);
    // expect(new Expression('2 ** 3 ** 2').Evaluate()).toBe(512);
    // expect(new Expression('(2 ** 3) ** 2').Evaluate()).toBe(64);
    // expect(new Expression('2 * 3 ** 2').Evaluate()).toBe(18);
    // expect(new Expression('2 ** 4 / 2').Evaluate()).toBe(8);
    });

    test('ShouldNotLosePrecision', () => {
        expect(new Expression('3/6').Evaluate()).toBe(0.5);
    });

    // @todo
    // test('ShoudlThrowsExceptionInvalidNumber', () => {
    //     expect(new Expression(". + 2").Evaluate()).toThrowError();
    // })

    test('ShouldNotRoundDecimals', () => {
        expect(new Expression('0 <= -0.6').Evaluate()).toBe(false);
    });

    test('ShouldEvaluateTernary', () => {
        expect(new Expression('1+2<3 ? 3+4 : 1').Evaluate()).toBe(1);
    });

    test('ShouldSerializeExpression', () => {
        expect(
            new BinaryExpression(
                BinaryExpressionType.And,
                new ValueExpression(true),
                new ValueExpression(false)
            ).ToString()
        ).toBe('true and false');
        expect(
            new BinaryExpression(
                BinaryExpressionType.Div,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 / 2');
        expect(
            new BinaryExpression(
                BinaryExpressionType.Equal,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 = 2');
        expect(
            new BinaryExpression(
                BinaryExpressionType.Greater,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 > 2');
        expect(
            new BinaryExpression(
                BinaryExpressionType.GreaterOrEqual,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 >= 2');

        expect(
            new BinaryExpression(
                BinaryExpressionType.Lesser,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 < 2');
        expect(
            new BinaryExpression(
                BinaryExpressionType.LesserOrEqual,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 <= 2');
        expect(
            new BinaryExpression(
                BinaryExpressionType.Minus,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 - 2');
        expect(
            new BinaryExpression(
                BinaryExpressionType.Modulo,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 % 2');
        expect(
            new BinaryExpression(
                BinaryExpressionType.NotEqual,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 != 2');

        expect(
            new BinaryExpression(
                BinaryExpressionType.Or,
                new ValueExpression(true),
                new ValueExpression(false)
            ).ToString()
        ).toBe('true or false');
        expect(
            new BinaryExpression(
                BinaryExpressionType.Plus,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 + 2');
        expect(
            new BinaryExpression(
                BinaryExpressionType.Times,
                new ValueExpression(1),
                new ValueExpression(2)
            ).ToString()
        ).toBe('1 * 2');

        // @todo JS quircks
        // expect(new UnaryExpression(UnaryExpressionType.Negate, new BinaryExpression(BinaryExpressionType.And, new ValueExpression(true), new ValueExpression(false))).ToString()).toBe("-(true and false)");
        // expect(new UnaryExpression(UnaryExpressionType.Not, new BinaryExpression(BinaryExpressionType.And, new ValueExpression(true), new ValueExpression(false))).ToString()).toBe("!(true and false)");

        expect(new ValueExpression(true).ToString()).toBe('true');
        expect(new ValueExpression(false).ToString()).toBe('false');
        expect(new ValueExpression(1).ToString()).toBe('1');
        expect(new ValueExpression(1.234).ToString()).toBe('1.234');
        expect(new ValueExpression('hello').ToString()).toBe('\'hello\'');
        // expect(new ValueExpression(dayjs("2009-1-1").format()).ToString()).toBe("#2009-01-01T00:00:00+08:00#");
        expect(
            new NCalcFunction(new Identifier('Sum'), [
                new BinaryExpression(
                    BinaryExpressionType.Plus,
                    new ValueExpression(1),
                    new ValueExpression(2)
                )
            ]).ToString()
        ).toBe('Sum(1 + 2)');
    });

    test('ShouldHandleStringConcat', () => {
        expect(new Expression('\'to\' + \'to\'').Evaluate()).toBe('toto');
        expect(new Expression('\'one\' + 2').Evaluate()).toBe('one2');
        expect(new Expression('1 + \'2\'').Evaluate()).toBe(3);
    });

    test('ShouldDetectSyntaxErrorsBeforeEval', () => {
        let e = new Expression('a + b * (');
        expect(e.errors.length).toBe(0);
        expect(e.HasErrors()).toBeTruthy();
        expect(e.errors.length).toBe(1);

        e = new Expression('* b ');
        expect(e.errors.length).toBe(0);
        expect(e.HasErrors()).toBeTruthy();
        expect(e.errors.length).toBe(1);
    });

    test('ShouldHandleCaseSensitive', () => {
        expect(new Expression('aBs(-1)', EvaluateOptions.IgnoreCase).Evaluate()).toBe(1);
        expect(new Expression('Abs(-1)', EvaluateOptions.None).Evaluate()).toBe(1);

        expect(() => new Expression('aBs(-1)', EvaluateOptions.None).Evaluate()).toThrowError();
    });

    test('ShouldHandleCustomFunctionsInFunctions', () => {
        const e = new Expression('if(true, func1(x) + func2(func3(y)), 0)');

        e.EvaluateFunction['func1'] = (arg: FunctionArgs) => {
            arg.Result = 1;
        };

        e.EvaluateFunction['func2'] = (arg: FunctionArgs) => {
            arg.Result = 2 * parseFloat(arg.Parameters[0].Evaluate());
        };

        e.EvaluateFunction['func3'] = (arg: FunctionArgs) => {
            arg.Result = 3 * parseFloat(arg.Parameters[0].Evaluate());
        };

        e.EvaluateParameter['x'] = (arg: ParameterArgs) => {
            arg.Result = 1;
        };

        e.EvaluateParameter['y'] = (arg: ParameterArgs) => {
            arg.Result = 2;
        };
        e.EvaluateParameter['z'] = (arg: ParameterArgs) => {
            arg.Result = 3;
        };

        expect(e.Evaluate()).toBe(13);
    });

    test('ShouldParseScientific', () => {
        expect(new Expression('1.22e1').Evaluate()).toBe(12.2);
        expect(new Expression('1e2').Evaluate()).toBe(100);
        expect(new Expression('1e+2').Evaluate()).toBe(100);
        expect(new Expression('1e-2').Evaluate()).toBe(0.01);
        expect(new Expression('.1e-2').Evaluate()).toBe(0.001);
        expect(new Expression('1e10').Evaluate()).toBe(10000000000);
    });

    test('ShouldEvaluateArrayParameters', () => {
        const e = new Expression('x * x', EvaluateOptions.IterateParameters);

        const params = [0, 1, 2, 3, 4];
        e.Parameters['x'] = params;

        const result = e.Evaluate();

        expect(result[0]).toBe(0);
        expect(result[1]).toBe(1);
        expect(result[2]).toBe(4);
        expect(result[3]).toBe(9);
        expect(result[4]).toBe(16);
    });

    test('CustomFunctionReturnsNull', () => {
        const e = new Expression('SecretOperation(3, 6)');

        e.EvaluateFunction['SecretOperation'] = (args: FunctionArgs) => {
            args.Result = null;
        };

        expect(e.Evaluate()).toBe(null);
    });

    test('CustomParameterReturnsNull', () => {
        const e = new Expression('x');

        e.EvaluateParameter['x'] = (args: ParameterArgs) => {
            args.Result = null;
        };

        expect(e.Evaluate()).toBe(null);
    });

    test('ShouldCompareDates', () => {
        expect(new Expression('#1/1/2009#==#1/1/2009#').Evaluate()).toBe(true);
        expect(new Expression('#2/1/2009#==#1/1/2009#').Evaluate()).toBe(false);
    });

    // @todo
    // test('ShouldRoundFromZero', () => {
    //   expect(new Expression('Round(22.5, 0)').Evaluate()).toBe(22);
    //   expect(new Expression('Round(22.5, 0)', EvaluateOptions.RoundAwayFromZero).Evaluate()).toBe(23);
    // });

    test('ShouldEvaluateSubExpressions', () => {
        const volume = new Expression('[surface] * h');
        const surface = new Expression('[l] * [L]');
        volume.Parameters['surface'] = surface;
        volume.Parameters['h'] = 3;
        surface.Parameters['l'] = 1;
        surface.Parameters['L'] = 2;
        expect(volume.Evaluate()).toBe(6);
    });

    test('ShouldHandleLongValues', () => {
        expect(new Expression('40000000000+1').Evaluate()).toBe(40_000_000_000 + 1);
    });

    test('ShouldCompareLongValues', () => {
        expect(new Expression('(0=1500000)||(((0+2200000000)-1500000)<0)').Evaluate()).toBe(false);
    });
    test('ShouldDisplayErrorIncompatibleTypes', () => {
        expect(() => {
            const e = new Expression('(a > b) + 10');
            e.Parameters['a'] = 1;
            e.Parameters['b'] = 2;
            e.Evaluate();
        }).toThrowError();
    });

    test('ShouldShortCircuitBooleans', () => {
        const e = new Expression('([a] != 0) && ([b]/[a]>2)');
        e.Parameters['a'] = 0;

        expect(e.Evaluate()).toBe(false);
    });

});
