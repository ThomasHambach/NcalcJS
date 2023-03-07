// Generated from NCalc.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
  ATN,
  ATNDeserializer,
  DecisionState,
  DFA,
  FailedPredicateException,
  RecognitionException,
  NoViableAltException,
  BailErrorStrategy,
  Parser,
  ParserATNSimulator,
  RuleContext,
  ParserRuleContext,
  PredictionMode,
  PredictionContextCache,
  TerminalNode,
  RuleNode,
  Token,
  TokenStream,
  Interval,
  IntervalSet,
} from 'antlr4';
import NCalcListener from './NCalcListener';
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import dayjs from 'dayjs';
import {
  Identifier,
  BinaryExpression,
  BinaryExpressionType,
  NCalcFunction,
  LogicalExpressionVisitor,
  UnaryExpression,
  UnaryExpressionType,
  TernaryExpression,
  ValueExpression,
  ValueType,
  LogicalExpression,
} from '@/NCalc/Domain';

export default class NCalcParser extends Parser {
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
  public static readonly EOF = Token.EOF;
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
  public static readonly literalNames: (string | null)[] = [
    null,
    "'?'",
    "':'",
    "'&&'",
    "'||'",
    "'&'",
    "'|'",
    "'^'",
    "'=='",
    "'='",
    "'!='",
    "'<>'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'<<'",
    "'>>'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'%'",
    "'!'",
    "'~'",
    "'**'",
    "'('",
    "')'",
    "','",
  ];
  public static readonly symbolicNames: (string | null)[] = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'NOT',
    'TRUE',
    'FALSE',
    'AND',
    'OR',
    'ID',
    'FLOAT',
    'INTEGER',
    'STRING',
    'DATETIME',
    'NAME',
    'EXPONENT',
    'WS',
  ];
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'ncalcExpression',
    'logicalExpression',
    'conditionalExpression',
    'booleanExpression',
    'relationalExpression',
    'shiftExpression',
    'additiveExpression',
    'multiplicativeExpression',
    'unaryExpression',
    'exponentialExpression',
    'primaryExpression',
    'value',
    'identifier',
    'expressionList',
    'arguments',
  ];
  public get grammarFileName(): string {
    return 'NCalc.g4';
  }
  public get literalNames(): (string | null)[] {
    return NCalcParser.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return NCalcParser.symbolicNames;
  }
  public get ruleNames(): string[] {
    return NCalcParser.ruleNames;
  }
  public get serializedATN(): number[] {
    return NCalcParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  public BS: string = '\\';

  public ExtractString(text: string): string {
    let sb: string[] = text.split(/(?!$)/u);
    let startIndex = 1; // Skip initial quote
    let slashIndex = -1;

    const textencoder = new TextEncoder();
    const decoder = new TextDecoder();

    while ((slashIndex = sb.join().indexOf(this.BS, startIndex)) != -1) {
      let escapeType = sb[slashIndex + 1];
      switch (escapeType) {
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
        case 'n':
          sb.splice(slashIndex, 2, '\n');
          break;
        case 'r':
          sb.splice(slashIndex, 2, '\r');
          break;
        case 't':
          sb.splice(slashIndex, 2, '\t');
          break;
        case "'":
          sb.splice(slashIndex, 2, "'");
          break;
        case '\\':
          sb.splice(slashIndex, 2, '\\');
          break;
        default:
          throw new Error('Unvalid escape sequence: \\' + escapeType);
      }

      startIndex = slashIndex + 1;
    }

    sb.splice(0, 1);
    sb.splice(sb.length - 1, 1);

    return sb.join('');
  }

  public Errors: any[] = [];
  public GetExpression(): any {
    return this.ncalcExpression().val as any;
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(
      this,
      NCalcParser._ATN,
      NCalcParser.DecisionsToDFA,
      new PredictionContextCache()
    );
  }
  // @RuleVersion(0)
  public ncalcExpression(): NcalcExpressionContext {
    let localctx: NcalcExpressionContext = new NcalcExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, NCalcParser.RULE_ncalcExpression);
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 30;
        localctx._logicalExpression = this.logicalExpression();
        this.state = 31;
        this.match(NCalcParser.EOF);
        localctx.val = localctx._logicalExpression.val;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public logicalExpression(): LogicalExpressionContext {
    let localctx: LogicalExpressionContext = new LogicalExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 2, NCalcParser.RULE_logicalExpression);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 34;
        localctx._left = this.conditionalExpression();
        localctx.val = localctx._left.val;
        this.state = 66;
        this._errHandler.sync(this);
        switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
          case 1:
            {
              this.state = 39;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === 41) {
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
              _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
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
                _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
              }
              this.state = 49;
              localctx._middle = this.conditionalExpression();
              this.state = 53;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === 41) {
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
              _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
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
                _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
              }
              this.state = 63;
              localctx._right = this.conditionalExpression();
              localctx.val = new TernaryExpression(
                localctx._left.val,
                localctx._middle.val,
                localctx._right.val
              );
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public conditionalExpression(): ConditionalExpressionContext {
    let localctx: ConditionalExpressionContext = new ConditionalExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 4, NCalcParser.RULE_conditionalExpression);

    let type = BinaryExpressionType.Unknown;

    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 68;
        localctx._left = this.booleanExpression();
        localctx.val = localctx._left.val;
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (((_la - 3) & ~0x1f) === 0 && ((1 << (_la - 3)) & 1610612739) !== 0) {
          {
            {
              this.state = 74;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case 3:
                case 32:
                  {
                    this.state = 70;
                    _la = this._input.LA(1);
                    if (!(_la === 3 || _la === 32)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    type = BinaryExpressionType.And;
                  }
                  break;
                case 4:
                case 33:
                  {
                    this.state = 72;
                    _la = this._input.LA(1);
                    if (!(_la === 4 || _la === 33)) {
                      this._errHandler.recoverInline(this);
                    } else {
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
              localctx._right = this.booleanExpression();
              localctx.val = new BinaryExpression(type, localctx.val, localctx._right.val);
            }
          }
          this.state = 83;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public booleanExpression(): BooleanExpressionContext {
    let localctx: BooleanExpressionContext = new BooleanExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 6, NCalcParser.RULE_booleanExpression);

    let type = BinaryExpressionType.Unknown;

    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 84;
        localctx._left = this.relationalExpression();
        localctx.val = localctx._left.val;
        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) === 0 && ((1 << _la) & 224) !== 0) {
          {
            {
              this.state = 92;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case 5:
                  {
                    this.state = 86;
                    this.match(NCalcParser.T__4);
                    type = BinaryExpressionType.BitwiseAnd;
                  }
                  break;
                case 6:
                  {
                    this.state = 88;
                    this.match(NCalcParser.T__5);
                    type = BinaryExpressionType.BitwiseOr;
                  }
                  break;
                case 7:
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
              localctx._right = this.relationalExpression();
              localctx.val = new BinaryExpression(type, localctx.val, localctx._right.val);
            }
          }
          this.state = 101;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public relationalExpression(): RelationalExpressionContext {
    let localctx: RelationalExpressionContext = new RelationalExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 8, NCalcParser.RULE_relationalExpression);

    let type = BinaryExpressionType.Unknown;

    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 102;
        localctx._left = this.shiftExpression();
        localctx.val = localctx._left.val;
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) === 0 && ((1 << _la) & 65280) !== 0) {
          {
            {
              this.state = 116;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case 8:
                case 9:
                  {
                    this.state = 104;
                    _la = this._input.LA(1);
                    if (!(_la === 8 || _la === 9)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    type = BinaryExpressionType.Equal;
                  }
                  break;
                case 10:
                case 11:
                  {
                    this.state = 106;
                    _la = this._input.LA(1);
                    if (!(_la === 10 || _la === 11)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    type = BinaryExpressionType.NotEqual;
                  }
                  break;
                case 12:
                  {
                    this.state = 108;
                    this.match(NCalcParser.T__11);
                    type = BinaryExpressionType.Lesser;
                  }
                  break;
                case 13:
                  {
                    this.state = 110;
                    this.match(NCalcParser.T__12);
                    type = BinaryExpressionType.LesserOrEqual;
                  }
                  break;
                case 14:
                  {
                    this.state = 112;
                    this.match(NCalcParser.T__13);
                    type = BinaryExpressionType.Greater;
                  }
                  break;
                case 15:
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
              localctx._right = this.shiftExpression();
              localctx.val = new BinaryExpression(type, localctx.val, localctx._right.val);
            }
          }
          this.state = 125;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public shiftExpression(): ShiftExpressionContext {
    let localctx: ShiftExpressionContext = new ShiftExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, NCalcParser.RULE_shiftExpression);

    let type = BinaryExpressionType.Unknown;

    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 126;
        localctx._left = this.additiveExpression();
        localctx.val = localctx._left.val;
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 16 || _la === 17) {
          {
            {
              this.state = 132;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case 16:
                  {
                    this.state = 128;
                    this.match(NCalcParser.T__15);
                    type = BinaryExpressionType.LeftShift;
                  }
                  break;
                case 17:
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
              localctx._right = this.additiveExpression();
              localctx.val = new BinaryExpression(type, localctx.val, localctx._right.val);
            }
          }
          this.state = 141;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public additiveExpression(): AdditiveExpressionContext {
    let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 12, NCalcParser.RULE_additiveExpression);

    let type = BinaryExpressionType.Unknown;

    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 142;
        localctx._left = this.multiplicativeExpression();
        localctx.val = localctx._left.val;
        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 18 || _la === 19) {
          {
            {
              this.state = 148;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case 18:
                  {
                    this.state = 144;
                    this.match(NCalcParser.T__17);
                    type = BinaryExpressionType.Plus;
                  }
                  break;
                case 19:
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
              localctx._right = this.multiplicativeExpression();
              localctx.val = new BinaryExpression(type, localctx.val, localctx._right.val);
            }
          }
          this.state = 157;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public multiplicativeExpression(): MultiplicativeExpressionContext {
    let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 14, NCalcParser.RULE_multiplicativeExpression);

    let type = BinaryExpressionType.Unknown;

    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 158;
        localctx._left = this.unaryExpression();
        localctx.val = localctx._left.val;
        this.state = 173;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0) {
          {
            {
              this.state = 166;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case 20:
                  {
                    this.state = 160;
                    this.match(NCalcParser.T__19);
                    type = BinaryExpressionType.Times;
                  }
                  break;
                case 21:
                  {
                    this.state = 162;
                    this.match(NCalcParser.T__20);
                    type = BinaryExpressionType.Div;
                  }
                  break;
                case 22:
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
              localctx._right = this.unaryExpression();
              localctx.val = new BinaryExpression(type, localctx.val, localctx._right.val);
            }
          }
          this.state = 175;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public unaryExpression(): UnaryExpressionContext {
    let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, NCalcParser.RULE_unaryExpression);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 41) {
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
          case 26:
          case 30:
          case 31:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
            {
              this.state = 182;
              localctx._exponentialExpression = this.exponentialExpression();
              localctx.val = localctx._exponentialExpression.val;
            }
            break;
          case 23:
          case 29:
            {
              this.state = 185;
              _la = this._input.LA(1);
              if (!(_la === 23 || _la === 29)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 186;
              localctx._exponentialExpression = this.exponentialExpression();
              localctx.val = new UnaryExpression(
                UnaryExpressionType.Not,
                localctx._exponentialExpression.val
              );
            }
            break;
          case 24:
            {
              {
                this.state = 189;
                this.match(NCalcParser.T__23);
              }
              this.state = 190;
              localctx._exponentialExpression = this.exponentialExpression();
              localctx.val = new UnaryExpression(
                UnaryExpressionType.BitwiseNot,
                localctx._exponentialExpression.val
              );
            }
            break;
          case 19:
            {
              this.state = 193;
              this.match(NCalcParser.T__18);
              this.state = 194;
              localctx._exponentialExpression = this.exponentialExpression();
              localctx.val = new UnaryExpression(
                UnaryExpressionType.Negate,
                localctx._exponentialExpression.val
              );
            }
            break;
          case 18:
            {
              this.state = 197;
              this.match(NCalcParser.T__17);
              this.state = 198;
              localctx._exponentialExpression = this.exponentialExpression();
              localctx.val = new UnaryExpression(
                UnaryExpressionType.Positive,
                localctx._exponentialExpression.val
              );
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 206;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
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
          _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public exponentialExpression(): ExponentialExpressionContext {
    let localctx: ExponentialExpressionContext = new ExponentialExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 18, NCalcParser.RULE_exponentialExpression);
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 209;
        localctx._left = this.primaryExpression();
        localctx.val = localctx._left.val;
        this.state = 217;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 211;
                this.match(NCalcParser.T__24);
                this.state = 212;
                localctx._right = this.unaryExpression();
                localctx.val = new BinaryExpression(
                  BinaryExpressionType.Exponentiation,
                  localctx.val,
                  localctx._right.val
                );
              }
            }
          }
          this.state = 219;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public primaryExpression(): PrimaryExpressionContext {
    let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 20, NCalcParser.RULE_primaryExpression);
    let _la: number;
    try {
      this.state = 235;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 26:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 220;
            this.match(NCalcParser.T__25);
            this.state = 221;
            localctx._logicalExpression = this.logicalExpression();
            this.state = 222;
            this.match(NCalcParser.T__26);
            localctx.val = localctx._logicalExpression.val;
          }
          break;
        case 30:
        case 31:
        case 35:
        case 36:
        case 37:
        case 38:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 225;
            localctx._expr = this.value();
            localctx.val = localctx._expr.val;
          }
          break;
        case 34:
        case 39:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 228;
            localctx._identifier = this.identifier();
            localctx.val = localctx._identifier.val;
            this.state = 233;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === 26) {
              {
                this.state = 230;
                localctx._arguments = this.arguments();
                localctx.val = new NCalcFunction(localctx._identifier.val, localctx._arguments.val);
              }
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public value(): ValueContext {
    let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, NCalcParser.RULE_value);
    try {
      this.state = 249;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 35:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 237;
            localctx._FLOAT = this.match(NCalcParser.FLOAT);
            localctx.val = new ValueExpression(
              parseFloat(localctx._FLOAT != null ? localctx._FLOAT.text : undefined),
              ValueType.Float
            );
          }
          break;
        case 36:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 239;
            localctx._INTEGER = this.match(NCalcParser.INTEGER);
            try {
              localctx.val = new ValueExpression(
                parseInt(localctx._INTEGER != null ? localctx._INTEGER.text : undefined),
                ValueType.Integer
              );
            } catch (e) {
              localctx.val = new ValueExpression(
                parseFloat(localctx._INTEGER != null ? localctx._INTEGER.text : undefined),
                ValueType.Float
              );
            }
          }
          break;
        case 37:
          this.enterOuterAlt(localctx, 3);
          {
            this.state = 241;
            localctx._STRING = this.match(NCalcParser.STRING);
            localctx.val = new ValueExpression(
              this.ExtractString(localctx._STRING != null ? localctx._STRING.text : undefined),
              ValueType.String
            );
          }
          break;
        case 38:
          this.enterOuterAlt(localctx, 4);
          {
            this.state = 243;
            localctx._DATETIME = this.match(NCalcParser.DATETIME);
            localctx.val = new ValueExpression(
              dayjs(
                (localctx._DATETIME != null ? localctx._DATETIME.text : undefined).substring(
                  1,
                  (localctx._DATETIME != null ? localctx._DATETIME.text : undefined).length - 2
                )
              ).toString(),
              ValueType.DateTime
            );
          }
          break;
        case 30:
          this.enterOuterAlt(localctx, 5);
          {
            this.state = 245;
            this.match(NCalcParser.TRUE);
            localctx.val = new ValueExpression(true, ValueType.Boolean);
          }
          break;
        case 31:
          this.enterOuterAlt(localctx, 6);
          {
            this.state = 247;
            this.match(NCalcParser.FALSE);
            localctx.val = new ValueExpression(false, ValueType.Float);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, NCalcParser.RULE_identifier);
    try {
      this.state = 255;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 34:
          this.enterOuterAlt(localctx, 1);
          {
            this.state = 251;
            localctx._ID = this.match(NCalcParser.ID);
            localctx.val = new Identifier(localctx._ID != null ? localctx._ID.text : undefined);
          }
          break;
        case 39:
          this.enterOuterAlt(localctx, 2);
          {
            this.state = 253;
            localctx._NAME = this.match(NCalcParser.NAME);
            localctx.val = new Identifier(
              (localctx._NAME != null ? localctx._NAME.text : undefined).substring(
                1,
                (localctx._NAME != null ? localctx._NAME.text : undefined).length - 1
              )
            );
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public expressionList(): ExpressionListContext {
    let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, NCalcParser.RULE_expressionList);

    let expressions = [];

    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 257;
        localctx._first = this.logicalExpression();
        expressions.push(localctx._first.val);
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 28 || _la === 41) {
          {
            {
              this.state = 262;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === 41) {
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
              _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
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
                _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
              }
              this.state = 272;
              localctx._follow = this.logicalExpression();
              expressions.push(localctx._follow.val);
            }
          }
          this.state = 279;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        localctx.val = expressions;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  // @RuleVersion(0)
  public arguments(): ArgumentsContext {
    let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, NCalcParser.RULE_arguments);

    localctx.val = [];

    let _la: number;
    try {
      this.enterOuterAlt(localctx, 1);
      {
        this.state = 282;
        this.match(NCalcParser.T__25);
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((_la - 18) & ~0x1f) === 0 && ((1 << (_la - 18)) & 12532067) !== 0) {
          {
            this.state = 283;
            localctx._expressionList = this.expressionList();
            localctx.val = localctx._expressionList.val;
          }
        }

        this.state = 288;
        this.match(NCalcParser.T__26);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  public static readonly _serializedATN: number[] = [
    4, 1, 41, 291, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 5, 1, 38, 8, 1, 10, 1, 12, 1, 41, 9, 1,
    1, 1, 1, 1, 5, 1, 45, 8, 1, 10, 1, 12, 1, 48, 9, 1, 1, 1, 1, 1, 5, 1, 52, 8, 1, 10, 1, 12, 1,
    55, 9, 1, 1, 1, 1, 1, 5, 1, 59, 8, 1, 10, 1, 12, 1, 62, 9, 1, 1, 1, 1, 1, 1, 1, 3, 1, 67, 8, 1,
    1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 75, 8, 2, 1, 2, 1, 2, 1, 2, 5, 2, 80, 8, 2, 10, 2, 12,
    2, 83, 9, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 93, 8, 3, 1, 3, 1, 3, 1, 3,
    5, 3, 98, 8, 3, 10, 3, 12, 3, 101, 9, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4,
    1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 117, 8, 4, 1, 4, 1, 4, 1, 4, 5, 4, 122, 8, 4, 10, 4, 12, 4,
    125, 9, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 133, 8, 5, 1, 5, 1, 5, 1, 5, 5, 5, 138, 8,
    5, 10, 5, 12, 5, 141, 9, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 149, 8, 6, 1, 6, 1, 6, 1,
    6, 5, 6, 154, 8, 6, 10, 6, 12, 6, 157, 9, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3,
    7, 167, 8, 7, 1, 7, 1, 7, 1, 7, 5, 7, 172, 8, 7, 10, 7, 12, 7, 175, 9, 7, 1, 8, 5, 8, 178, 8, 8,
    10, 8, 12, 8, 181, 9, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8,
    1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 202, 8, 8, 1, 8, 5, 8, 205, 8, 8, 10, 8, 12, 8,
    208, 9, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 5, 9, 216, 8, 9, 10, 9, 12, 9, 219, 9, 9, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 234,
    8, 10, 3, 10, 236, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 3, 11, 250, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 256, 8, 12, 1, 13, 1, 13, 1,
    13, 5, 13, 261, 8, 13, 10, 13, 12, 13, 264, 9, 13, 1, 13, 1, 13, 5, 13, 268, 8, 13, 10, 13, 12,
    13, 271, 9, 13, 1, 13, 1, 13, 1, 13, 5, 13, 276, 8, 13, 10, 13, 12, 13, 279, 9, 13, 1, 13, 1,
    13, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 287, 8, 14, 1, 14, 1, 14, 1, 14, 0, 0, 15, 0, 2, 4, 6, 8,
    10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 0, 5, 2, 0, 3, 3, 32, 32, 2, 0, 4, 4, 33, 33, 1, 0, 8,
    9, 1, 0, 10, 11, 2, 0, 23, 23, 29, 29, 318, 0, 30, 1, 0, 0, 0, 2, 34, 1, 0, 0, 0, 4, 68, 1, 0,
    0, 0, 6, 84, 1, 0, 0, 0, 8, 102, 1, 0, 0, 0, 10, 126, 1, 0, 0, 0, 12, 142, 1, 0, 0, 0, 14, 158,
    1, 0, 0, 0, 16, 179, 1, 0, 0, 0, 18, 209, 1, 0, 0, 0, 20, 235, 1, 0, 0, 0, 22, 249, 1, 0, 0, 0,
    24, 255, 1, 0, 0, 0, 26, 257, 1, 0, 0, 0, 28, 282, 1, 0, 0, 0, 30, 31, 3, 2, 1, 0, 31, 32, 5, 0,
    0, 1, 32, 33, 6, 0, -1, 0, 33, 1, 1, 0, 0, 0, 34, 35, 3, 4, 2, 0, 35, 66, 6, 1, -1, 0, 36, 38,
    5, 41, 0, 0, 37, 36, 1, 0, 0, 0, 38, 41, 1, 0, 0, 0, 39, 37, 1, 0, 0, 0, 39, 40, 1, 0, 0, 0, 40,
    42, 1, 0, 0, 0, 41, 39, 1, 0, 0, 0, 42, 46, 5, 1, 0, 0, 43, 45, 5, 41, 0, 0, 44, 43, 1, 0, 0, 0,
    45, 48, 1, 0, 0, 0, 46, 44, 1, 0, 0, 0, 46, 47, 1, 0, 0, 0, 47, 49, 1, 0, 0, 0, 48, 46, 1, 0, 0,
    0, 49, 53, 3, 4, 2, 0, 50, 52, 5, 41, 0, 0, 51, 50, 1, 0, 0, 0, 52, 55, 1, 0, 0, 0, 53, 51, 1,
    0, 0, 0, 53, 54, 1, 0, 0, 0, 54, 56, 1, 0, 0, 0, 55, 53, 1, 0, 0, 0, 56, 60, 5, 2, 0, 0, 57, 59,
    5, 41, 0, 0, 58, 57, 1, 0, 0, 0, 59, 62, 1, 0, 0, 0, 60, 58, 1, 0, 0, 0, 60, 61, 1, 0, 0, 0, 61,
    63, 1, 0, 0, 0, 62, 60, 1, 0, 0, 0, 63, 64, 3, 4, 2, 0, 64, 65, 6, 1, -1, 0, 65, 67, 1, 0, 0, 0,
    66, 39, 1, 0, 0, 0, 66, 67, 1, 0, 0, 0, 67, 3, 1, 0, 0, 0, 68, 69, 3, 6, 3, 0, 69, 81, 6, 2, -1,
    0, 70, 71, 7, 0, 0, 0, 71, 75, 6, 2, -1, 0, 72, 73, 7, 1, 0, 0, 73, 75, 6, 2, -1, 0, 74, 70, 1,
    0, 0, 0, 74, 72, 1, 0, 0, 0, 75, 76, 1, 0, 0, 0, 76, 77, 3, 6, 3, 0, 77, 78, 6, 2, -1, 0, 78,
    80, 1, 0, 0, 0, 79, 74, 1, 0, 0, 0, 80, 83, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0,
    82, 5, 1, 0, 0, 0, 83, 81, 1, 0, 0, 0, 84, 85, 3, 8, 4, 0, 85, 99, 6, 3, -1, 0, 86, 87, 5, 5, 0,
    0, 87, 93, 6, 3, -1, 0, 88, 89, 5, 6, 0, 0, 89, 93, 6, 3, -1, 0, 90, 91, 5, 7, 0, 0, 91, 93, 6,
    3, -1, 0, 92, 86, 1, 0, 0, 0, 92, 88, 1, 0, 0, 0, 92, 90, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0, 94,
    95, 3, 8, 4, 0, 95, 96, 6, 3, -1, 0, 96, 98, 1, 0, 0, 0, 97, 92, 1, 0, 0, 0, 98, 101, 1, 0, 0,
    0, 99, 97, 1, 0, 0, 0, 99, 100, 1, 0, 0, 0, 100, 7, 1, 0, 0, 0, 101, 99, 1, 0, 0, 0, 102, 103,
    3, 10, 5, 0, 103, 123, 6, 4, -1, 0, 104, 105, 7, 2, 0, 0, 105, 117, 6, 4, -1, 0, 106, 107, 7, 3,
    0, 0, 107, 117, 6, 4, -1, 0, 108, 109, 5, 12, 0, 0, 109, 117, 6, 4, -1, 0, 110, 111, 5, 13, 0,
    0, 111, 117, 6, 4, -1, 0, 112, 113, 5, 14, 0, 0, 113, 117, 6, 4, -1, 0, 114, 115, 5, 15, 0, 0,
    115, 117, 6, 4, -1, 0, 116, 104, 1, 0, 0, 0, 116, 106, 1, 0, 0, 0, 116, 108, 1, 0, 0, 0, 116,
    110, 1, 0, 0, 0, 116, 112, 1, 0, 0, 0, 116, 114, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 119, 3,
    10, 5, 0, 119, 120, 6, 4, -1, 0, 120, 122, 1, 0, 0, 0, 121, 116, 1, 0, 0, 0, 122, 125, 1, 0, 0,
    0, 123, 121, 1, 0, 0, 0, 123, 124, 1, 0, 0, 0, 124, 9, 1, 0, 0, 0, 125, 123, 1, 0, 0, 0, 126,
    127, 3, 12, 6, 0, 127, 139, 6, 5, -1, 0, 128, 129, 5, 16, 0, 0, 129, 133, 6, 5, -1, 0, 130, 131,
    5, 17, 0, 0, 131, 133, 6, 5, -1, 0, 132, 128, 1, 0, 0, 0, 132, 130, 1, 0, 0, 0, 133, 134, 1, 0,
    0, 0, 134, 135, 3, 12, 6, 0, 135, 136, 6, 5, -1, 0, 136, 138, 1, 0, 0, 0, 137, 132, 1, 0, 0, 0,
    138, 141, 1, 0, 0, 0, 139, 137, 1, 0, 0, 0, 139, 140, 1, 0, 0, 0, 140, 11, 1, 0, 0, 0, 141, 139,
    1, 0, 0, 0, 142, 143, 3, 14, 7, 0, 143, 155, 6, 6, -1, 0, 144, 145, 5, 18, 0, 0, 145, 149, 6, 6,
    -1, 0, 146, 147, 5, 19, 0, 0, 147, 149, 6, 6, -1, 0, 148, 144, 1, 0, 0, 0, 148, 146, 1, 0, 0, 0,
    149, 150, 1, 0, 0, 0, 150, 151, 3, 14, 7, 0, 151, 152, 6, 6, -1, 0, 152, 154, 1, 0, 0, 0, 153,
    148, 1, 0, 0, 0, 154, 157, 1, 0, 0, 0, 155, 153, 1, 0, 0, 0, 155, 156, 1, 0, 0, 0, 156, 13, 1,
    0, 0, 0, 157, 155, 1, 0, 0, 0, 158, 159, 3, 16, 8, 0, 159, 173, 6, 7, -1, 0, 160, 161, 5, 20, 0,
    0, 161, 167, 6, 7, -1, 0, 162, 163, 5, 21, 0, 0, 163, 167, 6, 7, -1, 0, 164, 165, 5, 22, 0, 0,
    165, 167, 6, 7, -1, 0, 166, 160, 1, 0, 0, 0, 166, 162, 1, 0, 0, 0, 166, 164, 1, 0, 0, 0, 167,
    168, 1, 0, 0, 0, 168, 169, 3, 16, 8, 0, 169, 170, 6, 7, -1, 0, 170, 172, 1, 0, 0, 0, 171, 166,
    1, 0, 0, 0, 172, 175, 1, 0, 0, 0, 173, 171, 1, 0, 0, 0, 173, 174, 1, 0, 0, 0, 174, 15, 1, 0, 0,
    0, 175, 173, 1, 0, 0, 0, 176, 178, 5, 41, 0, 0, 177, 176, 1, 0, 0, 0, 178, 181, 1, 0, 0, 0, 179,
    177, 1, 0, 0, 0, 179, 180, 1, 0, 0, 0, 180, 201, 1, 0, 0, 0, 181, 179, 1, 0, 0, 0, 182, 183, 3,
    18, 9, 0, 183, 184, 6, 8, -1, 0, 184, 202, 1, 0, 0, 0, 185, 186, 7, 4, 0, 0, 186, 187, 3, 18, 9,
    0, 187, 188, 6, 8, -1, 0, 188, 202, 1, 0, 0, 0, 189, 190, 5, 24, 0, 0, 190, 191, 3, 18, 9, 0,
    191, 192, 6, 8, -1, 0, 192, 202, 1, 0, 0, 0, 193, 194, 5, 19, 0, 0, 194, 195, 3, 18, 9, 0, 195,
    196, 6, 8, -1, 0, 196, 202, 1, 0, 0, 0, 197, 198, 5, 18, 0, 0, 198, 199, 3, 18, 9, 0, 199, 200,
    6, 8, -1, 0, 200, 202, 1, 0, 0, 0, 201, 182, 1, 0, 0, 0, 201, 185, 1, 0, 0, 0, 201, 189, 1, 0,
    0, 0, 201, 193, 1, 0, 0, 0, 201, 197, 1, 0, 0, 0, 202, 206, 1, 0, 0, 0, 203, 205, 5, 41, 0, 0,
    204, 203, 1, 0, 0, 0, 205, 208, 1, 0, 0, 0, 206, 204, 1, 0, 0, 0, 206, 207, 1, 0, 0, 0, 207, 17,
    1, 0, 0, 0, 208, 206, 1, 0, 0, 0, 209, 210, 3, 20, 10, 0, 210, 217, 6, 9, -1, 0, 211, 212, 5,
    25, 0, 0, 212, 213, 3, 16, 8, 0, 213, 214, 6, 9, -1, 0, 214, 216, 1, 0, 0, 0, 215, 211, 1, 0, 0,
    0, 216, 219, 1, 0, 0, 0, 217, 215, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 19, 1, 0, 0, 0, 219,
    217, 1, 0, 0, 0, 220, 221, 5, 26, 0, 0, 221, 222, 3, 2, 1, 0, 222, 223, 5, 27, 0, 0, 223, 224,
    6, 10, -1, 0, 224, 236, 1, 0, 0, 0, 225, 226, 3, 22, 11, 0, 226, 227, 6, 10, -1, 0, 227, 236, 1,
    0, 0, 0, 228, 229, 3, 24, 12, 0, 229, 233, 6, 10, -1, 0, 230, 231, 3, 28, 14, 0, 231, 232, 6,
    10, -1, 0, 232, 234, 1, 0, 0, 0, 233, 230, 1, 0, 0, 0, 233, 234, 1, 0, 0, 0, 234, 236, 1, 0, 0,
    0, 235, 220, 1, 0, 0, 0, 235, 225, 1, 0, 0, 0, 235, 228, 1, 0, 0, 0, 236, 21, 1, 0, 0, 0, 237,
    238, 5, 35, 0, 0, 238, 250, 6, 11, -1, 0, 239, 240, 5, 36, 0, 0, 240, 250, 6, 11, -1, 0, 241,
    242, 5, 37, 0, 0, 242, 250, 6, 11, -1, 0, 243, 244, 5, 38, 0, 0, 244, 250, 6, 11, -1, 0, 245,
    246, 5, 30, 0, 0, 246, 250, 6, 11, -1, 0, 247, 248, 5, 31, 0, 0, 248, 250, 6, 11, -1, 0, 249,
    237, 1, 0, 0, 0, 249, 239, 1, 0, 0, 0, 249, 241, 1, 0, 0, 0, 249, 243, 1, 0, 0, 0, 249, 245, 1,
    0, 0, 0, 249, 247, 1, 0, 0, 0, 250, 23, 1, 0, 0, 0, 251, 252, 5, 34, 0, 0, 252, 256, 6, 12, -1,
    0, 253, 254, 5, 39, 0, 0, 254, 256, 6, 12, -1, 0, 255, 251, 1, 0, 0, 0, 255, 253, 1, 0, 0, 0,
    256, 25, 1, 0, 0, 0, 257, 258, 3, 2, 1, 0, 258, 277, 6, 13, -1, 0, 259, 261, 5, 41, 0, 0, 260,
    259, 1, 0, 0, 0, 261, 264, 1, 0, 0, 0, 262, 260, 1, 0, 0, 0, 262, 263, 1, 0, 0, 0, 263, 265, 1,
    0, 0, 0, 264, 262, 1, 0, 0, 0, 265, 269, 5, 28, 0, 0, 266, 268, 5, 41, 0, 0, 267, 266, 1, 0, 0,
    0, 268, 271, 1, 0, 0, 0, 269, 267, 1, 0, 0, 0, 269, 270, 1, 0, 0, 0, 270, 272, 1, 0, 0, 0, 271,
    269, 1, 0, 0, 0, 272, 273, 3, 2, 1, 0, 273, 274, 6, 13, -1, 0, 274, 276, 1, 0, 0, 0, 275, 262,
    1, 0, 0, 0, 276, 279, 1, 0, 0, 0, 277, 275, 1, 0, 0, 0, 277, 278, 1, 0, 0, 0, 278, 280, 1, 0, 0,
    0, 279, 277, 1, 0, 0, 0, 280, 281, 6, 13, -1, 0, 281, 27, 1, 0, 0, 0, 282, 286, 5, 26, 0, 0,
    283, 284, 3, 26, 13, 0, 284, 285, 6, 14, -1, 0, 285, 287, 1, 0, 0, 0, 286, 283, 1, 0, 0, 0, 286,
    287, 1, 0, 0, 0, 287, 288, 1, 0, 0, 0, 288, 289, 5, 27, 0, 0, 289, 29, 1, 0, 0, 0, 29, 39, 46,
    53, 60, 66, 74, 81, 92, 99, 116, 123, 132, 139, 148, 155, 166, 173, 179, 201, 206, 217, 233,
    235, 249, 255, 262, 269, 277, 286,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!NCalcParser.__ATN) {
      NCalcParser.__ATN = new ATNDeserializer().deserialize(NCalcParser._serializedATN);
    }

    return NCalcParser.__ATN;
  }

  static DecisionsToDFA = NCalcParser._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index)
  );
}

