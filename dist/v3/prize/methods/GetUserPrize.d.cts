import { PrizeType } from '../types.cjs';

type RequestType = {
    cookie: string;
};
type ResponseType = {
    prize: PrizeType[];
};

export type { RequestType, ResponseType };
