import { StockShortType } from '../types.js';
import '../../../base/datetime.js';
import '../../../base/numbers.js';

type RequestType = {
    cookie: string;
};
type ResponseType = StockShortType[];

export type { RequestType, ResponseType };
