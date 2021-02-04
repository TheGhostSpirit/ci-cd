import { Cell, CellStatus } from './cell';
import { Grid } from './grid';

export class Game {
  private _generation = 0;

  get generation() {
    return this._generation;
  }

  set generation(generation: number) {
    this._generation = generation;
    this.grid = this.generations[generation];
  }

  private generations: Grid[] = [];

  grid: Grid;

  constructor(grid: CellStatus[][]) {
    this.grid = new Grid(grid);
  }

  setGrid(grid: CellStatus[][]) {
    this.grid = new Grid(grid);
    this._generation = 0;
    this.generations = [];
  }

  nextGeneration(): void {
    this._generation++;
    this.generations.push(this.grid);

    const nextState: CellStatus[][] = [];
    [...this.grid.cells()]
      .map((cell) => this.applyRules(cell))
      .forEach((val, i) =>
        i % this.grid.size === 0
          ? nextState.push([val])
          : nextState[nextState.length - 1].push(val)
      );

    this.grid = new Grid(nextState);
  }

  applyRules(cell: Cell): CellStatus {
    return this.isLivingOn(cell) || this.isBorn(cell) ? 'X' : '.';
  }

  isInOvercrowding(cell: Cell): boolean {
    return cell.isAlive && this.grid.getLivingNeighbours(cell).length > 4;
  }

  isLivingOn(cell: Cell): boolean {
    return (
      cell.isAlive &&
      [2, 3].includes(this.grid.getLivingNeighbours(cell).length)
    );
  }

  isInUnderpopulation(cell: Cell): boolean {
    return cell.isAlive && this.grid.getLivingNeighbours(cell).length < 2;
  }

  isBorn(cell: Cell): boolean {
    return !cell.isAlive && this.grid.getLivingNeighbours(cell).length === 3;
  }
}
