import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuperadminService {

  constructor(private http :HttpClient,private auth :AngularFireAuth) { }

  currentUsser$ = this.auth.authState; // Use this.auth.authState
 
  get(email:any,password:any){
    return from(this.auth.signInWithEmailAndPassword(email,password));
    //return email === 'superadmin@gmail.com' && password ===
  }

  logout(){
    return from(this.auth.signOut())
  }
}
