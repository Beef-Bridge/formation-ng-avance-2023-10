import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initAction } from '../../actions/actions';

@Component({
  selector: 'app-comp-store2',
  templateUrl: './comp-store2.component.html',
  styleUrls: ['./comp-store2.component.scss']
})
export class CompStore2Component {

  public actor$ = {} as Observable<any>;

  constructor(private _store: Store) {}

  ngOnInit() {
    this.actor$ = this._store.select((state: any) => {
      return state.root.actor;
    });
  }

}
