import { Expression, EvaluateOptions } from './dist/ncalc.node.js';

const expr = '(((bfid % 389) >=0 AND (bfid % 389) <= 340) AND bfid != 1876702 AND bfid != 1806269 AND bfid != 2031020 AND bfid != 2039347 AND bfid != 1904629 AND bfid != 1864103 AND bfid != 1935667 AND bfid != 1806056 AND bfid != 1882735 AND bfid != 2094459 AND bfid != 1866312 AND bfid != 93833 AND bfid != 95678 AND bfid != 2077999 AND bfid != 2136701 AND bfid != 1882689 AND bfid != 1938176 AND bfid != 36100 AND bfid != 2075982 AND bfid != 2098624 AND bfid != 2105977 AND bfid != 2249726) AND time >= 1678176000000 AND time <= 1683532800000';
console.time();
const params = { 'bfid': 1000, 'time': 0, 'playerLevel_1d': 0, 'playerLevel_7d': 1 };

const expression = new Expression(expr);
expression.Options = EvaluateOptions.NoCache;
expression.Parameters = params;
for (let i = 1; i < 1000000; i++)
{

    expression.Evaluate();
}

console.timeEnd();