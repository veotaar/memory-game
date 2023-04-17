function Score({ label, score }) {
  return (
    <div className="p-2 text-center">
      <h2 className="border-b border-gray-800 p-1">{label}</h2>
      <p className="p-1">{score}</p>
    </div>
  );
}

export default Score;
