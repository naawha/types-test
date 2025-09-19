import { ProfileSetFieldStatusEnum } from "../types"

export type RequestType = {
  cookie: string
  slug: string
  value: string
}

export type ResponseType = ProfileSetFieldStatusEnum
