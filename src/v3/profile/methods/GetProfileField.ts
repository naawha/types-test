import { ProfileFieldType } from "../types"

export type RequestType = {
  cookie?: string
  slugList: string[]
  userIdList?: number[]
}

export type ResponseType = {
  user: ProfileFieldType[]
}
