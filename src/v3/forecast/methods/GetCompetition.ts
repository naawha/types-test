import { ForecastCompetitionType } from "../types"

export type RequestType = {
  cookie: string
  competitionId: number
}

export type ResponseType = ForecastCompetitionType
