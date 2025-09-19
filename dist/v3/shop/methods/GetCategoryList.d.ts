import { ShopCategoryType } from '../types.js';

type RequestType = {
    cookie?: string;
};
type ResponseType = {
    category: ShopCategoryType[];
};

export type { RequestType, ResponseType };
