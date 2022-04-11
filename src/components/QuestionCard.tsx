import React from 'react'
import {Props} from "../interfaces"

// INTERFACE
import { Wrapper as IWrapper } from "../interfaces"

// Styles
import { Wrapper, BtnWrapper } from "./QuestionCard.styles"

function QuestionCard({quesiton, answers, callback, userAnswer, questionNr, totalQuestions} : Props): JSX.Element{
    return (
        <Wrapper>
            <p className='number'>Question: {questionNr} / {totalQuestions}</p>
            <pre>{quesiton}</pre>
            <div>
                {answers.map((answer) => (
                    <BtnWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <pre>{answer}</pre>
                        </button>
                    </BtnWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard