# NCalcJS

[![NPM version](https://img.shields.io/npm/v/ncalcjs)](https://www.npmjs.com/package/ncalcjs)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ThomasHambach_NcalcJS&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ThomasHambach_NcalcJS)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/thomashambach/NCalcJS.svg)](https://github.com/thomashambach/NCalcJS/graphs/contributors)

NCalc is a mathematical expressions evaluator in JavaScript/TypeScript. NCalc can parse any
expression and evaluate the result, including static or dynamic parameters and custom functions. You
may also want to look at the example running on CloudFlare workers
https://github.com/ThomasHambach/expression.worker

## Project Description

### Installation

Get the package from npm.org (https://www.npmjs.com/package/ncalcjs) by running

    npm i --s ncalcjs

or with yarn

    yarn ncalcjs

### Usage

For documentation here is the table of content:

- [description](docs/description.md): overall concepts, usage and extensibility points
- [operators](docs/operators.md): available standard operators and structures
- [functions](docs/functions.md): list of already implemented functions
- [parameters](docs/parameters.md): on how to use parameters expressions

#### Basic

```typescript
import {Expression} from 'ncalcjs';
const e = new Expression('2 + 3 * 5');
console.log(e.Evaluate()); // 17
```

#### Custom Functions

The API compared to C# NCalc is a little different. In NCalcJS you define custom functions in the
following way. Each function is expected to be of the type `EvaluateFunctionHandler`.

```typescript
const e = new Expression('SecretOperation(3, 6)');

e.EvaluateFunction['SecretOperation'] = (args: FunctionArgs) => {
  args.Result = args.Parameters[0].Evaluate() + args.Parameters[1].Evaluate();
};
console.log(e.Evaluate()); // 9
```

#### Handling Errors

You can use the method `Expression.HasErrors()` to check for any errors that are present in your
expression. The errors details are stored in `Expression.errors`.

```typescript
import {Expression} from 'ncalcjs';
const e = new Expression('2 + 3 * 5');
if (e.HasErrors()) {
  console.error(e.errors);
}
```

### Known Issues

- `Round` does not return the correct value
- Circular dependencies are causing the massive `Domain/index.ts` file.
- Unknown browser support
- Support for Node below v16.6 is unconfirmed.
- Not all unit tests are implemented

## Building

Install all dependencies

    npm install

Before we can run our build, we need to install `ts-patch` that will change our `paths` configured
in `tsconfig.json`. Note that you have to run this every time after running `npm install`.

    npm run prepare

Build the distribution version

    npm run build

### ANTLR & Grammar

Note that the files, except for `NCalc.g4` in `/src/Grammar` are automatically generated. Any
changes you wish to make there are to be made in `NCalc.g4`. You will need Java runtime installed on
your system to generate these files.

To update the generated files, run

    npm run grammar

## Contributors

Special thanks to https://github.com/Thaina for creating the basis of this package's ANTLR4 grammar
file. Original C# version available at: https://github.com/Thaina/NCalc2/blob/master/grammer/NCalc.g

## Related projects

### [NCalc](https://github.com/ncalc/ncalc/)

NCalc C# implementation.

### [NCalc-Async](https://github.com/ncalc/ncalc-async/)

Pure asynchronous C# implementation of NCalc by [Peter Liljenberg](https://github.com/petli).

### [PanoramicData.NCalcExtensions](https://github.com/panoramicdata/PanoramicData.NCalcExtensions)

Extension functions for NCalc in C# to handle many general functions,  
including string functions, switch, if, in, typeOf, cast etc.  
Developed by David, Dan and all at [Panoramic Data](https://github.com/panoramicdata).

### [Expression.worker](https://github.com/ThomasHambach/expression.worker)

Starter kit to run NCalcJS in a cloudflare worker.
