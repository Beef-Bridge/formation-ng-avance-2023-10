import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  changenameAction,
  initAction,
  loadFilmsAction,
} from '../../actions/actions';
import { Observable } from 'rxjs';
import {
  selectorGetActor,
  selectorGetFilms,
  selectorGetKO,
  selectorGetLoaded,
} from '../../selectors/selectors';
import { Films } from 'src/app/sharedModels/models/class/films';

@Component({
  selector: 'app-comp-store1',
  templateUrl: './comp-store1.component.html',
  styleUrls: ['./comp-store1.component.scss'],
})
export class CompStore1Component {
  // public actor:any;
  public actor$ = {} as Observable<any>;
  public films$: Observable<Films[]> = {} as Observable<Films[]>;
  public datasLoaded$: Observable<boolean> = {} as Observable<boolean>;
  public error$: Observable<boolean> = {} as Observable<boolean>;

  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(initAction());
    // -------------------
    // this._store.select(
    //   (state:any) => {
    //     return state.root.actor
    //   }
    // ).subscribe(
    //   (partStateActor) => {
    //     this.actor = partStateActor
    //   }
    // )

    // -------------------------------
    // selector
    // this.actor$ = this._store.select((state: any) => {
    //   return state.root.actor;
    // });

    // avec selector
    this.actor$ = this._store.pipe(select(selectorGetActor));
    this.films$ = this._store.pipe(select(selectorGetFilms));
    this.datasLoaded$ = this._store.pipe(select(selectorGetLoaded));
    this.error$ = this._store.pipe(select(selectorGetKO));
  }
  // -------------------------------
  public changeName = () => {
    this._store.dispatch(
      changenameAction({
        paramNameActionCOMP: `Luke Skylwalker Jedi - Maître ${Math.round(
          Math.random() * 10
        )} dans la lignée des Jedi...`,
      })
    );
  };

  // ----------
  public loadFilms = () => {
    this._store.dispatch(loadFilmsAction());
  };
}
