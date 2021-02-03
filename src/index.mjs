import { Game } from './ui/game.mjs';

const game = new Game([
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
]);

game.print();
game.nextGeneration();
game.print();
game.setGeneration(0);
game.print();
