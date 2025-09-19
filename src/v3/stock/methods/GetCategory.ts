import { StockCategoryType } from "../types"

export type RequestType = {
  cookie: string
  categoryId?: number
  categorySlug?: string
}

export type ResponseType = StockCategoryType
