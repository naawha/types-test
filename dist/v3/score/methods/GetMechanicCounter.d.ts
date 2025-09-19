import { ScoreMechanicCounterType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie: string;
    mechanicApiKey: string;
    periodId?: number;
    periodSlug?: string;
};
type ResponseType = ScoreMechanicCounterType;

export type { RequestType, ResponseType };
