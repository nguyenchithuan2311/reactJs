import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

// Thêm các biểu tượng vào thư viện Font Awesome
library.add(faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix);

class App extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  constructor(props) {
    super(props);
    this.state = {
      die1: 'one', // Mặt xúc xắc 1
      die2: 'two', // Mặt xúc xắc 2
      rolling1: false, // Trạng thái quay
      rolling2: false, // Trạng thái quay
    };
  }
  generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1; 
  };

  handleDice = () =>
  {
    const { sides } = this.props;  
    const die1Temp = sides[this.generateRandomNumber()-1];  
    const die2Temp = sides[this.generateRandomNumber()-1];

    this.setState({
      die1: die1Temp,
      die2: die2Temp,
      rolling1: true,
      rolling2: true, 
    });
    setTimeout(() => {
      this.setState({
        rolling1: false,
        rolling2: false,
      });
    }, 500);
  }

  render() {
    const { die1, rolling1 } = this.state;
    const { die2, rolling2 } = this.state;
    

    return (
      <>
      <div className='container-die'>
        <FontAwesomeIcon
          icon={['fas', `fa-dice-${die1}`]} 
          className={`Die ${rolling1 ? 'Die-shaking' : ''}`} 
        />

        <FontAwesomeIcon
          icon={['fas', `fa-dice-${die2}`]} 
          className={`Die ${rolling2 ? 'Die-shaking' : ''}`} 
        />
      </div>

      <button onClick={this.handleDice} className='Rolling-button'> Rolling Dice</button>
      </>
    );
  }
}

export default App;
