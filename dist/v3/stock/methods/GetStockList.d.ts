import { StockSourceEnum, StockForecastType } from '../types.js';
import '../../../base/datetime.js';
import '../../../base/numbers.js';

type RequestType = {
    cookie?: string;
    source: StockSourceEnum;
    text?: string;
};
type ResponseType = StockForecastType[];

export type { RequestType, ResponseType };
