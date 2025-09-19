import { ISODate } from "@/base/datetime"
import { ScoreTopIntermediateHistoryType } from "../types"

export type RequestType = {
  cookie: string
  topId?: number
  topSlug?: number
  date?: ISODate
  topOffset?: number
}

export type ResponseType = ScoreTopIntermediateHistoryType
