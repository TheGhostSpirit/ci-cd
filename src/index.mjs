import { Game } from './ui/game.mjs';

const game = new Game([
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
]);

console.log(game.game.grid.getNeighbours(game.game.grid.grid[2][2]))

game.print();
game.nextGeneration();
game.print();
