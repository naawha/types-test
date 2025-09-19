import { StockCategoryType } from '../types.js';
import '../../../base/datetime.js';
import '../../../base/numbers.js';

type RequestType = {
    cookie: string;
    categoryId?: number;
    categorySlug?: string;
};
type ResponseType = StockCategoryType;

export type { RequestType, ResponseType };
