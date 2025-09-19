import { ShopProductType } from '../types.cjs';

type RequestType = {
    cookie: string;
    categorySlug?: string;
    categoryId?: number;
};
type ResponseType = {
    product: ShopProductType[];
};

export type { RequestType, ResponseType };
