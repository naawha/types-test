import { TriviaAnswerType } from '../types.js';

type RequestType = {
    cookie: string;
    answerId: number;
};
type ResponseType = TriviaAnswerType;

export type { RequestType, ResponseType };
