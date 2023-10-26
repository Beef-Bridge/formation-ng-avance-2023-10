import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  interval,
  map,
  of,
  take,
  tap,
  merge,
  mergeAll,
  combineLatest,
  mergeMap,
  concat,
  concatMap,
  switchMap,
  exhaustMap,
} from 'rxjs';

@Component({
  selector: 'app-observables-suite',
  templateUrl: './observables-suite.component.html',
  styleUrls: ['./observables-suite.component.scss']
})
export class ObservablesSuiteComponent {
  constructor(private _http: HttpClient) {}

  ngOnInit() {
    // Merge : une simple émission en parallèle
    // ------------------------------------------------
    const obsvervableA$ = interval(1000).pipe(
      take(3),
      map((valObs) => `ObsA ${valObs}`)
    );
    const obsvervableB$ = interval(1000).pipe(
      take(3),
      map((valObs) => `ObsB ${valObs}`)
    );

    merge(obsvervableA$, obsvervableB$)
      // émission en parrallèle
      .subscribe((valObs) => console.log('merge', valObs));

    // Concat : une émission non plus en parallèle mais séquentielle
    // le 1er observable doit avoir terminé ou envoyer complete
    // avant que le second puisse etre interprété
    // ------------------------------------------------

    concat(obsvervableA$, obsvervableB$)
      // émission  après complete
      .subscribe((valObs) => console.warn('concat', valObs));

    // ------------------------------------------------
    // map - mergeAll - mergeMap - concatmap)
    // ------------------------------------------------
    const API_URL = 'http://localhost:3001/formations';

    // of(1, 2, 3)
    //   .pipe(
    //     map(valObs => this._http.get<any[]>(`${API_URL}/${valObs}`)),
    //     mergeAll()
    //   )
    //   .subscribe(
    //     (valObs) => console.log('map + mergeMap : ', valObs)
    //   )
    // // ---------------------------------------------------
    of(1, 2, 3)
      .pipe(mergeMap((valObs) => this._http.get<any[]>(`${API_URL}/${valObs}`)))
      .subscribe((valObs) => console.log('mergemap : ', valObs));

    // ---------------------------------------------------
    // concatMap

    of(1, 2, 3)
      .pipe(
        concatMap((valObs) => this._http.get<any[]>(`${API_URL}/${valObs}`))
      )
      .subscribe((valObs) => console.log('concatmap : ', valObs));

    //  attention au délai
    // important pour l'ordre

    // -----------------------------
    // 3 requêtes successives (switchAll et map)
    // switchMap stoppe la précédente pour émettre la suivante
    //  donc on aura que la dernière
    // affiché qu'une seule fois le N°3 !!!
    //  la 2  et la 1 sont stoppées
    // query HTTP : pagination => 1 requête par page
    //  le user stoppe
    //  routage aussi

    // ---------------------------------------------------
    of(1, 2, 3)
      .pipe(
        switchMap((valObs) => this._http.get<any[]>(`${API_URL}/${valObs}`))
      )
      .subscribe((valObs) => console.warn('switchmap : ', valObs));

    of(1, 2, 3)
      .pipe(
        exhaustMap((valObs) => this._http.get<any[]>(`${API_URL}/${valObs}`))
      )
      .subscribe((valObs) => console.warn('exhaustmap : ', valObs));
  }
}
