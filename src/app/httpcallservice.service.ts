import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpcallserviceService {
  private baseUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.baseUrl}/data`).pipe(
      retry(3), // Retry the request up to 3 times
      catchError(this.handleError) // Handle error and pass it to the error handler
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }

    // Log the error to the console (or send it to your logging infrastructure)
    console.error(errorMessage);

    // Return an observable with a user-facing error message
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
