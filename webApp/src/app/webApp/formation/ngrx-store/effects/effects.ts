import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of, tap } from "rxjs";
import { NgrxEffectsService } from "src/app/sharedModels/services/ngrx-effects.service";

import * as compActions from '../actions/actions';
import { Films } from "src/app/sharedModels/models/class/films";

@Injectable()

export class appEffects {

    constructor(private _serviceEffects: NgrxEffectsService, private _actions: Actions) { }

    // création d'un Observable
    loadFilms$: Observable<any> = createEffect(
        () => {
            // détection des actions invoquées
            return this._actions.pipe(
                tap(
                    (action) => {
                        console.log('******** Actions : ', action);
                    }
                ),
                ofType(
                    // ofType peut filtrer la liste de ce qu'on lui passe
                    compActions.loadFilmsAction
                ),
                mergeMap(
                    action => this._serviceEffects.getFilms$()
                    // on récupère les datas : films
                    .pipe(
                        map(
                            (films:Films[]) => {
                                return compActions.loadFilmsOkAction({films})
                                // c'est l'effect qui passe des datas à l'action
                            }
                        ),
                        catchError(
                            (err) => {
                                // console.log(err);
                                return of(compActions.loadFilmsNotOkAction({err}));

                            }
                        )
                    )
                )
            )
        }
    );
}
