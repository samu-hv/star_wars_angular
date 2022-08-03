import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Planet from '../../models/Planet';
import Smuggler from '../../models/Smuggler';
import Spaceship from '../../models/Spaceship';

@Injectable({
  providedIn: 'root'
})
export class ApiConnService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSmugglers(): Observable<Smuggler[]> {
    return this.http
      .get<Smuggler[]>(this.apiUrl + '/smugglers')
      .pipe(catchError(this.handleError));
  }

  getPlanets(): Observable<Planet[]> {
    return this.http
      .get<Planet[]>(this.apiUrl + '/planets')
      .pipe(catchError(this.handleError));
  }

  getSpaceships(): Observable<Spaceship[]> {
    return this.http
      .get<Spaceship[]>(this.apiUrl + '/spaceships')
      .pipe(catchError(this.handleError));
  }

  getSmugglerById(id: number): Observable<Smuggler> {
    return this.http
      .get<Smuggler>(this.apiUrl + `/smugglers/${id}`)
      .pipe(catchError(this.handleError));
  }

  getPlanetById(id: number): Observable<Planet> {
    return this.http
      .get<Planet>(this.apiUrl + `/planets/${id}`)
      .pipe(catchError(this.handleError));
  }

  getSpaceshipById(id: number): Observable<Spaceship> {
    return this.http
      .get<Spaceship>(this.apiUrl + `/spaceships/${id}`)
      .pipe(catchError(this.handleError));
  }

  postSmugglers(smuggler: FormData): Observable<Spaceship> {
    return this.http
      .post<Spaceship>(this.apiUrl + `/smugglers`, smuggler)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
