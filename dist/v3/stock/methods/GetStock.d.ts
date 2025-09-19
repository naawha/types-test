import { StockType } from '../types.js';
import '../../../base/datetime.js';
import '../../../base/numbers.js';

type RequestType = {
    cookie?: string;
    stockId: number;
    days: number;
};
type ResponseType = StockType;

export type { RequestType, ResponseType };
