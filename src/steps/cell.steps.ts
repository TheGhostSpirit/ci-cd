import assert from 'assert';
import { DataTable } from '@cucumber/cucumber';
import { binding, given, then, when } from 'cucumber-tsflow';


import { Game } from '../domain/game';
import { Cell } from '../domain/cell';

@binding()
export class CellSteps {

  game?: Game;

  @given('the following grid')
  givenTheFollowingGrid(data: DataTable) {
    this.game = new Game(
      data.rows().map(rows => 
        rows.map(symbol => this.symbolToBit(symbol as 'X' | '.'))
      )
    );
  }

  @when('player triggers next generation')
  whenPlayerTriggersNextGeneration() {
    this.game?.nextGeneration();
  }

  @then(/central cell should be (.*)/)
  thenCentralCellShouldBe(val: 'X' | '.') {
    const centerCoordinate = Math.trunc((this.game?.grid.size || 0) / 2);
    const centerCell = this.game?.grid.cellAt(centerCoordinate, centerCoordinate) as Cell;

    assert.strictEqual(this.cellStatusToBit(centerCell), this.symbolToBit(val));
  }

  private cellStatusToBit(cell: Cell): 0 | 1 {
    return cell.isAlive ? 1 : 0;
  }

  private symbolToBit(symbol: 'X' | '.'): 0 | 1 { 
    return symbol === 'X' ? 1 : 0;
  }

}
