import { ISODate } from '../../../base/datetime.js';
import { ScoreTopType } from '../types.js';

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
