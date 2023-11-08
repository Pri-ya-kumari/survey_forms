import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperadmingetingService {

  constructor(private http:HttpClient) { }


  urls='http://localhost:3000/superadmin';

  getuser(data:any){
    return this.http.get(this.urls,data)
  }
}
