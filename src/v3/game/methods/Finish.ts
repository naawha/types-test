export type RequestType = {
  cookie: string
  sessionId: number
  score: number
  log: {
    startTime: number
    endTime: number
    gameTime: number
  }[]
}

export type ResponseType = null
