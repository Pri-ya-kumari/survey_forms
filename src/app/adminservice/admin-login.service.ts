import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http : HttpClient) { }
  url='http://localhost:3000/admin';

  checkadmin(){
    return this.http.get(this.url);
  }
  getadmind(){
    return this.http.get(this.url); 
  }
  updatedata(id:any){
    return this.http.get(this.url,id);
  }
}
