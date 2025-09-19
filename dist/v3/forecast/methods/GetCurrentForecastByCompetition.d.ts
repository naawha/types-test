import { ForecastMatchForecastType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie: string;
    competitionId: number;
};
type ResponseType = ForecastMatchForecastType[];

export type { RequestType, ResponseType };
