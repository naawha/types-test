import { TriviaAnswerType } from '../types.cjs';

type RequestType = {
    cookie: string;
};
type ResponseType = TriviaAnswerType;

export type { RequestType, ResponseType };