export class NcalcExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _logicalExpression!: LogicalExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public logicalExpression(): LogicalExpressionContext {
    return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
  }
  public EOF(): TerminalNode {
    return this.getToken(NCalcParser.EOF, 0);
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_ncalcExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterNcalcExpression) {
      listener.enterNcalcExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitNcalcExpression) {
      listener.exitNcalcExpression(this);
    }
  }
}

export class LogicalExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _left!: ConditionalExpressionContext;
  public _middle!: ConditionalExpressionContext;
  public _right!: ConditionalExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public conditionalExpression_list(): ConditionalExpressionContext[] {
    return this.getTypedRuleContexts(
      ConditionalExpressionContext
    ) as ConditionalExpressionContext[];
  }
  public conditionalExpression(i: number): ConditionalExpressionContext {
    return this.getTypedRuleContext(
      ConditionalExpressionContext,
      i
    ) as ConditionalExpressionContext;
  }
  public WS_list(): TerminalNode[] {
    return this.getTokens(NCalcParser.WS);
  }
  public WS(i: number): TerminalNode {
    return this.getToken(NCalcParser.WS, i);
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_logicalExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterLogicalExpression) {
      listener.enterLogicalExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitLogicalExpression) {
      listener.exitLogicalExpression(this);
    }
  }
}

