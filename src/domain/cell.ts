export type CellStatus = 'X' | '.';

export class Cell {

  constructor(
    public status: CellStatus,
    public i: number,
    public j: number
  ) {}

  get isAlive(): boolean {
    return this.status === 'X';
  }

}
