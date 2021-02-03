import { Game as DomainGame } from '../domain/game.mjs';

export class Game extends DomainGame {
  constructor(grid) {
    super(grid);
  }

  print() {
    console.log(this.getGridRepresentation());
    console.log(`Generation: ${this.generation}\n`);
  }

  getGridRepresentation() {
    return [...this.grid.cells()].reduce(
      (representation, cell, i) =>
        representation +
        (i % this.grid.size === 0 && i > 0
          ? `|\n|${this.getCellStatusIdentifier(cell)}`
          : `|${this.getCellStatusIdentifier(cell)}`),
      ''
    ) + '|';
  }

  getCellStatusIdentifier(cell) {
    return cell.isAlive ? 'X' : '.';
  }
}
