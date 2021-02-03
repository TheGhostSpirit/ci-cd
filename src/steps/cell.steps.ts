import { DataTable } from '@cucumber/cucumber';
import { binding, given } from 'cucumber-tsflow';

@binding()
export class CellSteps {

  @given('the following grid')
  givenTheFollowingGrid(data: DataTable) {
    console.log(data);
    return 'TBD';
  }

}
