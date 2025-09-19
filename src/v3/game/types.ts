import { ISODateTime } from "@/base/datetime"

export interface GameCategoryBaseType {
  id: number
  name: string
  slug: string
}

export interface GameCategoryShortType extends GameCategoryBaseType {
  gameCount: number
}

export interface GameCategoryType extends GameCategoryShortType {
  gameList: GameType
}

export interface GameType {
  id: number
  name: string
  slug: string
  image: string
  description: string
  created: ISODateTime
  available: boolean
  favorite: boolean
  popularity: number
  categoryList: GameCategoryBaseType[]
}
export interface GamePollGameListType extends GameType {
  voteCount: number
  voted: boolean
}

export interface GamePollType {
  name: string
  voteLimit: number
  userVoteCount: number
  gameList: GamePollGameListType[]
}
