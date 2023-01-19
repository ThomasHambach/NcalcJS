// Generated from src/Grammar/NCalc.g4 by ANTLR 4.9.0-SNAPSHOT



import dayjs from "dayjs";
import { Identifier, BinaryExpression, BinaryExpressionType, NCalcFunction, LogicalExpressionVisitor, UnaryExpression, UnaryExpressionType, TernaryExpression, ValueExpression, ValueType, LogicalExpression } from "@/NCalc/Domain";


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
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly NOT = 29;
	public static readonly TRUE = 30;
	public static readonly FALSE = 31;
	public static readonly AND = 32;
	public static readonly OR = 33;
	public static readonly ID = 34;
	public static readonly FLOAT = 35;
	public static readonly INTEGER = 36;
	public static readonly STRING = 37;
	public static readonly DATETIME = 38;
	public static readonly NAME = 39;
	public static readonly EXPONENT = 40;
	public static readonly WS = 41;
	public static readonly RULE_ncalcExpression = 0;
	public static readonly RULE_logicalExpression = 1;
	public static readonly RULE_conditionalExpression = 2;
	public static readonly RULE_booleanExpression = 3;
	public static readonly RULE_relationalExpression = 4;
	public static readonly RULE_shiftExpression = 5;
	public static readonly RULE_additiveExpression = 6;
	public static readonly RULE_multiplicativeExpression = 7;
	public static readonly RULE_unaryExpression = 8;
	public static readonly RULE_exponentialExpression = 9;
	public static readonly RULE_primaryExpression = 10;
	public static readonly RULE_value = 11;
	public static readonly RULE_identifier = 12;
	public static readonly RULE_expressionList = 13;
	public static readonly RULE_arguments = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"ncalcExpression", "logicalExpression", "conditionalExpression", "booleanExpression", 
		"relationalExpression", "shiftExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "exponentialExpression", "primaryExpression", "value", 
		"identifier", "expressionList", "arguments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'?'", "':'", "'&&'", "'||'", "'&'", "'|'", "'^'", "'=='", 
		"'='", "'!='", "'<>'", "'<'", "'<='", "'>'", "'>='", "'<<'", "'>>'", "'+'", 
		"'-'", "'*'", "'/'", "'%'", "'!'", "'~'", "'**'", "'('", "')'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "NOT", "TRUE", "FALSE", "AND", "OR", "ID", "FLOAT", "INTEGER", 
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
			let sb: string[] = text.split(/(?!$)/u);
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

	        return sb.join('');
		}

		public Errors: any[] = [];
		public GetExpression(): any { return (this.ncalcExpression().val as any) };


	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(NCalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public ncalcExpression(): NcalcExpressionContext {
		let _localctx: NcalcExpressionContext = new NcalcExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, NCalcParser.RULE_ncalcExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			_localctx._logicalExpression = this.logicalExpression();
			this.state = 31;
			this.match(NCalcParser.EOF);
			_localctx.val =  _localctx._logicalExpression.val; 
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
	// @RuleVersion(0)
	public logicalExpression(): LogicalExpressionContext {
		let _localctx: LogicalExpressionContext = new LogicalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, NCalcParser.RULE_logicalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			_localctx._left = this.conditionalExpression();
			 _localctx.val =  _localctx._left.val; 
			this.state = 66;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === NCalcParser.WS) {
					{
					{
					this.state = 36;
					this.match(NCalcParser.WS);
					}
					}
					this.state = 41;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 42;
				this.match(NCalcParser.T__0);
				this.state = 46;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 43;
						this.match(NCalcParser.WS);
						}
						}
					}
					this.state = 48;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				this.state = 49;
				_localctx._middle = this.conditionalExpression();
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === NCalcParser.WS) {
					{
					{
					this.state = 50;
					this.match(NCalcParser.WS);
					}
					}
					this.state = 55;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 56;
				this.match(NCalcParser.T__1);
				this.state = 60;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 57;
						this.match(NCalcParser.WS);
						}
						}
					}
					this.state = 62;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				this.state = 63;
				_localctx._right = this.conditionalExpression();
				 _localctx.val =  new TernaryExpression(_localctx._left.val, _localctx._middle.val, _localctx._right.val); 
							
				}
				break;
			}
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
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, NCalcParser.RULE_conditionalExpression);

		let type = BinaryExpressionType.Unknown;

		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			_localctx._left = this.booleanExpression();
			 _localctx.val =  _localctx._left.val; 
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (NCalcParser.T__2 - 3)) | (1 << (NCalcParser.T__3 - 3)) | (1 << (NCalcParser.AND - 3)) | (1 << (NCalcParser.OR - 3)))) !== 0)) {
				{
				{
				this.state = 74;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NCalcParser.T__2:
				case NCalcParser.AND:
					{
					this.state = 70;
					_la = this._input.LA(1);
					if (!(_la === NCalcParser.T__2 || _la === NCalcParser.AND)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					 type = BinaryExpressionType.And; 
					}
					break;
				case NCalcParser.T__3:
				case NCalcParser.OR:
					{
					this.state = 72;
					_la = this._input.LA(1);
					if (!(_la === NCalcParser.T__3 || _la === NCalcParser.OR)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					 type = BinaryExpressionType.Or; 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 76;
				_localctx._right = this.booleanExpression();
				 _localctx.val =  new BinaryExpression(type, _localctx.val, _localctx._right.val); 
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public booleanExpression(): BooleanExpressionContext {
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, NCalcParser.RULE_booleanExpression);

		let type = BinaryExpressionType.Unknown;

		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			_localctx._left = this.relationalExpression();
			 _localctx.val =  _localctx._left.val; 
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NCalcParser.T__4) | (1 << NCalcParser.T__5) | (1 << NCalcParser.T__6))) !== 0)) {
				{
				{
				this.state = 92;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NCalcParser.T__4:
					{
					this.state = 86;
					this.match(NCalcParser.T__4);
					 type = BinaryExpressionType.BitwiseAnd; 
					}
					break;
				case NCalcParser.T__5:
					{
					this.state = 88;
					this.match(NCalcParser.T__5);
					 type = BinaryExpressionType.BitwiseOr; 
					}
					break;
				case NCalcParser.T__6:
					{
					this.state = 90;
					this.match(NCalcParser.T__6);
					 type = BinaryExpressionType.BitwiseXOr; 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 94;
				_localctx._right = this.relationalExpression();
				 _localctx.val =  new BinaryExpression(type, _localctx.val, _localctx._right.val); 
				}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, NCalcParser.RULE_relationalExpression);

		let type = BinaryExpressionType.Unknown;

		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			_localctx._left = this.shiftExpression();
			 _localctx.val =  _localctx._left.val; 
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NCalcParser.T__7) | (1 << NCalcParser.T__8) | (1 << NCalcParser.T__9) | (1 << NCalcParser.T__10) | (1 << NCalcParser.T__11) | (1 << NCalcParser.T__12) | (1 << NCalcParser.T__13) | (1 << NCalcParser.T__14))) !== 0)) {
				{
				{
				this.state = 116;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NCalcParser.T__7:
				case NCalcParser.T__8:
					{
					this.state = 104;
					_la = this._input.LA(1);
					if (!(_la === NCalcParser.T__7 || _la === NCalcParser.T__8)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					 type = BinaryExpressionType.Equal; 
					}
					break;
				case NCalcParser.T__9:
				case NCalcParser.T__10:
					{
					this.state = 106;
					_la = this._input.LA(1);
					if (!(_la === NCalcParser.T__9 || _la === NCalcParser.T__10)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					 type = BinaryExpressionType.NotEqual; 
					}
					break;
				case NCalcParser.T__11:
					{
					this.state = 108;
					this.match(NCalcParser.T__11);
					 type = BinaryExpressionType.Lesser; 
					}
					break;
				case NCalcParser.T__12:
					{
					this.state = 110;
					this.match(NCalcParser.T__12);
					 type = BinaryExpressionType.LesserOrEqual; 
					}
					break;
				case NCalcParser.T__13:
					{
					this.state = 112;
					this.match(NCalcParser.T__13);
					 type = BinaryExpressionType.Greater; 
					}
					break;
				case NCalcParser.T__14:
					{
					this.state = 114;
					this.match(NCalcParser.T__14);
					 type = BinaryExpressionType.GreaterOrEqual; 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 118;
				_localctx._right = this.shiftExpression();
				 _localctx.val =  new BinaryExpression(type, _localctx.val, _localctx._right.val); 
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public shiftExpression(): ShiftExpressionContext {
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, NCalcParser.RULE_shiftExpression);

		let type = BinaryExpressionType.Unknown;

		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			_localctx._left = this.additiveExpression();
			 _localctx.val =  _localctx._left.val; 
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NCalcParser.T__15 || _la === NCalcParser.T__16) {
				{
				{
				this.state = 132;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NCalcParser.T__15:
					{
					this.state = 128;
					this.match(NCalcParser.T__15);
					 type = BinaryExpressionType.LeftShift; 
					}
					break;
				case NCalcParser.T__16:
					{
					this.state = 130;
					this.match(NCalcParser.T__16);
					 type = BinaryExpressionType.RightShift; 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 134;
				_localctx._right = this.additiveExpression();
				 _localctx.val =  new BinaryExpression(type, _localctx.val, _localctx._right.val); 
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, NCalcParser.RULE_additiveExpression);

		let type = BinaryExpressionType.Unknown;

		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			_localctx._left = this.multiplicativeExpression();
			 _localctx.val =  _localctx._left.val; 
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NCalcParser.T__17 || _la === NCalcParser.T__18) {
				{
				{
				this.state = 148;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NCalcParser.T__17:
					{
					this.state = 144;
					this.match(NCalcParser.T__17);
					 type = BinaryExpressionType.Plus; 
					}
					break;
				case NCalcParser.T__18:
					{
					this.state = 146;
					this.match(NCalcParser.T__18);
					 type = BinaryExpressionType.Minus; 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 150;
				_localctx._right = this.multiplicativeExpression();
				 _localctx.val =  new BinaryExpression(type, _localctx.val, _localctx._right.val); 
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, NCalcParser.RULE_multiplicativeExpression);

		let type = BinaryExpressionType.Unknown;

		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			_localctx._left = this.unaryExpression();
			 _localctx.val =  _localctx._left.val; 
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NCalcParser.T__19) | (1 << NCalcParser.T__20) | (1 << NCalcParser.T__21))) !== 0)) {
				{
				{
				this.state = 166;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case NCalcParser.T__19:
					{
					this.state = 160;
					this.match(NCalcParser.T__19);
					 type = BinaryExpressionType.Times; 
					}
					break;
				case NCalcParser.T__20:
					{
					this.state = 162;
					this.match(NCalcParser.T__20);
					 type = BinaryExpressionType.Div; 
					}
					break;
				case NCalcParser.T__21:
					{
					this.state = 164;
					this.match(NCalcParser.T__21);
					 type = BinaryExpressionType.Modulo; 
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 168;
				_localctx._right = this.unaryExpression();
				 _localctx.val =  new BinaryExpression(type, _localctx.val, _localctx._right.val); 
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, NCalcParser.RULE_unaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NCalcParser.WS) {
				{
				{
				this.state = 176;
				this.match(NCalcParser.WS);
				}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NCalcParser.T__25:
			case NCalcParser.TRUE:
			case NCalcParser.FALSE:
			case NCalcParser.ID:
			case NCalcParser.FLOAT:
			case NCalcParser.INTEGER:
			case NCalcParser.STRING:
			case NCalcParser.DATETIME:
			case NCalcParser.NAME:
				{
				this.state = 182;
				_localctx._exponentialExpression = this.exponentialExpression();
				 _localctx.val =  _localctx._exponentialExpression.val; 
				}
				break;
			case NCalcParser.T__22:
			case NCalcParser.NOT:
				{
				this.state = 185;
				_la = this._input.LA(1);
				if (!(_la === NCalcParser.T__22 || _la === NCalcParser.NOT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 186;
				_localctx._exponentialExpression = this.exponentialExpression();
				 _localctx.val =  new UnaryExpression(UnaryExpressionType.Not, _localctx._exponentialExpression.val); 
							
				}
				break;
			case NCalcParser.T__23:
				{
				{
				this.state = 189;
				this.match(NCalcParser.T__23);
				}
				this.state = 190;
				_localctx._exponentialExpression = this.exponentialExpression();
				 _localctx.val =  new UnaryExpression(UnaryExpressionType.BitwiseNot, _localctx._exponentialExpression.val); 
							
				}
				break;
			case NCalcParser.T__18:
				{
				this.state = 193;
				this.match(NCalcParser.T__18);
				this.state = 194;
				_localctx._exponentialExpression = this.exponentialExpression();
				 _localctx.val =  new UnaryExpression(UnaryExpressionType.Negate, _localctx._exponentialExpression.val); 
							
				}
				break;
			case NCalcParser.T__17:
				{
				this.state = 197;
				this.match(NCalcParser.T__17);
				this.state = 198;
				_localctx._exponentialExpression = this.exponentialExpression();
				 _localctx.val =  new UnaryExpression(UnaryExpressionType.Positive, _localctx._exponentialExpression.val); 
					
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 206;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 203;
					this.match(NCalcParser.WS);
					}
					}
				}
				this.state = 208;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
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
	// @RuleVersion(0)
	public exponentialExpression(): ExponentialExpressionContext {
		let _localctx: ExponentialExpressionContext = new ExponentialExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, NCalcParser.RULE_exponentialExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			_localctx._left = this.primaryExpression();
			 _localctx.val =  _localctx._left.val; 
			this.state = 217;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 211;
					this.match(NCalcParser.T__24);
					this.state = 212;
					_localctx._right = this.unaryExpression();
					 _localctx.val =  new BinaryExpression(BinaryExpressionType.Exponentiation, _localctx.val, _localctx._right.val); 
								
					}
					}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
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
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, NCalcParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 235;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NCalcParser.T__25:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 220;
				this.match(NCalcParser.T__25);
				this.state = 221;
				_localctx._logicalExpression = this.logicalExpression();
				this.state = 222;
				this.match(NCalcParser.T__26);
				 _localctx.val =  _localctx._logicalExpression.val; 
				}
				break;
			case NCalcParser.TRUE:
			case NCalcParser.FALSE:
			case NCalcParser.FLOAT:
			case NCalcParser.INTEGER:
			case NCalcParser.STRING:
			case NCalcParser.DATETIME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 225;
				_localctx._expr = this.value();
				 _localctx.val =  _localctx._expr.val; 
				}
				break;
			case NCalcParser.ID:
			case NCalcParser.NAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 228;
				_localctx._identifier = this.identifier();
				_localctx.val =  _localctx._identifier.val; 
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === NCalcParser.T__25) {
					{
					this.state = 230;
					_localctx._arguments = this.arguments();
					_localctx.val =  new NCalcFunction(_localctx._identifier.val, (_localctx._arguments.val)); 
					}
				}

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
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, NCalcParser.RULE_value);
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NCalcParser.FLOAT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				_localctx._FLOAT = this.match(NCalcParser.FLOAT);
				 _localctx.val =  new ValueExpression(parseFloat((_localctx._FLOAT != null ? _localctx._FLOAT.text : undefined)), ValueType.Float); 
				}
				break;
			case NCalcParser.INTEGER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 239;
				_localctx._INTEGER = this.match(NCalcParser.INTEGER);
				 try { _localctx.val =  new ValueExpression(parseInt((_localctx._INTEGER != null ? _localctx._INTEGER.text : undefined)), ValueType.Integer); } catch(e) { _localctx.val =  new ValueExpression(parseFloat((_localctx._INTEGER != null ? _localctx._INTEGER.text : undefined)), ValueType.Float); } 
						
				}
				break;
			case NCalcParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 241;
				_localctx._STRING = this.match(NCalcParser.STRING);
				 _localctx.val =  new ValueExpression(this.ExtractString((_localctx._STRING != null ? _localctx._STRING.text : undefined)), ValueType.String); 
				}
				break;
			case NCalcParser.DATETIME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 243;
				_localctx._DATETIME = this.match(NCalcParser.DATETIME);
				 _localctx.val =  new ValueExpression(dayjs((_localctx._DATETIME != null ? _localctx._DATETIME.text : undefined).substring(1, (_localctx._DATETIME != null ? _localctx._DATETIME.text : undefined).length-2)).toString(), ValueType.DateTime); 
						
				}
				break;
			case NCalcParser.TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 245;
				this.match(NCalcParser.TRUE);
				 _localctx.val =  new ValueExpression(true, ValueType.Boolean); 
				}
				break;
			case NCalcParser.FALSE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 247;
				this.match(NCalcParser.FALSE);
				 _localctx.val =  new ValueExpression(false, ValueType.Float); 
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
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, NCalcParser.RULE_identifier);
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NCalcParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 251;
				_localctx._ID = this.match(NCalcParser.ID);
				 _localctx.val =  new Identifier((_localctx._ID != null ? _localctx._ID.text : undefined)); 
				}
				break;
			case NCalcParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 253;
				_localctx._NAME = this.match(NCalcParser.NAME);
				 _localctx.val =  new Identifier((_localctx._NAME != null ? _localctx._NAME.text : undefined).substring(1, (_localctx._NAME != null ? _localctx._NAME.text : undefined).length-1)); 
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
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, NCalcParser.RULE_expressionList);

		let expressions = [];

		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			_localctx._first = this.logicalExpression();
			expressions.push(_localctx._first.val);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NCalcParser.T__27 || _la === NCalcParser.WS) {
				{
				{
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === NCalcParser.WS) {
					{
					{
					this.state = 259;
					this.match(NCalcParser.WS);
					}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 265;
				this.match(NCalcParser.T__27);
				this.state = 269;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 266;
						this.match(NCalcParser.WS);
						}
						}
					}
					this.state = 271;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				this.state = 272;
				_localctx._follow = this.logicalExpression();
				expressions.push(_localctx._follow.val);
				}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			 _localctx.val =  expressions; 
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
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, NCalcParser.RULE_arguments);

		_localctx.val =  [];

		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(NCalcParser.T__25);
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (NCalcParser.T__17 - 18)) | (1 << (NCalcParser.T__18 - 18)) | (1 << (NCalcParser.T__22 - 18)) | (1 << (NCalcParser.T__23 - 18)) | (1 << (NCalcParser.T__25 - 18)) | (1 << (NCalcParser.NOT - 18)) | (1 << (NCalcParser.TRUE - 18)) | (1 << (NCalcParser.FALSE - 18)) | (1 << (NCalcParser.ID - 18)) | (1 << (NCalcParser.FLOAT - 18)) | (1 << (NCalcParser.INTEGER - 18)) | (1 << (NCalcParser.STRING - 18)) | (1 << (NCalcParser.DATETIME - 18)) | (1 << (NCalcParser.NAME - 18)) | (1 << (NCalcParser.WS - 18)))) !== 0)) {
				{
				this.state = 283;
				_localctx._expressionList = this.expressionList();
				_localctx.val =  _localctx._expressionList.val;
				}
			}

			this.state = 288;
			this.match(NCalcParser.T__26);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\u0125\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x07\x03(\n\x03\f\x03\x0E\x03+\v\x03\x03\x03\x03" +
		"\x03\x07\x03/\n\x03\f\x03\x0E\x032\v\x03\x03\x03\x03\x03\x07\x036\n\x03" +
		"\f\x03\x0E\x039\v\x03\x03\x03\x03\x03\x07\x03=\n\x03\f\x03\x0E\x03@\v" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03E\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04M\n\x04\x03\x04\x03\x04\x03\x04\x07\x04R\n" +
		"\x04\f\x04\x0E\x04U\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05_\n\x05\x03\x05\x03\x05\x03\x05\x07\x05d\n" +
		"\x05\f\x05\x0E\x05g\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06w\n\x06\x03\x06\x03\x06\x03\x06\x07\x06|\n\x06\f\x06\x0E\x06\x7F\v" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x87\n\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07\x8C\n\x07\f\x07\x0E\x07\x8F\v\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x97\n\b\x03\b\x03\b\x03\b\x07\b" +
		"\x9C\n\b\f\b\x0E\b\x9F\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\xA9\n\t\x03\t\x03\t\x03\t\x07\t\xAE\n\t\f\t\x0E\t\xB1\v\t\x03" +
		"\n\x07\n\xB4\n\n\f\n\x0E\n\xB7\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x05\n\xCC\n\n\x03\n\x07\n\xCF\n\n\f\n\x0E\n\xD2\v\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\xDA\n\v\f\v\x0E\v\xDD\v\v\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\xEC\n\f\x05\f\xEE\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r\xFC\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u0102\n\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0107\n\x0F\f\x0F" +
		"\x0E\x0F\u010A\v\x0F\x03\x0F\x03\x0F\x07\x0F\u010E\n\x0F\f\x0F\x0E\x0F" +
		"\u0111\v\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0116\n\x0F\f\x0F\x0E\x0F" +
		"\u0119\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0121" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02\x02\x07\x04\x02\x05\x05\"\"\x04\x02\x06\x06##\x03" +
		"\x02\n\v\x03\x02\f\r\x04\x02\x19\x19\x1F\x1F\x02\u0140\x02 \x03\x02\x02" +
		"\x02\x04$\x03\x02\x02\x02\x06F\x03\x02\x02\x02\bV\x03\x02\x02\x02\nh\x03" +
		"\x02\x02\x02\f\x80\x03\x02\x02\x02\x0E\x90\x03\x02\x02\x02\x10\xA0\x03" +
		"\x02\x02\x02\x12\xB5\x03\x02\x02\x02\x14\xD3\x03\x02\x02\x02\x16\xED\x03" +
		"\x02\x02\x02\x18\xFB\x03\x02\x02\x02\x1A\u0101\x03\x02\x02\x02\x1C\u0103" +
		"\x03\x02\x02\x02\x1E\u011C\x03\x02\x02\x02 !\x05\x04\x03\x02!\"\x07\x02" +
		"\x02\x03\"#\b\x02\x01\x02#\x03\x03\x02\x02\x02$%\x05\x06\x04\x02%D\b\x03" +
		"\x01\x02&(\x07+\x02\x02\'&\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02" +
		"\x02\x02)*\x03\x02\x02\x02*,\x03\x02\x02\x02+)\x03\x02\x02\x02,0\x07\x03" +
		"\x02\x02-/\x07+\x02\x02.-\x03\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02" +
		"\x02\x0201\x03\x02\x02\x0213\x03\x02\x02\x0220\x03\x02\x02\x0237\x05\x06" +
		"\x04\x0246\x07+\x02\x0254\x03\x02\x02\x0269\x03\x02\x02\x0275\x03\x02" +
		"\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02\x02\x02:>\x07\x04" +
		"\x02\x02;=\x07+\x02\x02<;\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03\x02" +
		"\x02\x02>?\x03\x02\x02\x02?A\x03\x02\x02\x02@>\x03\x02\x02\x02AB\x05\x06" +
		"\x04\x02BC\b\x03\x01\x02CE\x03\x02\x02\x02D)\x03\x02\x02\x02DE\x03\x02" +
		"\x02\x02E\x05\x03\x02\x02\x02FG\x05\b\x05\x02GS\b\x04\x01\x02HI\t\x02" +
		"\x02\x02IM\b\x04\x01\x02JK\t\x03\x02\x02KM\b\x04\x01\x02LH\x03\x02\x02" +
		"\x02LJ\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x05\b\x05\x02OP\b\x04\x01\x02" +
		"PR\x03\x02\x02\x02QL\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02T\x07\x03\x02\x02\x02US\x03\x02\x02\x02VW\x05\n\x06" +
		"\x02We\b\x05\x01\x02XY\x07\x07\x02\x02Y_\b\x05\x01\x02Z[\x07\b\x02\x02" +
		"[_\b\x05\x01\x02\\]\x07\t\x02\x02]_\b\x05\x01\x02^X\x03\x02\x02\x02^Z" +
		"\x03\x02\x02\x02^\\\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x05\n\x06\x02" +
		"ab\b\x05\x01\x02bd\x03\x02\x02\x02c^\x03\x02\x02\x02dg\x03\x02\x02\x02" +
		"ec\x03\x02\x02\x02ef\x03\x02\x02\x02f\t\x03\x02\x02\x02ge\x03\x02\x02" +
		"\x02hi\x05\f\x07\x02i}\b\x06\x01\x02jk\t\x04\x02\x02kw\b\x06\x01\x02l" +
		"m\t\x05\x02\x02mw\b\x06\x01\x02no\x07\x0E\x02\x02ow\b\x06\x01\x02pq\x07" +
		"\x0F\x02\x02qw\b\x06\x01\x02rs\x07\x10\x02\x02sw\b\x06\x01\x02tu\x07\x11" +
		"\x02\x02uw\b\x06\x01\x02vj\x03\x02\x02\x02vl\x03\x02\x02\x02vn\x03\x02" +
		"\x02\x02vp\x03\x02\x02\x02vr\x03\x02\x02\x02vt\x03\x02\x02\x02wx\x03\x02" +
		"\x02\x02xy\x05\f\x07\x02yz\b\x06\x01\x02z|\x03\x02\x02\x02{v\x03\x02\x02" +
		"\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\v\x03\x02" +
		"\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x05\x0E\b\x02\x81\x8D\b\x07\x01" +
		"\x02\x82\x83\x07\x12\x02\x02\x83\x87\b\x07\x01\x02\x84\x85\x07\x13\x02" +
		"\x02\x85\x87\b\x07\x01\x02\x86\x82\x03\x02\x02\x02\x86\x84\x03\x02\x02" +
		"\x02\x87\x88\x03\x02\x02\x02\x88\x89\x05\x0E\b\x02\x89\x8A\b\x07\x01\x02" +
		"\x8A\x8C\x03\x02\x02\x02\x8B\x86\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02" +
		"\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\r\x03\x02\x02\x02" +
		"\x8F\x8D\x03\x02\x02\x02\x90\x91\x05\x10\t\x02\x91\x9D\b\b\x01\x02\x92" +
		"\x93\x07\x14\x02\x02\x93\x97\b\b\x01\x02\x94\x95\x07\x15\x02\x02\x95\x97" +
		"\b\b\x01\x02\x96\x92\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x98\x03" +
		"\x02\x02\x02\x98\x99\x05\x10\t\x02\x99\x9A\b\b\x01\x02\x9A\x9C\x03\x02" +
		"\x02\x02\x9B\x96\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02" +
		"\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x0F\x03\x02\x02\x02\x9F\x9D\x03\x02" +
		"\x02\x02\xA0\xA1\x05\x12\n\x02\xA1\xAF\b\t\x01\x02\xA2\xA3\x07\x16\x02" +
		"\x02\xA3\xA9\b\t\x01\x02\xA4\xA5\x07\x17\x02\x02\xA5\xA9\b\t\x01\x02\xA6" +
		"\xA7\x07\x18\x02\x02\xA7\xA9\b\t\x01\x02\xA8\xA2\x03\x02\x02\x02\xA8\xA4" +
		"\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB" +
		"\x05\x12\n\x02\xAB\xAC\b\t\x01\x02\xAC\xAE\x03\x02\x02\x02\xAD\xA8\x03" +
		"\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03" +
		"\x02\x02\x02\xB0\x11\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB4\x07" +
		"+\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03" +
		"\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xCB\x03\x02\x02\x02\xB7\xB5\x03" +
		"\x02\x02\x02\xB8\xB9\x05\x14\v\x02\xB9\xBA\b\n\x01\x02\xBA\xCC\x03\x02" +
		"\x02\x02\xBB\xBC\t\x06\x02\x02\xBC\xBD\x05\x14\v\x02\xBD\xBE\b\n\x01\x02" +
		"\xBE\xCC\x03\x02\x02\x02\xBF\xC0\x07\x1A\x02\x02\xC0\xC1\x05\x14\v\x02" +
		"\xC1\xC2\b\n\x01\x02\xC2\xCC\x03\x02\x02\x02\xC3\xC4\x07\x15\x02\x02\xC4" +
		"\xC5\x05\x14\v\x02\xC5\xC6\b\n\x01\x02\xC6\xCC\x03\x02\x02\x02\xC7\xC8" +
		"\x07\x14\x02\x02\xC8\xC9\x05\x14\v\x02\xC9\xCA\b\n\x01\x02\xCA\xCC\x03" +
		"\x02\x02\x02\xCB\xB8\x03\x02\x02\x02\xCB\xBB\x03\x02\x02\x02\xCB\xBF\x03" +
		"\x02\x02\x02\xCB\xC3\x03\x02\x02\x02\xCB\xC7\x03\x02\x02\x02\xCC\xD0\x03" +
		"\x02\x02\x02\xCD\xCF\x07+\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF\xD2\x03" +
		"\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\x13\x03" +
		"\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD4\x05\x16\f\x02\xD4\xDB\b\v" +
		"\x01\x02\xD5\xD6\x07\x1B\x02\x02\xD6\xD7\x05\x12\n\x02\xD7\xD8\b\v\x01" +
		"\x02\xD8\xDA\x03\x02\x02\x02\xD9\xD5\x03\x02\x02\x02\xDA\xDD\x03\x02\x02" +
		"\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\x15\x03\x02\x02" +
		"\x02\xDD\xDB\x03\x02\x02\x02\xDE\xDF\x07\x1C\x02\x02\xDF\xE0\x05\x04\x03" +
		"\x02\xE0\xE1\x07\x1D\x02\x02\xE1\xE2\b\f\x01\x02\xE2\xEE\x03\x02\x02\x02" +
		"\xE3\xE4\x05\x18\r\x02\xE4\xE5\b\f\x01\x02\xE5\xEE\x03\x02\x02\x02\xE6" +
		"\xE7\x05\x1A\x0E\x02\xE7\xEB\b\f\x01\x02\xE8\xE9\x05\x1E\x10\x02\xE9\xEA" +
		"\b\f\x01\x02\xEA\xEC\x03\x02\x02\x02\xEB\xE8\x03\x02\x02\x02\xEB\xEC\x03" +
		"\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xDE\x03\x02\x02\x02\xED\xE3\x03" +
		"\x02\x02\x02\xED\xE6\x03\x02\x02\x02\xEE\x17\x03\x02\x02\x02\xEF\xF0\x07" +
		"%\x02\x02\xF0\xFC\b\r\x01\x02\xF1\xF2\x07&\x02\x02\xF2\xFC\b\r\x01\x02" +
		"\xF3\xF4\x07\'\x02\x02\xF4\xFC\b\r\x01\x02\xF5\xF6\x07(\x02\x02\xF6\xFC" +
		"\b\r\x01\x02\xF7\xF8\x07 \x02\x02\xF8\xFC\b\r\x01\x02\xF9\xFA\x07!\x02" +
		"\x02\xFA\xFC\b\r\x01\x02\xFB\xEF\x03\x02\x02\x02\xFB\xF1\x03\x02\x02\x02" +
		"\xFB\xF3\x03\x02\x02\x02\xFB\xF5\x03\x02\x02\x02\xFB\xF7\x03\x02\x02\x02" +
		"\xFB\xF9\x03\x02\x02\x02\xFC\x19\x03\x02\x02\x02\xFD\xFE\x07$\x02\x02" +
		"\xFE\u0102\b\x0E\x01\x02\xFF\u0100\x07)\x02\x02\u0100\u0102\b\x0E\x01" +
		"\x02\u0101\xFD\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\x1B\x03" +
		"\x02\x02\x02\u0103\u0104\x05\x04\x03\x02\u0104\u0117\b\x0F\x01\x02\u0105" +
		"\u0107\x07+\x02\x02\u0106\u0105\x03\x02\x02\x02\u0107\u010A\x03\x02\x02" +
		"\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B" +
		"\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010F\x07\x1E\x02\x02" +
		"\u010C\u010E\x07+\x02\x02\u010D\u010C\x03\x02\x02\x02\u010E\u0111\x03" +
		"\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
		"\u0112\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0112\u0113\x05\x04" +
		"\x03\x02\u0113\u0114\b\x0F\x01\x02\u0114\u0116\x03\x02\x02\x02\u0115\u0108" +
		"\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02" +
		"\u0117\u0118\x03\x02\x02\x02\u0118\u011A\x03\x02\x02\x02\u0119\u0117\x03" +
		"\x02\x02\x02\u011A\u011B\b\x0F\x01\x02\u011B\x1D\x03\x02\x02\x02\u011C" +
		"\u0120\x07\x1C\x02\x02\u011D\u011E\x05\x1C\x0F\x02\u011E\u011F\b\x10\x01" +
		"\x02\u011F\u0121\x03\x02\x02\x02\u0120\u011D\x03\x02\x02\x02\u0120\u0121" +
		"\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x07\x1D\x02\x02" +
		"\u0123\x1F\x03\x02\x02\x02\x1F)07>DLS^ev}\x86\x8D\x96\x9D\xA8\xAF\xB5" +
		"\xCB\xD0\xDB\xEB\xED\xFB\u0101\u0108\u010F\u0117\u0120";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NCalcParser.__ATN) {
			NCalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(NCalcParser._serializedATN));
		}

		return NCalcParser.__ATN;
	}

}

