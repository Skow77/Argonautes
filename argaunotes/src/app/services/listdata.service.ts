import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {

  constructor(private http: HttpClient) { }

  get(): Observable<any>
  {
    return this.http.get<any>("http://localhost:4010");
  }
  post(name:string): Observable<any>
  {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    let body = new URLSearchParams();
    body.set("name", name);
  
    return this.http.post("http://localhost:4010/send", body, options);
  }
}
