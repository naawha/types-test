import { StockForecastType, StockSourceEnum } from "../types"

export type RequestType = {
  cookie?: string
  source: StockSourceEnum
  text?: string
}

export type ResponseType = StockForecastType[]
