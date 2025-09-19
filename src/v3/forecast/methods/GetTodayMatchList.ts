import { ForecastMatchType } from "../types"

export type RequestType = {
  cookie?: string
  limit: number
}

export type ResponseType = ForecastMatchType[]
