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
  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/addtest.json';

  postdata(data:any[]){
    //return this.http.post(this.urls,data);
    return this.http.post(this.urls,data);

  }
  getdata(){
    return this.http.get(this.urls);
  }
}
