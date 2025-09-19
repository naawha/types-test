import { ForecastMatchType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie?: string;
    limit: number;
};
type ResponseType = ForecastMatchType[];

export type { RequestType, ResponseType };
