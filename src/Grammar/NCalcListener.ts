// Generated from src/Grammar/NCalc.g4 by ANTLR 4.9.0-SNAPSHOT


// using System;
// using System.Text;
// using System.Globalization;
// using NCalc.Domain;
	import {BinaryExpressionType} from "../NCalc/Domain/BinaryExpression"


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IdentifierContext } from "./NCalcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `NCalcParser`.
 */
export interface NCalcListener extends ParseTreeListener {
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
}

