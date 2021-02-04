import { Game } from './ui/game';

const game = new Game([
  ['.', '.', '.', '.', '.'],
  ['.', 'X', 'X', 'X', '.'],
  ['.', 'X', 'X', 'X', '.'],
  ['.', 'X', 'X', 'X', '.'],
  ['.', '.', '.', '.', '.'],
]);

game.print();
game.nextGeneration();
game.print();
game.generation = 0;
game.print();
