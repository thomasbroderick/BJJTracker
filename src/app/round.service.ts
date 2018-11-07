import { Injectable } from '@angular/core';
import { Round } from './models/round';
import {
  HttpClient,
  HttpHeaders
} from '../../node_modules/@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RoundService {
  private url = environment.baseUrl + '/api/rounds';

  index() {
    return this.http.get<Round[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  create(round) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Round>(this.url, round, httpOptions);
  }

  update(round) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.patch<Round>(this.url + '/' + round.id, round, httpOptions);
  }

  destroy(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<Round>(this.url + '/' + id, httpOptions);
  }

  constructor(private http: HttpClient) {}
}
