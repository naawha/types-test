import { ForecastCompetitionType } from "../types"

export type RequestType = {
  cookie: string
  limit: number
}

export type ResponseType = ForecastCompetitionType[]
