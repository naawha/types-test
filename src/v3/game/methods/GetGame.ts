import { GameType } from "../types"

export type RequestType = {
  cookie?: string
  gameId?: number
  slug?: string
}

export type ResponseType = GameType
