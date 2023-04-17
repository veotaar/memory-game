import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

const data = {
  1: {
    key: uuidv4(),
    photographer: 'Anders J.',
    src: 'src/assets/Anders-Jildén.jpg',
  },
  2: {
    key: uuidv4(),
    photographer: 'Ben N.',
    src: 'src/assets/Ben-Neale.jpg',
  },
  3: {
    key: uuidv4(),
    photographer: 'Chance A.',
    src: 'src/assets/Chance-Anderson.jpg',
  },
  4: {
    key: uuidv4(),
    photographer: 'Chris C.',
    src: 'src/assets/Chris-Chondrogiannis.jpg',
  },
  5: {
    key: uuidv4(),
    photographer: 'Dmitri P.',
    src: 'src/assets/Dmitri-Popov.jpg',
  },
  6: {
    key: uuidv4(),
    photographer: 'Ferdinand S.',
    src: 'src/assets/Ferdinand-Stöhr.jpg',
  },
  7: {
    key: uuidv4(),
    photographer: 'Frances G.',
    src: 'src/assets/Frances-Gunn.jpg',
  },
  8: {
    key: uuidv4(),
    photographer: 'Guillaume L.',
    src: 'src/assets/Guillaume-Lebelt.jpg',
  },
  9: {
    key: uuidv4(),
    photographer: 'Joel F.',
    src: 'src/assets/Joel-Filipe.jpg',
  },
  10: {
    key: uuidv4(),
    photographer: 'Julien M.',
    src: 'src/assets/Julien-Moreau.jpg',
  },
  11: {
    key: uuidv4(),
    photographer: 'Kevin M.',
    src: 'src/assets/Kevin-Morris.jpg',
  },
  12: {
    key: uuidv4(),
    photographer: 'Paul B.',
    src: 'src/assets/Paul-Bergmeir.jpg',
  },
  13: {
    key: uuidv4(),
    photographer: 'Samuel Z.',
    src: 'src/assets/Samuel-Zeller.jpg',
  },
  14: {
    key: uuidv4(),
    photographer: 'Silvio K.',
    src: 'src/assets/Silvio-Kundt.jpg',
  },
  15: {
    key: uuidv4(),
    photographer: 'Steve D.',
    src: 'src/assets/Steve-Driscoll.jpg',
  },
  16: {
    key: uuidv4(),
    photographer: 'Teo D.',
    src: 'src/assets/Teo-Duldulao.jpg',
  },
  17: {
    key: uuidv4(),
    photographer: 'Tony W.',
    src: 'src/assets/Tony-Webster.jpg',
  },
  18: {
    key: uuidv4(),
    photographer: 'Tu Tram P.',
    src: 'src/assets/Tu-Tram-Pham.jpg',
  },
};

function GameBoard() {
  const arr = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-2 gap-4 p-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
      {arr.map((i) => (
        <Card key={data[i].key} photographer={data[i].photographer} src={data[i].src} />
      ))}
    </div>
  );
}

export default GameBoard;
