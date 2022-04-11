import React from 'react';
import { fetchQuestions } from './API';

// IMPORT COMPONENTS
import QuestionCard from './components/QuestionCard';

// IMPORT INTERFACES & TYPES
import { QuestionState,  Difficulty, AnswerObject } from "./interfaces"

// IMPORT STYLES
import { PageStyle, Wrapper } from "./app.styles"


const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = React.useState(false)
  const [questions, setQuestions] = React.useState<QuestionState[]>([])
  const [number, setNumber] = React.useState(0)
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([])
  const [score, setScore] = React.useState(0)
  const [gameOver, setGameOver] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  const startTrivia = async() => {
    setLoading(true)
    setGameOver(false)
    try {
      const newQuestions = await fetchQuestions(TOTAL_QUESTIONS,Difficulty.EASY)
      resetStates(await newQuestions)
    } catch(e) {
      console.error("FETCH ERROR -> ",e)
      setHasError(true)
    }
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value
      const correct = questions[number].correct_answer === answer
      if (correct) setScore(prev => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    if(number < TOTAL_QUESTIONS - 1) {
      setNumber(prev => prev +1)
    } else {
      setGameOver(true)
    }
  }

  const resetStates = (value: any) => {
    setQuestions(value)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  return (
    <>
      <PageStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
          <button className='start' onClick={startTrivia}>{gameOver ? "Start" : "Restart"}</button> : null
        }
        
        {!gameOver ? 
          <p className='score'>Score: {score}</p> : null
        }

        {loading ? <p>Loading Questions...</p> : null}
        {hasError ? <p>Cant get Questions, try it later</p> : null}
        {!loading && !gameOver ?
            <QuestionCard 
            questionNr={number + 1}
            totalQuestions = {TOTAL_QUESTIONS}
            quesiton={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          /> : null}

        {number < TOTAL_QUESTIONS -1 && !gameOver? 
          <button className='next' onClick={nextQuestion}>Next Question</button> : null
        }
        
      </Wrapper>
    </>
  );
}

export default App;
