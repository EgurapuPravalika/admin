import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterdataService {
  httpOptions = {
    headers: new HttpHeaders({
         'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json',
    
    })
  }
  constructor(private http:HttpClient) { }
  getDetails():Observable<any>{
return this.http.get(`http://localhost:5000/auth/register`)
}
}
