import { ForecastSportType } from '../types.js';
import '../../../base/datetime.js';

type RequestType = {
    cookie?: string;
};
type ResponseType = ForecastSportType[];

export type { RequestType, ResponseType };
