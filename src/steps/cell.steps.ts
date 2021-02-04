import assert from 'assert';
import { DataTable } from '@cucumber/cucumber';
import { binding, given, then, when } from 'cucumber-tsflow';


import { Game } from '../domain/game';
import { Cell, CellStatus } from '../domain/cell';

@binding()
export class CellSteps {

  game?: Game;

  @given('the following grid')
  givenTheFollowingGrid(data: DataTable) {
    this.game = new Game(
      data.raw() as CellStatus[][]
    );
  }

  @when('player triggers next generation')
  whenPlayerTriggersNextGeneration() {
    this.game?.nextGeneration();
  }

  @then(/central cell should be (.*)/)
  thenCentralCellShouldBe(val: CellStatus) {
    const centerCoordinate = Math.trunc((this.game?.grid.size || 0) / 2);
    const centerCell = this.game?.grid.cellAt(centerCoordinate, centerCoordinate) as Cell;

    assert.strictEqual(centerCell.status, val);
  }

}
