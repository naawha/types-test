import { StockDirectionEnum } from "../types"

export type RequestType = {
  cookie: string
  stockId: number
  direction: StockDirectionEnum
}

export type ResponseType = null
