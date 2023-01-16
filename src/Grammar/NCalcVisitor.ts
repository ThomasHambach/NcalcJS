// Generated from src/Grammar/NCalc.g4 by ANTLR 4.9.0-SNAPSHOT


// using System;
// using System.Text;
// using System.Globalization;
// using NCalc.Domain;
	import {BinaryExpressionType} from "../NCalc/Domain/BinaryExpression"


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IdentifierContext } from "./NCalcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `NCalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface NCalcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `NCalcParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

