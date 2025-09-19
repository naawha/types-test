import { ISODate } from '../../../base/datetime.js';
import { ScoreTopHistoryType } from '../types.js';

type RequestType = {
    cookie: string;
    topId?: number;
    topSlug?: string;
    dateFrom: ISODate;
    dateTill: ISODate;
};
type ResponseType = ScoreTopHistoryType;

export type { RequestType, ResponseType };
