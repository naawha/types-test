import { ISODate } from "@/base/datetime"
import { ScoreTopHistoryType } from "../types"

export type RequestType = {
  cookie: string
  topId?: number
  topSlug?: string
  dateFrom: ISODate
  dateTill: ISODate
}

export type ResponseType = ScoreTopHistoryType
