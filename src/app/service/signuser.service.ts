import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignuserService {

  constructor(private http :HttpClient) { }

  public signup='http://localhost:3000/signup';
  

  Createuser(res:any){
    return this.http.post(this.signup,res);
  }

  loginuser(){
    return this.http.get(this.signup);
  }

  deletedata(id:any){
    return this.http.delete(this.signup,id);
  }
}
