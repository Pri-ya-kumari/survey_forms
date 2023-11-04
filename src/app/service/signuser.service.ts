import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authState } from 'rxfire/auth'; // Import authState from rxfire/auth
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignuserService {

  constructor(private http :HttpClient,private auth :AngularFireAuth) { }

  currentUsser$ = this.auth.authState; // Use this.auth.authState

  public signup='http://localhost:3000/signup';
  
  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/users.json';


  postuser(name:any,loginemail:any,loginpassword:any){
    return from(this.auth.createUserWithEmailAndPassword(loginemail, loginpassword))
  }
  getuser(loginemail:any,loginpassword:any){
    return from(this.auth.signInWithEmailAndPassword(loginemail,loginpassword));
  }

  logout(){
    return from(this.auth.signOut())
  }

  

  Createuser(res:any){
    return this.http.post(this.signup,res);
  }

  loginuser(id:any){
    return this.http.get(this.signup,id);
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

