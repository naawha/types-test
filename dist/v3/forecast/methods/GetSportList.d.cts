import { ForecastSportType } from '../types.cjs';
import '../../../base/datetime.cjs';

type RequestType = {
    cookie?: string;
};
type ResponseType = ForecastSportType[];

export type { RequestType, ResponseType };
