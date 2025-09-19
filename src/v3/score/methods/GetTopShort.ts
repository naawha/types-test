import { ISODate } from "@/base/datetime"
import { ScoreTopType } from "../types"

export type RequestType = {
  cookie: string
  topId?: number
  topSlug?: string
  topOffset?: number
  date?: ISODate
  head: number
  before: number
  after: number
}

export type ResponseType = ScoreTopType
