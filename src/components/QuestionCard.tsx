import React from 'react'

interface Props {
    quesiton: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

function QuestionCard({quesiton, answers, callback, userAnswer, questionNr, totalQuestions} : Props): JSX.Element{
    return (
        <div>
            <p className='number'>Question: {questionNr} / {totalQuestions}</p>
            <p>{quesiton}</p>
            <div>
                {answers.map(answer => {
                    <div>
                        <button disabled={userAnswer} onClick={callback}>{answer}</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default QuestionCard