import { useState } from 'react';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <Header />
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <GameBoard />
    </div>
  );
}
