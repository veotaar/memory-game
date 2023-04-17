function Header() {
  return (
    <div className="border-b border-stone-200 bg-stone-100 p-5 text-center shadow-sm">
      <h1 className="mb-2 text-4xl text-stone-800">Memory Game</h1>
      <p>
        Click each card <span className="font-bold">only once</span> to score points.
      </p>
    </div>
  );
}

export default Header;
