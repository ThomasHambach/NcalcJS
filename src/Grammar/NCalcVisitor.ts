// Generated from src/Grammar/NCalc.g4 by ANTLR 4.9.0-SNAPSHOT



import dayjs from "dayjs";
import { Identifier, BinaryExpression, BinaryExpressionType, NCalcFunction, LogicalExpressionVisitor, UnaryExpression, UnaryExpressionType, TernaryExpression, ValueExpression, ValueType, LogicalExpression } from "../NCalc/Domain";


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { NcalcExpressionContext } from "./NCalcParser";
import { LogicalExpressionContext } from "./NCalcParser";
import { ConditionalExpressionContext } from "./NCalcParser";
import { BooleanExpressionContext } from "./NCalcParser";
import { RelationalExpressionContext } from "./NCalcParser";
import { ShiftExpressionContext } from "./NCalcParser";
import { AdditiveExpressionContext } from "./NCalcParser";
import { MultiplicativeExpressionContext } from "./NCalcParser";
import { UnaryExpressionContext } from "./NCalcParser";
import { PrimaryExpressionContext } from "./NCalcParser";
import { ValueContext } from "./NCalcParser";
import { IdentifierContext } from "./NCalcParser";
import { ExpressionListContext } from "./NCalcParser";
import { ArgumentsContext } from "./NCalcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `NCalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface NCalcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `NCalcParser.ncalcExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNcalcExpression?: (ctx: NcalcExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.logicalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExpression?: (ctx: LogicalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `NCalcParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
}

