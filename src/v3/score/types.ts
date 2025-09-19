import { ISODate, ISODateTime, ISOTimeZone } from "@/base/datetime"

export interface ScoreMechanicCounterType {
  available: number
  started: number
}

interface StoreTopDetailsShortType {
  id: number
  name: string
  slug: string
}

interface ScoreTopDetailsType extends StoreTopDetailsShortType {
  periodEnd: ISODate
}

interface ScoreStandingType {
  placement: number
  userId: number
  score: number
  time: ISOTimeZone
  isCurrentUser: boolean
}

export interface ScoreTopType {
  top: ScoreTopDetailsType
  standings: ScoreStandingType[]
}

interface ScoreHistoryType {
  placement: number
  score: number
  time: ISOTimeZone
  date: ISODate
}

export interface ScoreTopHistoryType {
  top: StoreTopDetailsShortType
  history: ScoreHistoryType[]
}

export interface ScoreTopStateDetailsType extends ScoreTopDetailsType {
  total: number
}

export interface ScoreTopStateType {
  score: number
  time: ISOTimeZone
  placement: number
  top: ScoreTopStateDetailsType
}

interface ScoreIntermediateHistoryType {
  score: number
  time: ISODateTime
  stamp: ISOTimeZone
  date: ISODate
}

export interface ScoreTopIntermediateHistoryType {
  top: StoreTopDetailsShortType
  history: ScoreIntermediateHistoryType[]
}
