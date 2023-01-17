# NCalcJS

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ThomasHambach_NcalcJS&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ThomasHambach_NcalcJS) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ThomasHambach_NcalcJS&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ThomasHambach_NcalcJS) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![GitHub contributors](https://img.shields.io/github/contributors/thomashambach/NCalcJS.svg)](https://github.com/thomashambach/NCalcJS/graphs/contributors) 

NCalc is a mathematical expressions evaluator in JavaScript/TypeScript. NCalc can parse any expression and evaluate the result, including static or dynamic parameters and custom functions.

## Project Description

### Status

- [x] ANTLR4 Grammar
- [ ] Math Functions
  - [x] Abs
  - [x] Acos
  - [x] Asin
  - [x] Atan
  - [ ] Atan2  
  - [x] Ceiling
  - [x] Cos
  - [x] Exp
  - [x] Floor
  - [ ] IEEEERemainder (Not in JS standard, needs custom code)
  - [x] Ln
  - [x] Log10
  - [x] Pow
  - [ ] Round (Needs custom code)
  - [x] Sign
  - [x] Sqrt
  - [x] Tan
  - [x] Truncate
- [ ] Custom functions
  - [x] Implementation
  - [ ] Document different API from regular NCalc
- [ ] Custom parameters
  - [ ] Implementation (partially done)
  - [ ] Document different API from regular NCalc
- [ ] Unit tests
- [ ] Documentation
- [ ] Usage examples
- [ ] Support older Node/JS versions
- [ ] Confirm browser support
- [ ] Resolve circular dependencies so we do not need 1 massive file

## Related projects

### [NCalc](https://github.com/ncalc/ncalc/)

NCalc C# implementation.

### [NCalc-Async](https://github.com/ncalc/ncalc-async/)

Pure asynchronous C# implementation of NCalc by [Peter Liljenberg](https://github.com/petli).

### [PanoramicData.NCalcExtensions](https://github.com/panoramicdata/PanoramicData.NCalcExtensions)

Extension functions for NCalc in C# to handle many general functions,  
including string functions, switch, if, in, typeOf, cast etc.  
Developed by David, Dan and all at [Panoramic Data](https://github.com/panoramicdata).
