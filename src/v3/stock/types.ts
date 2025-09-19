import { ISODate, ISODateTime, ISOTime } from "@/base/datetime"
import { Float } from "@/base/numbers"

export interface StockCategoryShortType {
  id: number
  name: string
  slug: string
}

export interface StockRateType {
  stamp: ISODateTime
  rate: Float
  change: Float
  changePercent: Float
}

export interface StockForecastType {
  direction: number
  rate: Float
  stamp: ISODateTime
  score: number
}

export interface StockShortType {
  id: number
  symbol: string
  icon: string | null
  name: string
  forecastable: boolean
  currency: string
  favorite: boolean
  rate: StockRateType
  forecast: StockForecastType | null
}

export interface StockCategoryType extends StockCategoryShortType {
  stocks: StockShortType[]
}

export interface StockTodayGameType {
  upVoteCount: number
  downVoteCount: number
}

export interface StockGraphType {
  time: ISODateTime
  rate: Float
}

export interface StockCandleType {
  stamp: ISODate
  low: Float
  high: Float

  open: Float
  close: Float
}

export interface StockType extends StockShortType {
  todayGame: StockTodayGameType | null
  graph: StockGraphType[]
  candles: StockCandleType[]
}

export enum StockDirectionEnum {
  UP = "UP",
  DOWN = "DOWN",
}

export enum StockSourceEnum {
  MOEX = "MOEX",
  MOEX_CURRENCY = "MOEX_CURRENCY",
}

export interface StockTradeScheduleType {
  date: ISODate
  exchange: string
  open: ISOTime
  close: ISOTime
}
