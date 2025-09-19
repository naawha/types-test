import { StockSourceEnum, StockForecastType } from '../types.cjs';
import '../../../base/datetime.cjs';
import '../../../base/numbers.cjs';

type RequestType = {
    cookie?: string;
    source: StockSourceEnum;
    text?: string;
};
type ResponseType = StockForecastType[];

export type { RequestType, ResponseType };
