# Functions

## Basic

The framework includes a set of already implemented functions.

| Name          | Description                                                                                                                                                                                                  | Usage               | Result |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ------ |
| Abs           | Returns the absolute value of a specified number.                                                                                                                                                            | Abs(-1)             | 1M     |
| Acos          | Returns the angle whose cosine is the specified number.                                                                                                                                                      | Acos(1)             | 0d     |
| Asin          | Returns the angle whose sine is the specified number.                                                                                                                                                        | Asin(0)             | 0d     |
| Atan          | Returns the angle whose tangent is the specified number.                                                                                                                                                     | Atan(0)             | 0d     |
| Ceiling       | Returns the smallest integer greater than or equal to the specified number.                                                                                                                                  | Ceiling(1.5)        | 2d     |
| Cos           | Returns the cosine of the specified angle.                                                                                                                                                                   | Cos(0)              | 1d     |
| Exp           | Returns e raised to the specified power.                                                                                                                                                                     | Exp(0)              | 1d     |
| Floor         | Returns the largest integer less than or equal to the specified number.                                                                                                                                      | Floor(1.5)          | 1d     |
| IEEERemainder | Returns the remainder resulting from the division of a specified number by another specified number.                                                                                                         | IEEERemainder(3, 2) | -1d    |
| Log           | Returns the logarithm of a specified number.                                                                                                                                                                 | Log(1, 10)          | 0d     |
| Log10         | Returns the base 10 logarithm of a specified number.                                                                                                                                                         | Log10(1)            | 0d     |
| Max           | Returns the larger of two specified numbers.                                                                                                                                                                 | Max(1, 2)           | 2      |
| Min           | Returns the smaller of two numbers.                                                                                                                                                                          | Min(1, 2)           | 1      |
| Pow           | Returns a specified number raised to the specified power.                                                                                                                                                    | Pow(3, 2)           | 9d     |
| Round         | Rounds a value to the nearest integer or specified number of decimal places. The mid number behaviour can be changed by using EvaluateOption.RoundAwayFromZero during construction of the Expression object. | Round(3.222, 2)     | 3.22d  |
| Sign          | Returns a value indicating the sign of a number.                                                                                                                                                             | Sign(-10)           | -1     |
| Sin           | Returns the sine of the specified angle.                                                                                                                                                                     | Sin(0)              | 0d     |
| Sqrt          | Returns the square root of a specified number.                                                                                                                                                               | Sqrt(4)             | 2d     |
| Tan           | Returns the tangent of the specified angle.                                                                                                                                                                  | Tan(0)              | 0d     |
| Truncate      | Calculates the integral part of a number.                                                                                                                                                                    | Truncate(1.7)       | 1      |

## General Purpose

| Name | Description                                       | Usage                                            | Result          |
| ---- | ------------------------------------------------- | ------------------------------------------------ | --------------- |
| in   | Returns whether an element is in a set of values. | in(1 + 1, 1, 2, 3)                               | true            |
| if   | Returns a value based on a condition.             | if(3 % 2 = 1, 'value is true', 'value is false') | 'value is true' |
