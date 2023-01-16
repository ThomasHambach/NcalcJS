// Generated from src/Grammar/NCalc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class NCalcLexer extends Lexer {
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
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly TRUE = 31;
	public static readonly FALSE = 32;
	public static readonly ID = 33;
	public static readonly FLOAT = 34;
	public static readonly INTEGER = 35;
	public static readonly STRING = 36;
	public static readonly DATETIME = 37;
	public static readonly NAME = 38;
	public static readonly E = 39;
	public static readonly WS = 40;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "TRUE", "FALSE", "ID", "FLOAT", 
		"INTEGER", "STRING", "DATETIME", "NAME", "E", "LETTER", "EscapeSequence", 
		"UnicodeEscape", "HexDigit", "DIGIT", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'?'", "':'", "'&&'", "'and'", "'||'", "'or'", "'&'", "'|'", 
		"'^'", "'=='", "'='", "'!='", "'<>'", "'<'", "'<='", "'>'", "'>='", "'<<'", 
		"'>>'", "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", "'not'", "'~'", "'('", 
		"')'", "','", "'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "TRUE", "FALSE", "ID", "FLOAT", "INTEGER", 
		"STRING", "DATETIME", "NAME", "E", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(NCalcLexer._LITERAL_NAMES, NCalcLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return NCalcLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(NCalcLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "NCalc.g4"; }

	// @Override
	public get ruleNames(): string[] { return NCalcLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return NCalcLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return NCalcLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return NCalcLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02*\u0112\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x07\"\xB6\n\"\f\"\x0E\"\xB9\v\"\x03#\x07#\xBC\n#\f" +
		"#\x0E#\xBF\v#\x03#\x03#\x06#\xC3\n#\r#\x0E#\xC4\x03#\x05#\xC8\n#\x03#" +
		"\x06#\xCB\n#\r#\x0E#\xCC\x03#\x03#\x05#\xD1\n#\x03$\x06$\xD4\n$\r$\x0E" +
		"$\xD5\x03%\x03%\x03%\x07%\xDB\n%\f%\x0E%\xDE\v%\x03%\x03%\x03&\x03&\x07" +
		"&\xE4\n&\f&\x0E&\xE7\v&\x03&\x03&\x03\'\x03\'\x03\'\x07\'\xEE\n\'\f\'" +
		"\x0E\'\xF1\v\'\x03\'\x03\'\x03(\x03(\x05(\xF7\n(\x03(\x06(\xFA\n(\r(\x0E" +
		"(\xFB\x03)\x03)\x03*\x03*\x03*\x05*\u0103\n*\x03+\x03+\x03+\x03+\x03+" +
		"\x03+\x03,\x03,\x05,\u010D\n,\x03-\x03-\x03.\x03.\x05\xDC\xE5\xEF\x02" +
		"\x02/\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b" +
		"\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
		"\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
		"\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02" +
		"\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(" +
		"O\x02)Q\x02\x02S\x02\x02U\x02\x02W\x02\x02Y\x02\x02[\x02*\x03\x02\n\x05" +
		"\x02\x02!))^^\x04\x02]]__\x04\x02GGgg\x04\x02--//\x05\x02C\\aac|\x07\x02" +
		"))^^ppttvv\x04\x02CHch\x05\x02\v\f\x0E\x0F\"\"\x02\u011D\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
		"\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
		"\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02[\x03\x02" +
		"\x02\x02\x03]\x03\x02\x02\x02\x05_\x03\x02\x02\x02\x07a\x03\x02\x02\x02" +
		"\td\x03\x02\x02\x02\vh\x03\x02\x02\x02\rk\x03\x02\x02\x02\x0Fn\x03\x02" +
		"\x02\x02\x11p\x03\x02\x02\x02\x13r\x03\x02\x02\x02\x15t\x03\x02\x02\x02" +
		"\x17w\x03\x02\x02\x02\x19y\x03\x02\x02\x02\x1B|\x03\x02\x02\x02\x1D\x7F" +
		"\x03\x02\x02\x02\x1F\x81\x03\x02\x02\x02!\x84\x03\x02\x02\x02#\x86\x03" +
		"\x02\x02\x02%\x89\x03\x02\x02\x02\'\x8C\x03\x02\x02\x02)\x8F\x03\x02\x02" +
		"\x02+\x91\x03\x02\x02\x02-\x93\x03\x02\x02\x02/\x95\x03\x02\x02\x021\x97" +
		"\x03\x02\x02\x023\x99\x03\x02\x02\x025\x9B\x03\x02\x02\x027\x9F\x03\x02" +
		"\x02\x029\xA1\x03\x02\x02\x02;\xA3\x03\x02\x02\x02=\xA5\x03\x02\x02\x02" +
		"?\xA7\x03\x02\x02\x02A\xAC\x03\x02\x02\x02C\xB2\x03\x02\x02\x02E\xD0\x03" +
		"\x02\x02\x02G\xD3\x03\x02\x02\x02I\xD7\x03\x02\x02\x02K\xE1\x03\x02\x02" +
		"\x02M\xEA\x03\x02\x02\x02O\xF4\x03\x02\x02\x02Q\xFD\x03\x02\x02\x02S\xFF" +
		"\x03\x02\x02\x02U\u0104\x03\x02\x02\x02W\u010C\x03\x02\x02\x02Y\u010E" +
		"\x03\x02\x02\x02[\u0110\x03\x02\x02\x02]^\x07A\x02\x02^\x04\x03\x02\x02" +
		"\x02_`\x07<\x02\x02`\x06\x03\x02\x02\x02ab\x07(\x02\x02bc\x07(\x02\x02" +
		"c\b\x03\x02\x02\x02de\x07c\x02\x02ef\x07p\x02\x02fg\x07f\x02\x02g\n\x03" +
		"\x02\x02\x02hi\x07~\x02\x02ij\x07~\x02\x02j\f\x03\x02\x02\x02kl\x07q\x02" +
		"\x02lm\x07t\x02\x02m\x0E\x03\x02\x02\x02no\x07(\x02\x02o\x10\x03\x02\x02" +
		"\x02pq\x07~\x02\x02q\x12\x03\x02\x02\x02rs\x07`\x02\x02s\x14\x03\x02\x02" +
		"\x02tu\x07?\x02\x02uv\x07?\x02\x02v\x16\x03\x02\x02\x02wx\x07?\x02\x02" +
		"x\x18\x03\x02\x02\x02yz\x07#\x02\x02z{\x07?\x02\x02{\x1A\x03\x02\x02\x02" +
		"|}\x07>\x02\x02}~\x07@\x02\x02~\x1C\x03\x02\x02\x02\x7F\x80\x07>\x02\x02" +
		"\x80\x1E\x03\x02\x02\x02\x81\x82\x07>\x02\x02\x82\x83\x07?\x02\x02\x83" +
		" \x03\x02\x02\x02\x84\x85\x07@\x02\x02\x85\"\x03\x02\x02\x02\x86\x87\x07" +
		"@\x02\x02\x87\x88\x07?\x02\x02\x88$\x03\x02\x02\x02\x89\x8A\x07>\x02\x02" +
		"\x8A\x8B\x07>\x02\x02\x8B&\x03\x02\x02\x02\x8C\x8D\x07@\x02\x02\x8D\x8E" +
		"\x07@\x02\x02\x8E(\x03\x02\x02\x02\x8F\x90\x07-\x02\x02\x90*\x03\x02\x02" +
		"\x02\x91\x92\x07/\x02\x02\x92,\x03\x02\x02\x02\x93\x94\x07,\x02\x02\x94" +
		".\x03\x02\x02\x02\x95\x96\x071\x02\x02\x960\x03\x02\x02\x02\x97\x98\x07" +
		"\'\x02\x02\x982\x03\x02\x02\x02\x99\x9A\x07#\x02\x02\x9A4\x03\x02\x02" +
		"\x02\x9B\x9C\x07p\x02\x02\x9C\x9D\x07q\x02\x02\x9D\x9E\x07v\x02\x02\x9E" +
		"6\x03\x02\x02\x02\x9F\xA0\x07\x80\x02\x02\xA08\x03\x02\x02\x02\xA1\xA2" +
		"\x07*\x02\x02\xA2:\x03\x02\x02\x02\xA3\xA4\x07+\x02\x02\xA4<\x03\x02\x02" +
		"\x02\xA5\xA6\x07.\x02\x02\xA6>\x03\x02\x02\x02\xA7\xA8\x07v\x02\x02\xA8" +
		"\xA9\x07t\x02\x02\xA9\xAA\x07w\x02\x02\xAA\xAB\x07g\x02\x02\xAB@\x03\x02" +
		"\x02\x02\xAC\xAD\x07h\x02\x02\xAD\xAE\x07c\x02\x02\xAE\xAF\x07n\x02\x02" +
		"\xAF\xB0\x07u\x02\x02\xB0\xB1\x07g\x02\x02\xB1B\x03\x02\x02\x02\xB2\xB7" +
		"\x05Q)\x02\xB3\xB6\x05Q)\x02\xB4\xB6\x05Y-\x02\xB5\xB3\x03\x02\x02\x02" +
		"\xB5\xB4\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02" +
		"\xB7\xB8\x03\x02\x02\x02\xB8D\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xBA\xBC\x05Y-\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD" +
		"\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC0\x03\x02\x02\x02\xBF" +
		"\xBD\x03\x02\x02\x02\xC0\xC2\x070\x02\x02\xC1\xC3\x05Y-\x02\xC2\xC1\x03" +
		"\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03" +
		"\x02\x02\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC8\x05O(\x02\xC7\xC6\x03\x02" +
		"\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xD1\x03\x02\x02\x02\xC9\xCB\x05Y" +
		"-\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCA\x03\x02" +
		"\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x05O" +
		"(\x02\xCF\xD1\x03\x02\x02\x02\xD0\xBD\x03\x02\x02\x02\xD0\xCA\x03\x02" +
		"\x02\x02\xD1F\x03\x02\x02\x02\xD2\xD4\x05Y-\x02\xD3\xD2\x03\x02\x02\x02" +
		"\xD4\xD5\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02" +
		"\xD6H\x03\x02\x02\x02\xD7\xDC\x07)\x02\x02\xD8\xDB\x05S*\x02\xD9\xDB\n" +
		"\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB\xDE\x03" +
		"\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDF\x03" +
		"\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x07)\x02\x02\xE0J\x03\x02" +
		"\x02\x02\xE1\xE5\x07%\x02\x02\xE2\xE4\v\x02\x02\x02\xE3\xE2\x03\x02\x02" +
		"\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE5\xE3\x03\x02\x02" +
		"\x02\xE6\xE8\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xE9\x07%\x02" +
		"\x02\xE9L\x03\x02\x02\x02\xEA\xEF\x07]\x02\x02\xEB\xEE\n\x03\x02\x02\xEC" +
		"\xEE\x05M\'\x02\xED\xEB\x03\x02\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1" +
		"\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF2" +
		"\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF3\x07_\x02\x02\xF3N\x03" +
		"\x02\x02\x02\xF4\xF6\t\x04\x02\x02\xF5\xF7\t\x05\x02\x02\xF6\xF5\x03\x02" +
		"\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03\x02\x02\x02\xF8\xFA\x05Y" +
		"-\x02\xF9\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xF9\x03\x02" +
		"\x02\x02\xFB\xFC\x03\x02\x02\x02\xFCP\x03\x02\x02\x02\xFD\xFE\t\x06\x02" +
		"\x02\xFER\x03\x02\x02\x02\xFF\u0102\x07^\x02\x02\u0100\u0103\t\x07\x02" +
		"\x02\u0101\u0103\x05U+\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0101\x03" +
		"\x02\x02\x02\u0103T\x03\x02\x02\x02\u0104\u0105\x07w\x02\x02\u0105\u0106" +
		"\x05W,\x02\u0106\u0107\x05W,\x02\u0107\u0108\x05W,\x02\u0108\u0109\x05" +
		"W,\x02\u0109V\x03\x02\x02\x02\u010A\u010D\x05Y-\x02\u010B\u010D\t\b\x02" +
		"\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010B\x03\x02\x02\x02\u010DX\x03" +
		"\x02\x02\x02\u010E\u010F\x042;\x02\u010FZ\x03\x02\x02\x02\u0110\u0111" +
		"\t\t\x02\x02\u0111\\\x03\x02\x02\x02\x14\x02\xB5\xB7\xBD\xC4\xC7\xCC\xD0" +
		"\xD5\xDA\xDC\xE5\xED\xEF\xF6\xFB\u0102\u010C\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NCalcLexer.__ATN) {
			NCalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(NCalcLexer._serializedATN));
		}

		return NCalcLexer.__ATN;
	}

}

