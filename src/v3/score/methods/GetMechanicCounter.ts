import { ScoreMechanicCounterType } from "../types"

export type RequestType = {
  cookie: string
  mechanicApiKey: string
  periodId?: number
  periodSlug?: string
}

export type ResponseType = ScoreMechanicCounterType
