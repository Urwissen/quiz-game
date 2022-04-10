import React from 'react'

interface Props {
    quesiton: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}

function QuestionCard({quesiton, answer, callback, userAnswer, questionNr, totalQuestions} : Props): JSX.Element{
    return (
        <div>QuestionCard</div>
    )
}

export default QuestionCard