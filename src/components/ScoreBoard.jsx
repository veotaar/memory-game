import Score from './Score';

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className="flex justify-center gap-40">
      <Score label="Score" score={currentScore} />
      <Score label="High Score" score={highScore} />
    </div>
  );
}

export default ScoreBoard;
