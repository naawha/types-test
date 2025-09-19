import { StockCategoryType } from '../types.cjs';
import '../../../base/datetime.cjs';
import '../../../base/numbers.cjs';

type RequestType = {
    cookie: string;
    categoryId?: number;
    categorySlug?: string;
};
type ResponseType = StockCategoryType;

export type { RequestType, ResponseType };
