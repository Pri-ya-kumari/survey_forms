import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralulistService {

  constructor(private http :HttpClient) { }

  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/users.json';

  
  getdata(){
    return this.http.get(this.urls);
  }
}
