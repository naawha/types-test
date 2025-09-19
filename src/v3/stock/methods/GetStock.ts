import { StockType } from "../types"

export type RequestType = {
  cookie?: string
  stockId: number
  days: number
}

export type ResponseType = StockType
