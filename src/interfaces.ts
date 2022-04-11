// INTERFACE FOR QUESTION QUERY

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

// INTERFACE FOR QUESTION CARD PROPS
export interface Props {
    quesiton: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNr: number,
    totalQuestions: number,
}

// INTERFACE FOR QUESTION FETCHING RESPONSE
export interface Question {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string     
}

export type QuestionState = Question & {answers: string[]}

export interface AnswerObject {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string
}

// STYLES 
export interface Wrapper {
    correct: boolean,
    userClicked: boolean
}