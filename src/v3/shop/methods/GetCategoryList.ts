import { ShopCategoryType } from "../types"

export type RequestType = {
  cookie?: string
}

export type ResponseType = {
  category: ShopCategoryType[]
}
