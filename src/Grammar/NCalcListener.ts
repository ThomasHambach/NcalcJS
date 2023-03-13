// Generated from NCalc.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { NcalcExpressionContext } from "./NCalcParser";
import { LogicalExpressionContext } from "./NCalcParser";
import { ConditionalExpressionContext } from "./NCalcParser";
import { BooleanExpressionContext } from "./NCalcParser";
import { RelationalExpressionContext } from "./NCalcParser";
import { ShiftExpressionContext } from "./NCalcParser";
import { AdditiveExpressionContext } from "./NCalcParser";
import { MultiplicativeExpressionContext } from "./NCalcParser";
import { UnaryExpressionContext } from "./NCalcParser";
import { ExponentialExpressionContext } from "./NCalcParser";
import { PrimaryExpressionContext } from "./NCalcParser";
import { ValueContext } from "./NCalcParser";
import { IdentifierContext } from "./NCalcParser";
import { ExpressionListContext } from "./NCalcParser";
import { ArgumentsContext } from "./NCalcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `NCalcParser`.
 */
export default class NCalcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `NCalcParser.ncalcExpression`.
	 * @param ctx the parse tree
	 */
	enterNcalcExpression?: (ctx: NcalcExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.ncalcExpression`.
	 * @param ctx the parse tree
	 */
	exitNcalcExpression?: (ctx: NcalcExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.logicalExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.logicalExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	enterShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.shiftExpression`.
	 * @param ctx the parse tree
	 */
	exitShiftExpression?: (ctx: ShiftExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	enterExponentialExpression?: (ctx: ExponentialExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.exponentialExpression`.
	 * @param ctx the parse tree
	 */
	exitExponentialExpression?: (ctx: ExponentialExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Enter a parse tree produced by `NCalcParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `NCalcParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
}

