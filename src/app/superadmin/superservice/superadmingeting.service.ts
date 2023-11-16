import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperadmingetingService {

  constructor(private http :HttpClient,private auth :AngularFireAuth) { }

  currentUsser$ = this.auth.authState; // Use this.auth.authState

  public signup='http://localhost:3000/superadmins';
  
  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/users.json';


  /*authentication logic here
  postuser(name:any,loginemail:any,loginpassword:any){
    return from(this.auth.createUserWithEmailAndPassword(loginemail, loginpassword))
  }
  getuser(loginemail:any,loginpassword:any){
    return from(this.auth.signInWithEmailAndPassword(loginemail,loginpassword));
  }*/

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

  loginuser(id:any){
    return this.http.get(this.signup,id);
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