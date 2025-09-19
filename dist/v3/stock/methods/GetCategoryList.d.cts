import { StockCategoryShortType } from '../types.cjs';
import '../../../base/datetime.cjs';
import '../../../base/numbers.cjs';

type RequestType = {
    cookie?: string;
};
type ResponseType = StockCategoryShortType;

export type { RequestType, ResponseType };
