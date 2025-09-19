import { ScoreMechanicCounterType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
    mechanicApiKey: string;
    periodId?: number;
    periodSlug?: string;
};
type ResponseType = ScoreMechanicCounterType;

export type { RequestType, ResponseType };
