import { Cell } from '../domain/cell';
import { Game as DomainGame } from '../domain/game';

export class Game extends DomainGame {
  constructor(grid: (0 | 1)[][]) {
    super(grid);
  }

  print() {
    console.log(this.getGridRepresentation());
    console.log(`Generation: ${this.generation}\n`);
  }

  getGridRepresentation(): string {
    return [...this.grid.cells()].reduce(
      (representation, cell, i) =>
        representation +
        (i % this.grid.size === 0 && i > 0
          ? `|\n|${this.getCellStatusIdentifier(cell)}`
          : `|${this.getCellStatusIdentifier(cell)}`),
      ''
    ) + '|';
  }

  getCellStatusIdentifier(cell: Cell): 'X' | '.' {
    return cell.isAlive ? 'X' : '.';
  }
}