export class ConditionalExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _left!: BooleanExpressionContext;
  public _right!: BooleanExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public booleanExpression_list(): BooleanExpressionContext[] {
    return this.getTypedRuleContexts(BooleanExpressionContext) as BooleanExpressionContext[];
  }
  public booleanExpression(i: number): BooleanExpressionContext {
    return this.getTypedRuleContext(BooleanExpressionContext, i) as BooleanExpressionContext;
  }
  public AND_list(): TerminalNode[] {
    return this.getTokens(NCalcParser.AND);
  }
  public AND(i: number): TerminalNode {
    return this.getToken(NCalcParser.AND, i);
  }
  public OR_list(): TerminalNode[] {
    return this.getTokens(NCalcParser.OR);
  }
  public OR(i: number): TerminalNode {
    return this.getToken(NCalcParser.OR, i);
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_conditionalExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterConditionalExpression) {
      listener.enterConditionalExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitConditionalExpression) {
      listener.exitConditionalExpression(this);
    }
  }
}

export class BooleanExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _left!: RelationalExpressionContext;
  public _right!: RelationalExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public relationalExpression_list(): RelationalExpressionContext[] {
    return this.getTypedRuleContexts(RelationalExpressionContext) as RelationalExpressionContext[];
  }
  public relationalExpression(i: number): RelationalExpressionContext {
    return this.getTypedRuleContext(RelationalExpressionContext, i) as RelationalExpressionContext;
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_booleanExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterBooleanExpression) {
      listener.enterBooleanExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitBooleanExpression) {
      listener.exitBooleanExpression(this);
    }
  }
}

