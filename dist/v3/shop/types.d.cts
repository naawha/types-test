interface ShopCategoryType {
    id: number;
    name: string;
    slug: string;
}
interface ShopProductType {
    id: number;
    name: string;
    slug: string;
    price: number;
    currencySlug: string;
    available: boolean;
    category: ShopCategoryType[];
    clickerItem: object | null;
}

export type { ShopCategoryType, ShopProductType };
