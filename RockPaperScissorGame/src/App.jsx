import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandRock, faHandPaper,faHandScissors } from '@fortawesome/free-solid-svg-icons';
import './App.css';

// Add the icon to the library (optional but useful if you use icons elsewhere)
library.add(faHandRock,faHandPaper,faHandScissors);

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const str = ['scissors','rock','paper']
  const icons = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };
  const generateRandomIcon = () => {
    const value = Math.floor(Math.random() * 3);
    
    return value
  }
  const handleChoiceOfUser = (choice) => {
      const number = generateRandomIcon()
      setComputerChoice(str[number])
      setUserChoice(choice);
      if(icons[choice] === str[number])
      {
        setUserScore(userScore=>userScore+1)
      }
      else if(icons[str[number]] === choice)
      {
        setComputerScore(computerScore=>computerScore+1)
      }
  }

  return (
    <>
      <div className="container-game">
        <h1>WELCOME TO ROCK, PAPER, SCISSORS GAME</h1>
        <div className='container-button'>
          <button className='button-hand-rock' onClick={()=>{
            handleChoiceOfUser('rock')
          }}><FontAwesomeIcon icon={faHandRock} /> Rock</button>
          <button className='button-hand-paper' onClick={()=>{
            handleChoiceOfUser('paper')
          }}> <FontAwesomeIcon icon={faHandPaper} /> Paper</button>
          <button className='button-hand-scissors' onClick={()=>{
            handleChoiceOfUser('scissors')
          }}> <FontAwesomeIcon icon={faHandScissors} /> Scissors</button>
        </div>
        <h3>Your choice: {userChoice}</h3>
        <h3>Computer's choice: {computerChoice}</h3>
        <h2>Your score: {userScore}</h2>
        <h2>Computer score: {computerScore}</h2>
      </div>
    </>
  );
}

export default App;
