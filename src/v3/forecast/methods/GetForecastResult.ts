import { ForecastMatchForecastType } from "../types"
import { ISODate } from "@/base/datetime"

export type RequestType = {
  cookie: string
  day?: ISODate
}

export type ResponseType = ForecastMatchForecastType[]
