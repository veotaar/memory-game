import { BsCameraFill } from 'react-icons/bs';

function Card({ photographer, src }) {
  return (
    <div className="cursor-pointer rounded-md border border-stone-300 bg-stone-100 p-2 drop-shadow-sm transition-all ease-out hover:scale-105 hover:drop-shadow-md active:scale-100 active:drop-shadow-sm">
      <div className="">
        <img className="rounded" src={src} alt={`Photograph by ${photographer}`} />
      </div>
      <div className="flex items-center justify-center gap-2 p-1">
        <div>
          <BsCameraFill className="text-xl text-stone-500" />
        </div>
        <div>{photographer}</div>
      </div>
    </div>
  );
}

export default Card;
