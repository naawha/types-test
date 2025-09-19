import { ShopProductType } from '../types.js';

type RequestType = {
    cookie: string;
    categorySlug?: string;
    categoryId?: number;
};
type ResponseType = {
    product: ShopProductType[];
};

export type { RequestType, ResponseType };
