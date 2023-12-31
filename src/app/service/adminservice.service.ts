import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http :HttpClient,private auth :AngularFireAuth) { }

  currentUsser$ = this.auth.authState; // Use this.auth.authState

  public signup='http://localhost:3000/admins';
  
  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/users.json';

  public nodeurl = 'http://localhost:8000/admin';

  loginuser(email:any){
    return this.http.get(this.nodeurl,email);
  }

  logout(){
    return from(this.auth.signOut())
  }

  post(res:any){
    return this.http.post(this.urls,res);
  }
  
  getlogin(id:any){
    return this.http.get(this.urls,id);
  }
  
  getUsers(){
    return this.http.get(this.urls);
  }

  Createuser(res:any){
    return this.http.post(this.signup,res);
  }

  loginuses(){
    return this.http.get(this.signup);
  }
  getdata(id:any){
    return this.http.get(`${this.signup}/${id}`);
  }
  deletedata(id:any){
    return this.http.delete(`${this.signup}/${id}`);
  }
  updateItem(id: number, updatedData: any) {
    const url = `${this.signup}/${id}`;
    return this.http.put(url, updatedData);
  }
/*
  update(Id:any){
    return this.http.put(`${this.signup}/${Id}`);
  }*/
}
function signInWithEmailAndPassword(auth: AngularFireAuth, loginemail: any, loginpassword: any): any {
}
