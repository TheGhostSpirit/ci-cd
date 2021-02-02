import { Grid } from './grid.mjs';

export class Game {
  generation = 0;
  generations = [];

  constructor(grid) {
    this.grid = new Grid(grid);
  }

  nextGeneration() {
    this.generation++;
    this.generations.push(this.grid);

    const nextState = [...this.grid.cells()]
      .map((cell) => this.applyRules(cell))
      .reduce(
        (matrix, val, i) =>
          (i % this.grid.size === 0
            ? matrix.push([val])
            : matrix[matrix.length - 1].push(val))
          && matrix,
        []
      );

    this.grid = new Grid(nextState);
  }

  applyRules(cell) {
    return this.isLivingOn(cell) || this.isBorn(cell) ? 1 : 0;
  }

  isInOvercrowding(cell) {
    return cell.isAlive && this.grid.getLivingNeighbours(cell).length > 4;
  }

  isLivingOn(cell) {
    return (
      cell.isAlive && [2, 3].includes(this.grid.getLivingNeighbours(cell).length)
    );
  }

  isInUnderpopulation(cell) {
    return cell.isAlive && this.grid.getLivingNeighbours(cell).length < 2;
  }

  isBorn(cell) {
    return !cell.isAlive && this.grid.getLivingNeighbours(cell).length === 3;
  }
}
