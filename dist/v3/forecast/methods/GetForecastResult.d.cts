import { ForecastMatchForecastType } from '../types.cjs';
import { ISODate } from '../../../base/datetime.cjs';

type RequestType = {
    cookie: string;
    day?: ISODate;
};
type ResponseType = ForecastMatchForecastType[];

export type { RequestType, ResponseType };
