import { ISODateTime } from "@/base/datetime"

export interface ForecastSportShortType {
  id: number
  logo: string | null
  name: string
  slug: string
}

export interface ForecastSportType extends ForecastSportShortType {
  forecastable: boolean
}

export interface ForecastCompetitionShortType {
  id: number
  logo: string | null
  name: string
  forecastable: boolean
  slug: string
}

export interface ForecastCompetitionType extends ForecastCompetitionShortType {
  sport: ForecastSportShortType
}

export enum ForecastMatchStatusEnum {
  PLANNED = "PLANNED",
  STARTED = "STARTED",
  FINISHED = "FINISHED",
  POSTPONED = "POSTPONED",
  CANCELED = "CANCELED",
}

export interface ForecastTeamType {
  id: number
  name: string
  nameCode: string
  logo: string | null
  slug: string
}

export enum ForecastMatchResultEnum {
  Draw = 0,
  Home = 1,
  Away = 2,
}

export interface ForecastMatchType {
  matchId: number
  slug: string
  sport: ForecastSportShortType
  competition: ForecastCompetitionShortType
  startStamp: ISODateTime
  matchStatus: ForecastMatchStatusEnum
  homeTeam: ForecastTeamType
  awayTeam: ForecastTeamType
  winner: ForecastMatchResultEnum | null
  resultHome: number | null
  resultAway: number | null
  score: number | null
  forecastable: boolean
}

export interface ForecastResultType {
  outcomeOnly: boolean
  winner: ForecastMatchResultEnum | null
  resultHome: number | null
  resultAway: number | null
}

export interface ForecastMatchForecastType extends ForecastMatchType {
  forecast: ForecastResultType
}
