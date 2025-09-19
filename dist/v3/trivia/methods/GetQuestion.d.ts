import { TriviaQuestionType } from '../types.js';

type RequestType = {
    cookie: string;
};
type ResponseType = TriviaQuestionType;

export type { RequestType, ResponseType };
