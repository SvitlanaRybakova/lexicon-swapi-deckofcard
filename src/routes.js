import { v4 as uuidv4 } from 'uuid';

export const routes = [
  {
    id: uuidv4(),
    name: 'Swapi API',
    path: '/',
  },
  {
    id: uuidv4(),
    name: 'Deckofcards API',
    path: 'deckocard',
  },
];
