import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartserviceService {

  constructor(private https:HttpClient) { }

  url='http://localhost:3000/contactreg';
  getData(): Observable<any> {
    return this.https.get(this.url);
  }
}