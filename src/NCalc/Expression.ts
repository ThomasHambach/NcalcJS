import {ANTLRErrorListener, ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import {NCalcLexer, NCalcParser} from '@/Grammar';
import {EvaluationException, EvaluationVisitor, LogicalExpression} from '@/NCalc/Domain';
import {EvaluateOptions} from './EvaluationOptions';
import {EvaluateFunctionHandler, EvaluateParameterHandler} from './types';

export class ErrorListener implements ANTLRErrorListener<number> {
  private _errors: any = [];
  public get errors() {
    return this._errors;
  }
  public syntaxError(...args: any) {
    this._errors.push(args);
  }
}

export class Expression {
  private lexerErrors: ErrorListener;

  private parserErrors: ErrorListener;

  public Options: EvaluateOptions = EvaluateOptions.None;

  /**
   * Orginal strings representation of the expression
   */
  protected OriginalExpression: string;

  private static _cacheEnabled: boolean = true;

  private static _compiledExpression: {[key: string]: WeakRef<LogicalExpression>} = {};

  public ParsedExpression: LogicalExpression;

  protected ParameterEnumerators: {[key: string]: any} = {};

  protected ParametersBackup: {[key: string]: object} = {};

  public Parameters: {[key: string]: any} = {};

  public get CacheEnabled() {
    return Expression._cacheEnabled;
  }

  public static get CachedExpressions() {
    return Expression._compiledExpression;
  }

  public set CacheEnabled(value: boolean) {
    Expression._cacheEnabled = value;
    if (value === false) {
      Expression._compiledExpression = {};
    }
  }

  public constructor(expression: LogicalExpression);
  public constructor(expression: string);
  public constructor(expression: LogicalExpression, options: EvaluateOptions);
  public constructor(expression: string, options: EvaluateOptions);
  public constructor(expression: any, options: EvaluateOptions = EvaluateOptions.None) {
    if (expression == null || expression == '') {
      throw new Error('The expression cannot be null or empty');
    }

    if (typeof expression === 'string') {
      this.OriginalExpression = expression;
    } else {
      this.ParsedExpression = expression;
    }

    if (options) {
      this.Options = options;
    }

    this.lexerErrors = new ErrorListener();
    this.parserErrors = new ErrorListener();
  }

  public get errors() {
    return this.lexerErrors.errors.concat(this.parserErrors.errors);
  }

  public Compile(expression: string, nocache: boolean): LogicalExpression {
    let logicalExpression: LogicalExpression | null = null;

    if (this.CacheEnabled && !nocache) {
      try {
        if (Expression._compiledExpression.hasOwnProperty(expression)) {
          const wr = Expression._compiledExpression[expression];
          const stored = wr.deref();
          if (stored && stored !== undefined) {
            return stored;
          }
        }
      } catch (e) {}
    }

    if (logicalExpression == null) {
      // Create the lexer
      let inputStream = new ANTLRInputStream(expression);
      let lexer = new NCalcLexer(inputStream);
      lexer.addErrorListener(this.lexerErrors);

      // Create parser
      let tokenStream = new CommonTokenStream(lexer);
      let parser = new NCalcParser(tokenStream);
      parser.addErrorListener(this.parserErrors);

      logicalExpression = parser.GetExpression();

      if (this.CacheEnabled && !nocache) {
        Expression._compiledExpression[expression] = new WeakRef(logicalExpression);
      }
    }

    return logicalExpression;
  }

  /**
   * Detects whether the expression has errors. This will simply return a boolean value.
   * You can access the error by using the `errors` getter.
   */
  public HasErrors(): boolean {
    try {
      if (this.ParsedExpression == null) {
        this.ParsedExpression = this.Compile(
          this.OriginalExpression,
          (this.Options & EvaluateOptions.NoCache) == EvaluateOptions.NoCache
        );
      }

      if (this.errors.length > 0) {
        throw new Error();
      }

      // In case HasErrors() is called multiple times for the same expression
      return this.ParsedExpression === null || this.ParsedExpression === undefined;
    } catch (e) {
      return true;
    }
  }

  public EvaluateFunction: {[key: string]: EvaluateFunctionHandler} = {};
  public EvaluateParameter: {[key: string]: EvaluateParameterHandler} = {};

  public Evaluate(): any {
    if (this.HasErrors()) {
      throw new EvaluationException('Failed evaluating the expression. Refer to errors.');
    }

    if (this.ParsedExpression == null) {
      this.ParsedExpression = this.Compile(
        this.OriginalExpression,
        (this.Options & EvaluateOptions.NoCache) == EvaluateOptions.NoCache
      );
    }

    var visitor = new EvaluationVisitor(this.Options);
    visitor.EvaluateFunction = this.EvaluateFunction;
    visitor.EvaluateParameter = this.EvaluateParameter;
    visitor.Parameters = this.Parameters;

    // if array evaluation, execute the same expression multiple times
    if ((this.Options & EvaluateOptions.IterateParameters) == EvaluateOptions.IterateParameters) {
      let size = -1;
      this.ParametersBackup = {};
      for (let key in this.Parameters) {
        this.ParametersBackup[key] = this.Parameters[key];
      }

      this.ParameterEnumerators = {};

      for (let parameter in this.Parameters) {
        const value = this.Parameters[parameter];
        if (Array.isArray(value)) {
          let localsize = value.length;
          if (size == -1) {
            size = localsize;
          } else if (localsize != size) {
            throw new EvaluationException(
              'When IterateParameters option is used, IEnumerable parameters must have the same number of items'
            );
          }
        }
      }

      for (let key in this.Parameters) {
        var parameter = this.Parameters[key];
        if (parameter != null) {
          this.ParameterEnumerators[key] = parameter;
        }
      }

      var results = [];
      for (let i = 0; i < size; i++) {
        for (let key in this.ParameterEnumerators) {
          let enumerator = this.ParameterEnumerators[key];
          this.Parameters[key] = enumerator[i];
        }

        this.ParsedExpression.Accept(visitor);
        results.push(visitor.Result);
      }

      return results;
    }

    this.ParsedExpression.Accept(visitor);
    return visitor.Result;
  }
}
