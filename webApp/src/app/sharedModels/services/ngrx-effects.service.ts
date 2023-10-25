import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Films } from '../models/class/films';

@Injectable({
  providedIn: 'root'
})
export class NgrxEffectsService {
  constructor(private _http: HttpClient) { }

  // méthodes
  public getFilms$ = (): Observable<Films[]> => {
      const URL_API: string = 'api/films';
      // const URL_API: string = 'api/fiflms';
      // pour générer l'erreur
      return this._http.get<Films[]>(URL_API).pipe(
          delay(3000),
          // délai dans le temps pour simuler un accès réseau plus lent
        );
         
  }
}
