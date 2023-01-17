# NCalcJS

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ThomasHambach_NcalcJS&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ThomasHambach_NcalcJS) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ThomasHambach_NcalcJS&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ThomasHambach_NcalcJS) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![GitHub contributors](https://img.shields.io/github/contributors/thomashambach/NCalcJS.svg)](https://github.com/thomashambach/NCalcJS/graphs/contributors) 


NCalc is a mathematical expressions evaluator in JavaScript/TypeScript. NCalc can parse any expression and evaluate the result, including static or dynamic parameters and custom functions.

## Project Description

### Status

[x] ANTLR4 Grammar
[ ] Custom functions
[ ] Unit tests
[ ] Documentation
[ ] Usage examples
[ ] Support older Node/JS versions
[ ] Confirm browser support

## Functionalities
**Simple Expressions**

```c#
Expression e = new Expression("2 + 3 * 5");
Debug.Assert(17 == e.Evaluate());
```

**Evaluates .NET data types**

```c#
Debug.Assert(123456 == new Expression("123456").Evaluate()); // integers
Debug.Assert(new DateTime(2001, 01, 01) == new Expression("#01/01/2001#").Evaluate()); // date and times
Debug.Assert(123.456 == new Expression("123.456").Evaluate()); // floating point numbers
Debug.Assert(true == new Expression("true").Evaluate()); // booleans
Debug.Assert("azerty" == new Expression("'azerty'").Evaluate()); // strings
```

**Handles mathematical functional from System.Math**

```c#
Debug.Assert(0 == new Expression("Sin(0)").Evaluate());
Debug.Assert(2 == new Expression("Sqrt(4)").Evaluate());
Debug.Assert(0 == new Expression("Tan(0)").Evaluate());
```

**Evaluates custom functions**

```c#
Expression e = new Expression("SecretOperation(3, 6)");
e.EvaluateFunction += delegate(string name, FunctionArgs args)
    {
        if (name == "SecretOperation")
            args.Result = (int)args.Parameters[0].Evaluate() + (int)args.Parameters[1].Evaluate();
    };

Debug.Assert(9 == e.Evaluate());
```

**Handles unicode characters**

```c#
Debug.Assert("経済協力開発機構" == new Expression("'経済協力開発機構'").Evaluate());
Debug.Assert("Hello" == new Expression(@"'\u0048\u0065\u006C\u006C\u006F'").Evaluate());
Debug.Assert("だ" == new Expression(@"'\u3060'").Evaluate());
Debug.Assert("\u0100" == new Expression(@"'\u0100'").Evaluate());
```

**Define parameters, even dynamic or expressions**

```c#
Expression e = new Expression("Round(Pow([Pi], 2) + Pow([Pi2], 2) + [X], 2)");

e.Parameters["Pi2"] = new Expression("Pi * [Pi]");
e.Parameters["X"] = 10;

e.EvaluateParameter += delegate(string name, ParameterArgs args)
  {
    if (name == "Pi")
    args.Result = 3.14;
  };

Debug.Assert(117.07 == e.Evaluate());
```

## Related projects

### [NCalc](https://github.com/ncalc/ncalc/)

NCalc C# implementation.

### [NCalc-Async](https://github.com/ncalc/ncalc-async/)

Pure asynchronous C# implementation of NCalc by [Peter Liljenberg](https://github.com/petli).

### [PanoramicData.NCalcExtensions](https://github.com/panoramicdata/PanoramicData.NCalcExtensions)

Extension functions for NCalc in C# to handle many general functions,  
including string functions, switch, if, in, typeOf, cast etc.  
Developed by David, Dan and all at [Panoramic Data](https://github.com/panoramicdata).
