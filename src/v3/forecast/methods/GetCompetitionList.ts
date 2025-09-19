import { ForecastCompetitionShortType } from "../types"

export type RequestType = {
  cookie: string
  sportId: number
  limit: number
}

export type ResponseType = ForecastCompetitionShortType[]
