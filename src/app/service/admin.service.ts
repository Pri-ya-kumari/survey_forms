import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { admin } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  adminlogin(data:admin){
    let result = this.http.post('http://localhost:3000/admin',data)
    //console.warn("result",result);
    //return false
    //console.warn("service called")
  }
}
