import { ForecastMatchForecastType } from "../types"

export type RequestType = {
  cookie: string
  competitionId: number
}

export type ResponseType = ForecastMatchForecastType[]
