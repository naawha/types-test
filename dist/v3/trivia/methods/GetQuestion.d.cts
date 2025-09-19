import { TriviaQuestionType } from '../types.cjs';

type RequestType = {
    cookie: string;
};
type ResponseType = TriviaQuestionType;

export type { RequestType, ResponseType };
