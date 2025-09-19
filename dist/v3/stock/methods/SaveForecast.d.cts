import { StockDirectionEnum } from '../types.cjs';
import '../../../base/datetime.cjs';
import '../../../base/numbers.cjs';

type RequestType = {
    cookie: string;
    stockId: number;
    direction: StockDirectionEnum;
};
type ResponseType = null;

export type { RequestType, ResponseType };
