import { ShopProductType } from "../types"

export type RequestType = {
  cookie: string
  categorySlug?: string
  categoryId?: number
}

export type ResponseType = {
  product: ShopProductType[]
}
