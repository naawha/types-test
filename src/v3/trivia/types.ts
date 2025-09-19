export enum TriviaAnswerResultEnum {
  CORRECT = "CORRECT",
  WRONG = "WRONG",
  TIMEOUT = "TIMEOUT",
  SKIPPED = "SKIPPED",
}

export interface TriviaAnswerType {
  correct: TriviaAnswerResultEnum
  correctAnswerHistory: TriviaAnswerResultEnum[]
  step: number
  last: boolean
}

export interface TriviaQuestionAnswerType {
  id: number
  answer: string
  file: string
}

export interface TriviaStateType {
  questionsNumber: number
  secondsPerQuestion: number
  step: number
  correctAnswerHistory: TriviaAnswerResultEnum[]
}

export interface TriviaQuestionType extends TriviaStateType {
  question: string
  file: string
  questionStamp: string
  questionMsSpent: number
  answer: TriviaQuestionAnswerType[]
}
