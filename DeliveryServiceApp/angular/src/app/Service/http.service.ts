import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class HttpService {
  baseUrl: string;
  constructor(private http: HttpClient) {
  
  }
  Get(url: string): Observable<any> {
    debugger;
    return this.http.get(url, httpOptions);
  }

  Post(url, parameter: any): Observable<any> {
    debugger;
    return this.http.post(url, httpOptions, parameter);
  }
}
