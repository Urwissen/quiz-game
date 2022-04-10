import React from 'react';
// COMPONENTS
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [number, setNumber] = React.useState(0)
  const [userAnswers, setUserAnswers] = React.useState([])
  const [score, setScore] = React.useState(0)
  const [gameOver, setGameOver] = React.useState(true)

  const startTrivia = async() => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard 
        questionNr={number + 1}
        totalQuestions = {TOTAL_QUESTIONS}
        quesiton={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
