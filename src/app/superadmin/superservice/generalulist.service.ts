import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralulistService {

  constructor(private http :HttpClient) { }

  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/users.json';

  url='http://localhost:3000/signup';
  getuser(){
    return this.http.get(this.url);
  }
  getdata(){
    return this.http.get(this.urls);
  }
}
