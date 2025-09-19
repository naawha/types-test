export type RequestType = {
  cookie: string
  matchId: number
  winner?: number
  resultHome?: number
  resultAway?: number
}

export type ResponseType = {
  result: boolean
}
