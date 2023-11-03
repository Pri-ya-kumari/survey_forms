import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth ,signInWithEmailAndPassword} from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignuserService {

  constructor(private http :HttpClient,private auth :AngularFireAuth) { }

  public signup='http://localhost:3000/signup';
  
  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/users.json';


  postuser(data:any){
    //return this.http.post(this.urls,data);
    return this.http.post(this.urls,data);

  }
  getuser(loginemail:any,loginpassword:any){
    return from(signInWithEmailAndPassword(this.auth,loginemail,loginpassword));
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