export class RelationalExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _left!: ShiftExpressionContext;
  public _right!: ShiftExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public shiftExpression_list(): ShiftExpressionContext[] {
    return this.getTypedRuleContexts(ShiftExpressionContext) as ShiftExpressionContext[];
  }
  public shiftExpression(i: number): ShiftExpressionContext {
    return this.getTypedRuleContext(ShiftExpressionContext, i) as ShiftExpressionContext;
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_relationalExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterRelationalExpression) {
      listener.enterRelationalExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitRelationalExpression) {
      listener.exitRelationalExpression(this);
    }
  }
}

export class ShiftExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _left!: AdditiveExpressionContext;
  public _right!: AdditiveExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public additiveExpression_list(): AdditiveExpressionContext[] {
    return this.getTypedRuleContexts(AdditiveExpressionContext) as AdditiveExpressionContext[];
  }
  public additiveExpression(i: number): AdditiveExpressionContext {
    return this.getTypedRuleContext(AdditiveExpressionContext, i) as AdditiveExpressionContext;
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_shiftExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterShiftExpression) {
      listener.enterShiftExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitShiftExpression) {
      listener.exitShiftExpression(this);
    }
  }
}

export class AdditiveExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _left!: MultiplicativeExpressionContext;
  public _right!: MultiplicativeExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public multiplicativeExpression_list(): MultiplicativeExpressionContext[] {
    return this.getTypedRuleContexts(
      MultiplicativeExpressionContext
    ) as MultiplicativeExpressionContext[];
  }
  public multiplicativeExpression(i: number): MultiplicativeExpressionContext {
    return this.getTypedRuleContext(
      MultiplicativeExpressionContext,
      i
    ) as MultiplicativeExpressionContext;
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_additiveExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterAdditiveExpression) {
      listener.enterAdditiveExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitAdditiveExpression) {
      listener.exitAdditiveExpression(this);
    }
  }
}

