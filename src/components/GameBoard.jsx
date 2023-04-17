import { useState, useRef, useCallback } from 'react';
import classNames from 'classnames';
import Card from './Card';

const data = {
  1: {
    key: 1,
    photographer: 'Anders J.',
    src: 'src/assets/Anders-Jildén.jpg',
  },
  2: {
    key: 2,
    photographer: 'Ben N.',
    src: 'src/assets/Ben-Neale.jpg',
  },
  3: {
    key: 3,
    photographer: 'Chance A.',
    src: 'src/assets/Chance-Anderson.jpg',
  },
  4: {
    key: 4,
    photographer: 'Chris C.',
    src: 'src/assets/Chris-Chondrogiannis.jpg',
  },
  5: {
    key: 5,
    photographer: 'Dmitri P.',
    src: 'src/assets/Dmitri-Popov.jpg',
  },
  6: {
    key: 6,
    photographer: 'Ferdinand S.',
    src: 'src/assets/Ferdinand-Stöhr.jpg',
  },
  7: {
    key: 7,
    photographer: 'Frances G.',
    src: 'src/assets/Frances-Gunn.jpg',
  },
  8: {
    key: 8,
    photographer: 'Guillaume L.',
    src: 'src/assets/Guillaume-Lebelt.jpg',
  },
  9: {
    key: 9,
    photographer: 'Joel F.',
    src: 'src/assets/Joel-Filipe.jpg',
  },
  10: {
    key: 10,
    photographer: 'Julien M.',
    src: 'src/assets/Julien-Moreau.jpg',
  },
  11: {
    key: 11,
    photographer: 'Kevin M.',
    src: 'src/assets/Kevin-Morris.jpg',
  },
  12: {
    key: 12,
    photographer: 'Paul B.',
    src: 'src/assets/Paul-Bergmeir.jpg',
  },
  13: {
    key: 13,
    photographer: 'Samuel Z.',
    src: 'src/assets/Samuel-Zeller.jpg',
  },
  14: {
    key: 14,
    photographer: 'Silvio K.',
    src: 'src/assets/Silvio-Kundt.jpg',
  },
  15: {
    key: 15,
    photographer: 'Steve D.',
    src: 'src/assets/Steve-Driscoll.jpg',
  },
  16: {
    key: 16,
    photographer: 'Teo D.',
    src: 'src/assets/Teo-Duldulao.jpg',
  },
  17: {
    key: 17,
    photographer: 'Tony W.',
    src: 'src/assets/Tony-Webster.jpg',
  },
  18: {
    key: 18,
    photographer: 'Tu Tram P.',
    src: 'src/assets/Tu-Tram-Pham.jpg',
  },
};

function GameBoard({ orderArray, onCardClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const counter = useRef(0);

  const onImageLoad = useCallback(() => {
    counter.current += 1;
    if (counter.current >= Object.keys(data).length) {
      setIsLoading(false);
    }
  }, [counter]);

  return (
    <>
      <div
        className={classNames(
          { hidden: isLoading },
          { block: !isLoading },
          'grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8'
        )}
      >
        {orderArray.map((i) => (
          <Card
            onImageLoad={onImageLoad}
            onCardClick={onCardClick}
            key={data[i].key}
            index={data[i].key}
            photographer={data[i].photographer}
            src={data[i].src}
          />
        ))}
      </div>
      <div
        className={classNames(
          { hidden: !isLoading },
          { block: isLoading },
          'text-center text-zinc-900 dark:text-zinc-200'
        )}
      >
        <p>Loading images...</p>
      </div>
    </>
  );
}

export default GameBoard;
