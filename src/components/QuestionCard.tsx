import React from 'react'
import {Props} from "../interfaces"

function QuestionCard({quesiton, answers, callback, userAnswer, questionNr, totalQuestions} : Props): JSX.Element{
    console.log("USER ANSWER: ", userAnswer)
    return (
        <div>
            <p className='number'>Question: {questionNr} / {totalQuestions}</p>
            <p>{quesiton}</p>
            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>{answer}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard