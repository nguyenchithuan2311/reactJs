import { useState } from 'react'
import Result from './Result.jsx'
import './App.css'
import Question from './Question.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const qBank = [
    {
      id: 1,
      question: 'What is the capital of Haryana?',
      options: ['Yamunanagar', 'Panipat', 'Gurgaon', 'Chandigarh'],
      answer: 'Chandigarh',
    },
    {
      id: 2,
      question: 'What is the capital of Punjab?',
      options: ['Patiala', 'Ludhiana', 'Amritsar', 'Chandigarh'],
      answer: 'Chandigarh',
    },
  ];

  const handleAnswer = (selectedAnswer) => {
    setAnswer(selectedAnswer);
    setError('');
  };

  const handleNext = () => {
    if (!answer) {
      setError('Please select an answer before submitting.');
      return;
    }
    if(qBank[count].answer==answer)
      {
        setScore(score=>score+1)
      }
    if (count + 1 < qBank.length) {
      setCount(count + 1);
      setAnswer(null); 
      setError(''); 
    } else {
      setShowResult(true);
    }
  };

  return (
    <>
    <h1>QUIZ APP</h1>
      {showResult ? (
        <Result score={score}/>
      ) : (
        <>
          <div>
            <h2>Question {count + 1}</h2>
            <Question
              key={count}
              question={qBank[count].question}
              options={qBank[count].options}
              handleAnswer={handleAnswer}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <button className='submit-button'onClick={handleNext}>Submit</button>
        </>
      )}
    </>
  );
}

export default App
