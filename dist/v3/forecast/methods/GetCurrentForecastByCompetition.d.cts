import { ForecastMatchForecastType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
    competitionId: number;
};
type ResponseType = ForecastMatchForecastType[];

export type { RequestType, ResponseType };
