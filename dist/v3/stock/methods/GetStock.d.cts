import { StockType } from '../types.cjs';
import '../../../base/datetime.cjs';
import '../../../base/numbers.cjs';

type RequestType = {
    cookie?: string;
    stockId: number;
    days: number;
};
type ResponseType = StockType;

export type { RequestType, ResponseType };
