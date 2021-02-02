import { Cell } from './cell.mjs';

export class Grid {

  constructor(grid) {
    this.grid = grid.map((row, i) => row.map((cell, j) => new Cell(cell, i, j)));
  }

  get size() {
    return this.grid.length;
  }

  *cells() {
    for (const row of this.grid) {
      for (const cell of row) {
        yield cell;
      }
    }
  }

  getNeighbours(cell) {
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

  getLivingNeighbours(cell) {
    return this.getNeighbours(cell).filter(cell => cell.isAlive);
  }

  getDeadNeighbours(cell) {
    return this.getNeighbours(cell).filter(cell => !cell.isAlive);
  }

  insideBoundaries(i, j) {
    return i >= 0 && i < this.size && j >= 0 && j < this.size;
  }

}
