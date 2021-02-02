import { Game as DomainGame } from '../domain/game.mjs';

export class Game {
  constructor(grid) {
    this.game = new DomainGame(grid);
  }

  nextGeneration() {
    this.game.nextGeneration();
  }

  print() {
    console.log(this.getGridRepresentation());
    console.log(`Generation: ${this.game.generation}\n`);
  }

  getGridRepresentation() {
    return [...this.game.grid.cells()].reduce(
      (representation, cell, i) =>
        representation +
        (i % this.game.grid.size === 0 && i > 0
          ? `|\n|${this.getCellStatusIdentifier(cell)}`
          : `|${this.getCellStatusIdentifier(cell)}`),
      ''
    ) + '|';
  }

  getCellStatusIdentifier(cell) {
    return cell.isAlive ? 'X' : '.';
  }
}
