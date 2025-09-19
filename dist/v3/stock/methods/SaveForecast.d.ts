import { StockDirectionEnum } from '../types.js';
import '../../../base/datetime.js';
import '../../../base/numbers.js';

type RequestType = {
    cookie: string;
    stockId: number;
    direction: StockDirectionEnum;
};
type ResponseType = null;

export type { RequestType, ResponseType };
