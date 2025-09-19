import { TriviaStateType } from '../types.cjs';

type RequestType = {
    cookie: string;
};
type ResponseType = TriviaStateType;

export type { RequestType, ResponseType };
