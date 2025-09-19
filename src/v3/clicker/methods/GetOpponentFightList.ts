import { ClickerFightHistoryType } from "../types"

export type RequestType = {
  cookie: string
  stamp?: string
}

export type ResponseType = ClickerFightHistoryType[]
