import { Cell } from './cell';

export class Grid {

  private grid: Cell[][];

  constructor(grid: (0 | 1)[][]) {
    this.grid = grid.map((row, i) => row.map((cell, j) => new Cell(!!cell, i, j)));
  }

  get size(): number {
    return this.grid.length;
  }

  *cells() {
    for (const row of this.grid) {
      for (const cell of row) {
        yield cell;
      }
    }
  }

  cellAt(i: number, j: number): Cell {
    return this.grid[i][j];
  }

  getLivingNeighbours(cell: Cell): Cell[] {
    return this.getNeighbours(cell).filter(cell => cell.isAlive);
  }

  getDeadNeighbours(cell: Cell): Cell[] {
    return this.getNeighbours(cell).filter(cell => !cell.isAlive);
  }

  private getNeighbours(cell: Cell): Cell[] {
    return [
      { i: cell.i + 1, j: cell.j },
      { i: cell.i + 1, j: cell.j - 1 },
      { i: cell.i + 1, j: cell.j + 1 },
      { i: cell.i, j: cell.j - 1 },
      { i: cell.i, j: cell.j + 1 },
      { i: cell.i - 1, j: cell.j },
      { i: cell.i - 1, j: cell.j - 1 },
      { i: cell.i - 1, j: cell.j + 1 }
    ]
      .filter(ij => this.insideBoundaries(ij.i, ij.j))
      .map(ij => this.grid[ij.i][ij.j]);
  }

  private insideBoundaries(i: number, j: number): boolean {
    return i >= 0 && i < this.size && j >= 0 && j < this.size;
  }

}
