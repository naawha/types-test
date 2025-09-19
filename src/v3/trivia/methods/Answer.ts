import { TriviaAnswerType } from "../types"

export type RequestType = {
  cookie: string
  answerId: number
}

export type ResponseType = TriviaAnswerType
