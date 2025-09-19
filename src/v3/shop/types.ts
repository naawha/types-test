export interface ShopCategoryType {
  id: number
  name: string
  slug: string
}

export interface ShopProductType {
  id: number
  name: string
  slug: string
  price: number
  currencySlug: string
  available: boolean
  category: ShopCategoryType[]
  clickerItem: object | null
}
