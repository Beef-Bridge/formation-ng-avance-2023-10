import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changenameAction, initAction } from '../../actions/actions';

@Component({
  selector: 'app-comp-store1',
  templateUrl: './comp-store1.component.html',
  styleUrls: ['./comp-store1.component.scss']
})
export class CompStore1Component {

  public actor:any;
  public isJedi:any;

  constructor(private _store:Store) {}

  ngOnInit() {
    this._store.dispatch(initAction());

    this._store.select(
      (state:any) => {
        return state.root.actor
      }
    ).subscribe(
      (partStateActor) => {
        this.actor = partStateActor
      }
    )
  }

  public changeName = () => {
    this._store.dispatch(
      changenameAction({
        paramNameActionCOMP:`Luke Skylwalker Jedi - Maître ${Math.round(Math.random() * 10)} dans la lignée des Jedi...`
      })
    );
  }

}