export class MultiplicativeExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _left!: UnaryExpressionContext;
  public _right!: UnaryExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public unaryExpression_list(): UnaryExpressionContext[] {
    return this.getTypedRuleContexts(UnaryExpressionContext) as UnaryExpressionContext[];
  }
  public unaryExpression(i: number): UnaryExpressionContext {
    return this.getTypedRuleContext(UnaryExpressionContext, i) as UnaryExpressionContext;
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_multiplicativeExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterMultiplicativeExpression) {
      listener.enterMultiplicativeExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitMultiplicativeExpression) {
      listener.exitMultiplicativeExpression(this);
    }
  }
}

export class UnaryExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _exponentialExpression!: ExponentialExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public exponentialExpression(): ExponentialExpressionContext {
    return this.getTypedRuleContext(
      ExponentialExpressionContext,
      0
    ) as ExponentialExpressionContext;
  }
  public WS_list(): TerminalNode[] {
    return this.getTokens(NCalcParser.WS);
  }
  public WS(i: number): TerminalNode {
    return this.getToken(NCalcParser.WS, i);
  }
  public NOT(): TerminalNode {
    return this.getToken(NCalcParser.NOT, 0);
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_unaryExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterUnaryExpression) {
      listener.enterUnaryExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitUnaryExpression) {
      listener.exitUnaryExpression(this);
    }
  }
}

