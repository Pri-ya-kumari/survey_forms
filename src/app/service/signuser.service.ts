import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth} from '@angular/fire/compat/auth';
 
@Injectable({
  providedIn: 'root'
})
export class SignuserService {

  constructor(private http :HttpClient,private auth :AngularFireAuth) { }

  currentUsser$ = this.auth.authState; // Use this.auth.authState

  public signup='http://localhost:3000/signup';
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
    const urls = `${this.signup}/${id}`;
    return this.http.put(urls, updatedData);
  }
}
