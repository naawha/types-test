import { ScoreTopStateType } from "../types"

export type RequestType = {
  cookie: string
  topId?: number
  topSlug?: string
}

export type ResponseType = ScoreTopStateType
