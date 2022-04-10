import { Difficulty, Question } from "./interfaces"
import { shuffleArray } from "./utils"

export const fetchQuestions = async(amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json()
    console.log(data)
    return data.results.map((question: Question) => (
        {
            ...question, 
            answers: shuffleArray([
                ...question.incorrect_answers, 
                question.correct_answer]) 
        }
        
    ))
} 