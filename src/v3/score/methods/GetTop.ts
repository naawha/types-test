import { ISODate } from "@/base/datetime"
import { ScoreTopType } from "../types"

export type RequestType = {
  cookie: string
  topId?: number
  topSlug?: string
  topOffset?: number
  date?: ISODate
  limit: number
}

export type ResponseType = ScoreTopType
