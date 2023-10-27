import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { initAction } from '../../actions/actions';

@Component({
  selector: 'app-comp-store1',
  templateUrl: './comp-store1.component.html',
  styleUrls: ['./comp-store1.component.scss']
})
export class CompStore1Component {

  constructor(private _store:Store) {}

  ngOnInit() {
    this._store.dispatch(initAction())
  }

}
