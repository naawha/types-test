import { ISODate } from '../../../base/datetime.cjs';
import { ScoreTopHistoryType } from '../types.cjs';

type RequestType = {
    cookie: string;
    topId?: number;
    topSlug?: string;
    dateFrom: ISODate;
    dateTill: ISODate;
};
type ResponseType = ScoreTopHistoryType;

export type { RequestType, ResponseType };
