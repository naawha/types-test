import { PrizeType } from '../types.js';

type RequestType = {
    cookie: string;
};
type ResponseType = {
    prize: PrizeType[];
};

export type { RequestType, ResponseType };