export class NcalcExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _logicalExpression!: LogicalExpressionContext;
	public logicalExpression(): LogicalExpressionContext {
		return this.getRuleContext(0, LogicalExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(NCalcParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_ncalcExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterNcalcExpression) {
			listener.enterNcalcExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitNcalcExpression) {
			listener.exitNcalcExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitNcalcExpression) {
			return visitor.visitNcalcExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _left!: ConditionalExpressionContext;
	public _middle!: ConditionalExpressionContext;
	public _right!: ConditionalExpressionContext;
	public conditionalExpression(): ConditionalExpressionContext[];
	public conditionalExpression(i: number): ConditionalExpressionContext;
	public conditionalExpression(i?: number): ConditionalExpressionContext | ConditionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalExpressionContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NCalcParser.WS);
		} else {
			return this.getToken(NCalcParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_logicalExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterLogicalExpression) {
			listener.enterLogicalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitLogicalExpression) {
			listener.exitLogicalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitLogicalExpression) {
			return visitor.visitLogicalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _left!: BooleanExpressionContext;
	public _right!: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NCalcParser.AND);
		} else {
			return this.getToken(NCalcParser.AND, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NCalcParser.OR);
		} else {
			return this.getToken(NCalcParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _left!: RelationalExpressionContext;
	public _right!: RelationalExpressionContext;
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_booleanExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterBooleanExpression) {
			listener.enterBooleanExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitBooleanExpression) {
			listener.exitBooleanExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitBooleanExpression) {
			return visitor.visitBooleanExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _left!: ShiftExpressionContext;
	public _right!: ShiftExpressionContext;
	public shiftExpression(): ShiftExpressionContext[];
	public shiftExpression(i: number): ShiftExpressionContext;
	public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ShiftExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _left!: AdditiveExpressionContext;
	public _right!: AdditiveExpressionContext;
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _left!: MultiplicativeExpressionContext;
	public _right!: MultiplicativeExpressionContext;
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _left!: UnaryExpressionContext;
	public _right!: UnaryExpressionContext;
	public unaryExpression(): UnaryExpressionContext[];
	public unaryExpression(i: number): UnaryExpressionContext;
	public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpressionContext);
		} else {
			return this.getRuleContext(i, UnaryExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _exponentialExpression!: ExponentialExpressionContext;
	public exponentialExpression(): ExponentialExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExponentialExpressionContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NCalcParser.WS);
		} else {
			return this.getToken(NCalcParser.WS, i);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(NCalcParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExponentialExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _left!: PrimaryExpressionContext;
	public _right!: UnaryExpressionContext;
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext[];
	public unaryExpression(i: number): UnaryExpressionContext;
	public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpressionContext);
		} else {
			return this.getRuleContext(i, UnaryExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_exponentialExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterExponentialExpression) {
			listener.enterExponentialExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitExponentialExpression) {
			listener.exitExponentialExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitExponentialExpression) {
			return visitor.visitExponentialExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public val: LogicalExpression;
	public _logicalExpression!: LogicalExpressionContext;
	public _expr!: ValueContext;
	public _identifier!: IdentifierContext;
	public _arguments!: ArgumentsContext;
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public val: ValueExpression;
	public _FLOAT!: Token;
	public _INTEGER!: Token;
	public _STRING!: Token;
	public _DATETIME!: Token;
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(NCalcParser.FLOAT, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(NCalcParser.INTEGER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(NCalcParser.STRING, 0); }
	public DATETIME(): TerminalNode | undefined { return this.tryGetToken(NCalcParser.DATETIME, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(NCalcParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(NCalcParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_value; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public val: Identifier;
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


export class ExpressionListContext extends ParserRuleContext {
	public val: LogicalExpression[] = [];
	public _first!: LogicalExpressionContext;
	public _follow!: LogicalExpressionContext;
	public logicalExpression(): LogicalExpressionContext[];
	public logicalExpression(i: number): LogicalExpressionContext;
	public logicalExpression(i?: number): LogicalExpressionContext | LogicalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalExpressionContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NCalcParser.WS);
		} else {
			return this.getToken(NCalcParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public val: LogicalExpression[] = [];
	public _expressionList!: ExpressionListContext;
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NCalcParser.RULE_arguments; }
	// @Override
	public enterRule(listener: NCalcListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: NCalcListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NCalcVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


