declare enum TriviaAnswerResultEnum {
    CORRECT = "CORRECT",
    WRONG = "WRONG",
    TIMEOUT = "TIMEOUT",
    SKIPPED = "SKIPPED"
}
interface TriviaAnswerType {
    correct: TriviaAnswerResultEnum;
    correctAnswerHistory: TriviaAnswerResultEnum[];
    step: number;
    last: boolean;
}
interface TriviaQuestionAnswerType {
    id: number;
    answer: string;
    file: string;
}
interface TriviaStateType {
    questionsNumber: number;
    secondsPerQuestion: number;
    step: number;
    correctAnswerHistory: TriviaAnswerResultEnum[];
}
interface TriviaQuestionType extends TriviaStateType {
    question: string;
    file: string;
    questionStamp: string;
    questionMsSpent: number;
    answer: TriviaQuestionAnswerType[];
}

export { TriviaAnswerResultEnum, type TriviaAnswerType, type TriviaQuestionAnswerType, type TriviaQuestionType, type TriviaStateType };
