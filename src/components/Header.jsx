function Header() {
  return (
    <div className="border-b border-zinc-300 bg-zinc-200 p-3 text-center text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
      <h1 className="mb-2 text-4xl ">Memory Game</h1>
      <p>
        Click each card <span className="font-bold">only once</span> to score points.
      </p>
      <p>Your score resets when you lose.</p>
    </div>
  );
}

export default Header;
