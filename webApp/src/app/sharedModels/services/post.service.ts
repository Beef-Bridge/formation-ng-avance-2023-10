import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _http: HttpClient) {}

  public postForm = (form: FormGroup) => {
    console.log(form.value);

    // --- Post sur un serveur json
    // 1-url
    const url: string = 'http://localhost:3001/messages';
    // 2-body
    const body = JSON.stringify(form.value);
    console.warn('Service : ', body);

    // 3-headers
    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    const options = { headers: myHeaders };

    this._http
      .post(url, body, options)
      .subscribe((res: any) => console.log(res));
  };
}
