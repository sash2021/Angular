import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { IEmployee } from '../employee';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { catchError } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>('http://localhost:3000/allusers');
  }

  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || 'Server Error');
  // }
}
