import { StockCategoryShortType } from '../types.js';
import '../../../base/datetime.js';
import '../../../base/numbers.js';

type RequestType = {
    cookie?: string;
};
type ResponseType = StockCategoryShortType;

export type { RequestType, ResponseType };