export class ExponentialExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _left!: PrimaryExpressionContext;
  public _right!: UnaryExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public primaryExpression(): PrimaryExpressionContext {
    return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
  }
  public unaryExpression_list(): UnaryExpressionContext[] {
    return this.getTypedRuleContexts(UnaryExpressionContext) as UnaryExpressionContext[];
  }
  public unaryExpression(i: number): UnaryExpressionContext {
    return this.getTypedRuleContext(UnaryExpressionContext, i) as UnaryExpressionContext;
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_exponentialExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterExponentialExpression) {
      listener.enterExponentialExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitExponentialExpression) {
      listener.exitExponentialExpression(this);
    }
  }
}

export class PrimaryExpressionContext extends ParserRuleContext {
  public val: LogicalExpression;
  public _logicalExpression!: LogicalExpressionContext;
  public _expr!: ValueContext;
  public _identifier!: IdentifierContext;
  public _arguments!: ArgumentsContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public logicalExpression(): LogicalExpressionContext {
    return this.getTypedRuleContext(LogicalExpressionContext, 0) as LogicalExpressionContext;
  }
  public value(): ValueContext {
    return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
  }
  public identifier(): IdentifierContext {
    return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
  }
  public arguments(): ArgumentsContext {
    return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_primaryExpression;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterPrimaryExpression) {
      listener.enterPrimaryExpression(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitPrimaryExpression) {
      listener.exitPrimaryExpression(this);
    }
  }
}

