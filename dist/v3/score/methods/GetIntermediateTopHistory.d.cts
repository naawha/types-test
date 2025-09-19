import { ISODate } from '../../../base/datetime.cjs';
import { ScoreTopIntermediateHistoryType } from '../types.cjs';

type RequestType = {
    cookie: string;
    topId?: number;
    topSlug?: number;
    date?: ISODate;
    topOffset?: number;
};
type ResponseType = ScoreTopIntermediateHistoryType;

export type { RequestType, ResponseType };
