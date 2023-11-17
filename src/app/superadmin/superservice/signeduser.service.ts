import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SigneduserService {
  constructor(private http :HttpClient,private auth :AngularFireAuth) { }

  currentUsser$ = this.auth.authState; // Use this.auth.authState

  public signup='http://localhost:3000/signup';
  

  Createuser(res:any){
    return this.http.post(this.signup,res);
  }
  loginuser(id:any){
    return this.http.get(this.signup,id);
  }
  loginuses(){
    return this.http.get(this.signup);
  }
  getdata(id:any){
    return this.http.get(`${this.signup}/${id}`);
  }
  getdeta(){
    return this.http.get(this.signup);
  }
  deletedata(id:any){
    return this.http.delete(`${this.signup}/${id}`);
  }
  updateItem(id: number, updatedData: any) {
    const url = `${this.signup}/${id}`;
    return this.http.put(url, updatedData);
  }

}