grammar NCalc;

// Thanks to Thaina (https://github.com/Thaina) for having the ANTLR4 version of NCalc grammar file ready.
// The below grammar file is changed to use TypeScript.
// Original available at: https://github.com/Thaina/NCalc2/blob/master/grammer/NCalc.g

@parser::header {

import dayjs from "dayjs";
import { Identifier, BinaryExpression, BinaryExpressionType, NCalcFunction, LogicalExpressionVisitor, UnaryExpression, UnaryExpressionType, TernaryExpression, ValueExpression, ValueType, LogicalExpression } from "@/NCalc/Domain";
}

@parser::members {

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
	public GetExpression(): any { return (this.ncalcExpression() as any).value };

}

@init {
    // numberFormatInfo.NumberDecimalSeparator = ".";
}

ncalcExpression returns [LogicalExpression val]
	: logicalExpression EOF {$val = $logicalExpression.val; }
	;

logicalExpression returns [LogicalExpression val]
	:	left=conditionalExpression { $val = $left.val; } ( WS* '?' WS* middle=conditionalExpression WS* ':' WS* right=conditionalExpression { $val = new TernaryExpression($left.val, $middle.val, $right.val); })? 
	;

conditionalExpression returns [LogicalExpression val]
@init {
let type = BinaryExpressionType.Unknown;
}
	:	left=booleanExpression { $val = $left.val; } (
			( ('&&' | 'and') { type = BinaryExpressionType.And; } 
			| ('||' | 'or') { type = BinaryExpressionType.Or; } )
			right=booleanExpression { $val = new BinaryExpression(type, $val, $right.val); }
			)* 
	;
		
booleanExpression returns [LogicalExpression val]
@init {
let type = BinaryExpressionType.Unknown;
}
	:	left=relationalExpression { $val = $left.val; } (
			( '&' { type = BinaryExpressionType.BitwiseAnd; } 
			| '|' { type = BinaryExpressionType.BitwiseOr; }
			| '^' { type = BinaryExpressionType.BitwiseXOr; } )
			right=relationalExpression { $val = new BinaryExpression(type, $val, $right.val); } 
			)* 
	;

relationalExpression returns [LogicalExpression val]
@init {
let type = BinaryExpressionType.Unknown;
}
	:	left=shiftExpression { $val = $left.val; } (
			( ('==' | '=' ) { type = BinaryExpressionType.Equal; } 
			| ('!=' | '<>' ) { type = BinaryExpressionType.NotEqual; } 
			| '<' { type = BinaryExpressionType.Lesser; } 
			| '<=' { type = BinaryExpressionType.LesserOrEqual; }  
			| '>' { type = BinaryExpressionType.Greater; } 
			| '>=' { type = BinaryExpressionType.GreaterOrEqual; } ) 
			right=shiftExpression { $val = new BinaryExpression(type, $val, $right.val); } 
			)* 
	;

shiftExpression returns [LogicalExpression val]
@init {
let type = BinaryExpressionType.Unknown;
}
	: left=additiveExpression { $val = $left.val; } (
			( '<<' { type = BinaryExpressionType.LeftShift; } 
			| '>>' { type = BinaryExpressionType.RightShift; }  )
			right=additiveExpression { $val = new BinaryExpression(type, $val, $right.val); } 
			)* 
	;

additiveExpression returns [LogicalExpression val]
@init {
let type = BinaryExpressionType.Unknown;
}
	:	left=multiplicativeExpression { $val = $left.val; } (
			( '+' { type = BinaryExpressionType.Plus; } 
			| '-' { type = BinaryExpressionType.Minus; } ) 
			right=multiplicativeExpression { $val = new BinaryExpression(type, $val, $right.val); } 
			)* 
	;

