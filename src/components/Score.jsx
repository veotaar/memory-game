function Score({ label, score }) {
  return (
    <div className="p-2 text-center font-bold">
      <h2 className="border-b border-zinc-900 p-1 text-xl dark:border-zinc-100 ">{label}</h2>
      <p className="p-1 text-lg">{score}</p>
    </div>
  );
}

export default Score;
