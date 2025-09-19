import { ISODate } from '../../../base/datetime.js';
import { ScoreTopIntermediateHistoryType } from '../types.js';

type RequestType = {
    cookie: string;
    topId?: number;
    topSlug?: number;
    date?: ISODate;
    topOffset?: number;
};
type ResponseType = ScoreTopIntermediateHistoryType;

export type { RequestType, ResponseType };
