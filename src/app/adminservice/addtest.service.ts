import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtestService {

  constructor(private http:HttpClient) { }

  url= "http://localhost:3000/addtest";
  
  addtest(res:any){
    return this.http.post(this.url,res);
  }
  gettest(){
    return this.http.get(`${this.url}`); 
  }
}
