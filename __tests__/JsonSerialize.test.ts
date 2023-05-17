import 'jest-expect-message';
import { Expression } from '../src/NCalc/Expression';
import { EvaluationVisitor } from '../src/NCalc/Domain';

describe('Expressions', () => {
    test('ShouldSerializeSimple', () => {
        const expression = new Expression('1 + 1');
        const parsed = expression.Compile('1 = 1 AND 5 = 5 AND (1 = 1', true);
        const serialized = JSON.stringify(parsed);
        const parsedTree = EvaluationVisitor.FromJson(JSON.parse(serialized));
        const exp = new Expression(parsedTree);
        expect(exp.HasErrors()).toBe(false);
        expect(exp.Evaluate()).toBe(true);
    });

    test('ShouldSerializeComplex', () => {
        const expression = new Expression('1 + 1');
        const expressionString = '(((bfid % 389) >=0 AND (bfid % 389) <= 340) AND bfid != 1876702 AND bfid != 1806269 AND bfid != 2031020 AND bfid != 2039347 AND bfid != 1904629 AND bfid != 1864103 AND bfid != 1935667 AND bfid != 1806056 AND bfid != 1882735 AND bfid != 2094459 AND bfid != 1866312 AND bfid != 93833 AND bfid != 95678 AND bfid != 2077999 AND bfid != 2136701 AND bfid != 1882689 AND bfid != 1938176 AND bfid != 36100 AND bfid != 2075982 AND bfid != 2098624 AND bfid != 2105977 AND bfid != 2249726) AND time >= 1678176000000 AND time <= 1683532800000';
        const parsed = expression.Compile(expressionString, true);
        const serialized = JSON.stringify(parsed);
        const parsedTree = EvaluationVisitor.FromJson(JSON.parse(serialized));
        const exp = new Expression(parsedTree);
        exp.Parameters = { 'bfid': 1000, 'time': 0, 'playerLevel_1d': 0, 'playerLevel_7d': 1 };
        expect(exp.HasErrors()).toBe(false);
        expect(exp.Evaluate()).toBe(false);
    });

});