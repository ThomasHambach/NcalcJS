// Generated from src/Grammar/NCalc.g4 by ANTLR 4.9.0-SNAPSHOT


// using System;
// using System.Text;
// using System.Globalization;
// using NCalc.Domain;
	import {BinaryExpressionType} from "../NCalc/Domain/BinaryExpression"


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { NCalcListener } from "./NCalcListener";
import { NCalcVisitor } from "./NCalcVisitor";


export class NCalcParser extends Parser {
	public static readonly TRUE = 1;
	public static readonly FALSE = 2;
	public static readonly AND = 3;
	public static readonly OR = 4;
	public static readonly NOT = 5;
	public static readonly ID = 6;
	public static readonly INTEGER = 7;
	public static readonly FLOAT = 8;
	public static readonly STRING = 9;
	public static readonly DATETIME = 10;
	public static readonly NAME = 11;
	public static readonly EXPONENT = 12;
	public static readonly WS = 13;
	public static readonly RULE_identifier = 0;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TRUE", "FALSE", "AND", "OR", "NOT", "ID", "INTEGER", "FLOAT", 
		"STRING", "DATETIME", "NAME", "EXPONENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(NCalcParser._LITERAL_NAMES, NCalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return NCalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "NCalc.g4"; }

	// @Override
	public get ruleNames(): string[] { return NCalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return NCalcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}



		public BS: string = "\\";

		public ExtractString(text: string): string {
			let sb: string[] = [];
	        let startIndex = 1; // Skip initial quote
	        let slashIndex = -1;

	        const textencoder = new TextEncoder();
	        const decoder = new TextDecoder();

	        while ((slashIndex = sb.join().indexOf(this.BS, startIndex)) != -1)
	        {
	            let escapeType = sb[slashIndex + 1];
	            switch (escapeType)
	            {
	                case 'u':
	                    let hcode = [sb[slashIndex + 4], sb[slashIndex + 5]].join();
	                    let lcode = [sb[slashIndex + 2], sb[slashIndex + 3]].join();

	                    const hBytes = new Uint16Array(hcode.length);
	                    const lBytes = new Uint16Array(lcode.length);

	                    const merged = new Uint16Array(hBytes.length + lBytes.length);
	                    merged.set(hBytes);
	                    merged.set(lBytes, hBytes.length);

	                    const unicodeChar = decoder.decode(merged);

	                    // let unicodeChar = Encoding.Unicode.GetChars(new byte[] { System.Convert.ToByte(hcode, 16), System.Convert.ToByte(lcode, 16) })[0];
	                    sb.splice(slashIndex, 6, unicodeChar);
	                    // sb.Insert(slashIndex, unicodeChar);
	                    break;
	                case 'n': sb.splice(slashIndex, 2, '\n'); break;
	                case 'r': sb.splice(slashIndex, 2, '\r'); break;
	                case 't': sb.splice(slashIndex, 2, '\t'); break;
	                case '\'': sb.splice(slashIndex, 2, '\''); break;
	                case '\\': sb.splice(slashIndex, 2, '\\'); break;
	                default: throw new Error("Unvalid escape sequence: \\" + escapeType);
	            }

	            startIndex = slashIndex + 1;

	        }

	        sb.splice(0, 1);
	        sb.splice(sb.length - 1, 1);

	        return sb.join();
		}

		public Errors: any[] = [];
		public GetExpression(): any { return (ncalcExpression() as any).value };


	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(NCalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, NCalcParser.RULE_identifier);
		try {
			this.state = 6;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NCalcParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2;
				_localctx._ID = this.match(NCalcParser.ID);
				 _localctx.value =  new Identifier((_localctx._ID != null ? _localctx._ID.text : undefined)); 
				}
				break;
			case NCalcParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 4;
				_localctx._NAME = this.match(NCalcParser.NAME);
				 _localctx.value =  new Identifier((_localctx._NAME != null ? _localctx._NAME.text : undefined).Substring(1, (_localctx._NAME != null ? _localctx._NAME.text : undefined).Length-2)); 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0F\v\x04\x02" +
		"\t\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\t\n\x02\x03\x02\x02\x02" +
		"\x02\x03\x02\x02\x02\x02\x02\n\x02\b\x03\x02\x02\x02\x04\x05\x07\b\x02" +
		"\x02\x05\t\b\x02\x01\x02\x06\x07\x07\r\x02\x02\x07\t\b\x02\x01\x02\b\x04" +
		"\x03\x02\x02\x02\b\x06\x03\x02\x02\x02\t\x03\x03\x02\x02\x02\x03\b";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NCalcParser.__ATN) {
			NCalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(NCalcParser._serializedATN));
		}

		return NCalcParser.__ATN;
	}

}

export class IdentifierContext extends ParserRuleContext {
	public value: Identifier;
	public _ID!: Token;
	public _NAME!: Token;
	public ID(): TerminalNode | undefined { return this.tryGetToken(NCalcParser.ID, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(NCalcParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_identifier; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


