import { ISODate } from '../../../base/datetime.cjs';
import { ScoreTopType } from '../types.cjs';

type RequestType = {
    cookie: string;
    topId?: number;
    topSlug?: string;
    topOffset?: number;
    date?: ISODate;
    head: number;
    before: number;
    after: number;
};
type ResponseType = ScoreTopType;

export type { RequestType, ResponseType };
