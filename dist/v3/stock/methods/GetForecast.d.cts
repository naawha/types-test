import { StockShortType } from '../types.cjs';
import '../../../base/datetime.cjs';
import '../../../base/numbers.cjs';

type RequestType = {
    cookie: string;
};
type ResponseType = StockShortType;

export type { RequestType, ResponseType };
