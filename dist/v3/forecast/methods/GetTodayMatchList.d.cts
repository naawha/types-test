import { ForecastMatchType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie?: string;
    limit: number;
};
type ResponseType = ForecastMatchType[];

export type { RequestType, ResponseType };