export class ValueContext extends ParserRuleContext {
  public val: ValueExpression;
  public _FLOAT!: Token;
  public _INTEGER!: Token;
  public _STRING!: Token;
  public _DATETIME!: Token;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public FLOAT(): TerminalNode {
    return this.getToken(NCalcParser.FLOAT, 0);
  }
  public INTEGER(): TerminalNode {
    return this.getToken(NCalcParser.INTEGER, 0);
  }
  public STRING(): TerminalNode {
    return this.getToken(NCalcParser.STRING, 0);
  }
  public DATETIME(): TerminalNode {
    return this.getToken(NCalcParser.DATETIME, 0);
  }
  public TRUE(): TerminalNode {
    return this.getToken(NCalcParser.TRUE, 0);
  }
  public FALSE(): TerminalNode {
    return this.getToken(NCalcParser.FALSE, 0);
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_value;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterValue) {
      listener.enterValue(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitValue) {
      listener.exitValue(this);
    }
  }
}

export class IdentifierContext extends ParserRuleContext {
  public val: Identifier;
  public _ID!: Token;
  public _NAME!: Token;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public ID(): TerminalNode {
    return this.getToken(NCalcParser.ID, 0);
  }
  public NAME(): TerminalNode {
    return this.getToken(NCalcParser.NAME, 0);
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_identifier;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this);
    }
  }
}

