import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Apartment } from './../model/apartment';

@Injectable()
export class ApartmentService {
  apiURL = '/api/apartment';

  private apartments: Apartment[] = new Array<Apartment>();
  apartmentChanges = new Subject<Apartment[]>();

  constructor(private httpClient: HttpClient) {}

  getApartmentList() {
    console.log('getApartments');
    this.httpClient
      .get<Apartment[]>(this.apiURL + '/list')
      .subscribe((apartments) => {
        console.log(apartments);
        apartments.forEach((apartment) => {
          this.apartments.push(apartment);
        });
        this.apartmentChanges.next(this.getApartments());
      });
  }

  getApartmentListOB(): Observable<Apartment[]> {
    console.log('getApartments');
    return this.httpClient.get<Apartment[]>(this.apiURL + '/list');
  }

  getApartments() {
    return this.apartments.slice();
  }

  public getApartment(id: number): Observable<Apartment> {
    return this.httpClient.get<Apartment>(this.apiURL + '/' + id);
  }

  public addApartment(apartment: Apartment) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    this.httpClient
      .post<Apartment>(this.apiURL + '/add', Apartment, options)
      .pipe(catchError(this.handleError))
      .subscribe((value) => {
        this.apartmentChanges.next(this.getApartments());
      });
  }

  public editApartment(apartment: Apartment) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    this.httpClient
      .put<Apartment>(this.apiURL + '/update', Apartment, options)
      .pipe(catchError(this.handleError))
      .subscribe((value) => {
        this.apartmentChanges.next(this.getApartments());
      });
  }

  public deleteApartments(index: number): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(this.apiURL + '/delete/' + index);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
