import { MediaShortType } from "../types"

export type RequestType = {
  cookie?: string
  slug: string
  limit: number
  seenContentId?: number[]
}

export type ResponseType = MediaShortType[]
