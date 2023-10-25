import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Films } from '../models/class/films';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {

  constructor(private _http: HttpClient) { }

  public getFilms$ = (): Observable<Films[]> => {

    const URL_API: string = 'http://localhost:3001/films1';
    return this._http.get<Films[]>(URL_API)
      .pipe(
        tap(
          (responseHttp) => console.log('Response HTTP : ', responseHttp))
      );
  }
}