import { TriviaAnswerType } from '../types.cjs';

type RequestType = {
    cookie: string;
    answerId: number;
};
type ResponseType = TriviaAnswerType;

export type { RequestType, ResponseType };
