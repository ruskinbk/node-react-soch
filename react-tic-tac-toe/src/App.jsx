import { useEffect, useState } from 'react';

import './App.css';
import Box from './components/Box';

const winConditions = [
  [0, 1, 2], [0, 3, 6], [1, 4, 7], [3, 5, 8],
  [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6],
];

function App() {
  const [currentState, setCurrentState] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameOver, setIsGameOver] = useState(false);

  const checkWin = () => {
    let won = false;
    for (let i = 0; i < winConditions.length; i++) {
      const win = winConditions[i];
      if (currentState[win[0]] !== '' && currentState[win[0]] === currentState[win[1]] && currentState[win[1]] === currentState[win[2]]) {
        won = true;
        break;
      }
    }
    return won;
  }

  const handleBoxClick = (index) => {
    if (currentState[index] !== '' || isGameOver) return
    setCurrentState(currentState.map((cs, idx) => idx === index ? currentPlayer : cs));
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  useEffect(() => {
    if (checkWin()) {
      setIsGameOver(true);
    }
  }, [currentState])

  return (
    <main>
      <div className='gameboard'>
        {currentState.map((cs, index) => (
          <Box 
            key={index} 
            currentSymbol={cs} 
            onClick={()=>handleBoxClick(index)} 
          />
        ))}
      </div>
    </main>
  )
}

export default App
