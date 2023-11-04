import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestuserService {

  constructor(private http:HttpClient) { }

  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/grequest.json';


  postuser(data:any){
    //return this.http.post(this.urls,data);
    return this.http.post(this.urls,data);

  }
  getuser(){
    return this.http.get(this.urls);
  }
}
