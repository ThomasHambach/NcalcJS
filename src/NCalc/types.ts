import {FunctionArgs} from './FunctionArgs';
import {ParameterArgs} from './ParameterArgs';

export type EvaluateFunctionHandler = (args: FunctionArgs) => void;
export type EvaluateParameterHandler = (args: ParameterArgs) => void;
