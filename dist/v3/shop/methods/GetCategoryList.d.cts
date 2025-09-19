import { ShopCategoryType } from '../types.cjs';

type RequestType = {
    cookie?: string;
};
type ResponseType = {
    category: ShopCategoryType[];
};

export type { RequestType, ResponseType };
