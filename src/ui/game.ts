import { CellStatus } from '../domain/cell';
import { Game as DomainGame } from '../domain/game';

export class Game extends DomainGame {
  constructor(grid: CellStatus[][]) {
    super(grid);
  }

  print(): void {
    console.log(this.getGridRepresentation());
    console.log(`Generation: ${this.generation}\n`);
  }

  getGridRepresentation(): string {
    return [...this.grid.cells()].reduce(
      (representation, cell, i) =>
        representation +
        (i % this.grid.size === 0 && i > 0
          ? `|\n|${cell.status}`
          : `|${cell.status}`),
      ''
    ) + '|';
  }

}
