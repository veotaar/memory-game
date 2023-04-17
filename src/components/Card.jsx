import { BsCameraFill } from 'react-icons/bs';

function Card({ photographer, src, index, onCardClick, onImageLoad }) {
  return (
    <button
      type="button"
      onClick={() => onCardClick(index)}
      className="cursor-pointer rounded-md border border-stone-300 bg-stone-100 p-2 drop-shadow-sm transition-all ease-out hover:scale-105 hover:drop-shadow-md active:scale-100 active:drop-shadow-sm"
    >
      <div className="">
        <img onLoad={onImageLoad} className="rounded" src={src} alt={`Photograph by ${photographer}`} />
      </div>
      <div className="flex items-center justify-center gap-2 p-1">
        <div>
          <BsCameraFill className="text-xl text-stone-500" />
        </div>
        <div>{photographer}</div>
      </div>
    </button>
  );
}

export default Card;
