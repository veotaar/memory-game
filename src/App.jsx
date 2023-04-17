import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';
import randomArray from './utils/randomArray';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [orderArray, setOrderArray] = useState(randomArray(18));

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore]);

  const onCardClick = useCallback(
    (cardIndex) => {
      if (clicked.includes(cardIndex)) {
        setCurrentScore(0);
        setClicked([]);
      } else {
        setCurrentScore(currentScore + 1);
        setClicked([...clicked, cardIndex]);
      }
      setOrderArray(randomArray(18));
    },
    [clicked, currentScore]
  );

  return (
    <div>
      <Header />
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <GameBoard orderArray={orderArray} onCardClick={onCardClick} />
    </div>
  );
}