multiplicativeExpression returns [LogicalExpression val]
@init {
let type = BinaryExpressionType.Unknown;
}
	:	left=unaryExpression { $val = $left.val; } (
			( '*' { type = BinaryExpressionType.Times; } 
			| '/' { type = BinaryExpressionType.Div; } 
			| '%' { type = BinaryExpressionType.Modulo; } )
			right=unaryExpression { $val = new BinaryExpression(type, $val, $right.val); } 
			)* 
	;

	
unaryExpression returns [LogicalExpression val]
	:	WS* ( primaryExpression { $val = $primaryExpression.val; }
    	|	('!' | 'not') primaryExpression { $val = new UnaryExpression(UnaryExpressionType.Not, $primaryExpression.val); }
    	|	('~') primaryExpression { $val = new UnaryExpression(UnaryExpressionType.BitwiseNot, $primaryExpression.val); }
    	|	'-' primaryExpression { $val = new UnaryExpression(UnaryExpressionType.Negate, $primaryExpression.val); } ) WS*
   	;
		
primaryExpression returns [LogicalExpression val]
	:	'(' logicalExpression ')' 	{ $val = $logicalExpression.val; }
	|	expr=value		{ $val = $expr.val; }
	|	identifier {$val = $identifier.val; } (arguments {$val = new NCalcFunction($identifier.val, ($arguments.val)); })?
	;

value returns [ValueExpression val]
	:	FLOAT		{ $val = new ValueExpression(parseFloat($FLOAT.text)); }
	| 	INTEGER		{ try { $val = new ValueExpression(parseInt($INTEGER.text)); } catch(e) { $val = new ValueExpression(parseFloat($INTEGER.text)); } } // @todo support bigint
	|	STRING		{ $val = new ValueExpression(this.ExtractString($STRING.text)); }
	| 	DATETIME	{ $val = new ValueExpression(dayjs($DATETIME.text.substring(1, $DATETIME.text.length-2)).toString(), ValueType.DateTime); }
	|	TRUE		{ $val = new ValueExpression(true); }
	|	FALSE		{ $val = new ValueExpression(false); }
	;

identifier returns[Identifier val]
	: 	ID { $val = new Identifier($ID.text); }
	| 	NAME { $val = new Identifier($NAME.text.substring(1, $NAME.text.length-2)); }
	;

expressionList returns [LogicalExpression[] val = []]
@init {
let expressions = [];
}
	:	first=logicalExpression {expressions.push($first.val);}  ( WS* ',' WS* follow=logicalExpression {expressions.push($follow.val);})* 
	{ $val = expressions; }
	;
	
arguments returns [LogicalExpression[] val = []]
@init {
$val = [];
}
	:	'(' ( expressionList {$val = $expressionList.val;} )? ')' 
	;			

TRUE
	:	'true'
	;

FALSE
	:	'false'
	;
			
ID 
	: 	LETTER (LETTER | DIGIT)*
	;

FLOAT 
	:	DIGIT* '.' DIGIT+ E?
	|	DIGIT+ E
	;

INTEGER
	:	DIGIT+
	;

STRING
	:  	'\'' ( EscapeSequence | ~('\u0000'..'\u001f' | '\\' | '\'' ) )*? '\''
	;

DATETIME 
 	:	'#' .*? '#'
        ;

NAME	:	'[' (~('[' | ']') | NAME)*? ']'
	;

E	:	('E'|'e') ('+'|'-')? DIGIT+ 
	;	

fragment LETTER
	:	'a'..'z'
	|	'A'..'Z'
	|	'_'
	;

fragment EscapeSequence 
	:	'\\'
  	(	
  		'n' 
	|	'r' 
	|	't'
	|	'\'' 
	|	'\\'
	|	UnicodeEscape
	)
  ;

fragment UnicodeEscape
	:    'u' HexDigit HexDigit HexDigit HexDigit ;

fragment HexDigit 
	: 	DIGIT|'a'..'f'|'A'..'F' ;

fragment DIGIT
	:	'0'..'9' ;

/* Ignore white spaces */	
WS	:  (' '|'\r'|'\t'|'\u000C'|'\n')
	;