export class ExpressionListContext extends ParserRuleContext {
  public val: LogicalExpression[] = [];
  public _first!: LogicalExpressionContext;
  public _follow!: LogicalExpressionContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public logicalExpression_list(): LogicalExpressionContext[] {
    return this.getTypedRuleContexts(LogicalExpressionContext) as LogicalExpressionContext[];
  }
  public logicalExpression(i: number): LogicalExpressionContext {
    return this.getTypedRuleContext(LogicalExpressionContext, i) as LogicalExpressionContext;
  }
  public WS_list(): TerminalNode[] {
    return this.getTokens(NCalcParser.WS);
  }
  public WS(i: number): TerminalNode {
    return this.getToken(NCalcParser.WS, i);
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_expressionList;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterExpressionList) {
      listener.enterExpressionList(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitExpressionList) {
      listener.exitExpressionList(this);
    }
  }
}

export class ArgumentsContext extends ParserRuleContext {
  public val: LogicalExpression[] = [];
  public _expressionList!: ExpressionListContext;
  constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number) {
    super(parent, invokingState);
    this.parser = parser;
  }
  public expressionList(): ExpressionListContext {
    return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
  }
  public get ruleIndex(): number {
    return NCalcParser.RULE_arguments;
  }
  public enterRule(listener: NCalcListener): void {
    if (listener.enterArguments) {
      listener.enterArguments(this);
    }
  }
  public exitRule(listener: NCalcListener): void {
    if (listener.exitArguments) {
      listener.exitArguments(this);
    }
  }
}
