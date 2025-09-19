import { GameCategoryType } from "../types"

export type RequestType = {
  cookie?: string
  categoryId?: number
  slug?: string
}

export type ResponseType = GameCategoryType
