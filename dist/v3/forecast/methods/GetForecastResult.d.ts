import { ForecastMatchForecastType } from '../types.js';
import { ISODate } from '../../../base/datetime.js';

type RequestType = {
    cookie: string;
    day?: ISODate;
};
type ResponseType = ForecastMatchForecastType[];

export type { RequestType, ResponseType };
