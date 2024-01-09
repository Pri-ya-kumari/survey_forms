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

  public scrators='http://localhost:8000/surveycreators';
  
  Createuser(res:any){
    return this.http.post(this.scrators,res);
  }
  loginuser(id:any){
    return this.http.get(this.scrators,id);
  }
  login(){
    return this.http.get(this.scrators);
  }
  getdata(id:any){
    return this.http.get(`${this.scrators}/${id}`);
  }
  deletedata(id:any){
    return this.http.delete(`${this.scrators}/${id}`);
  }
  updateItem(id: number, updatedData: any) {
    const urls = `${this.scrators}/${id}`;
    return this.http.put(urls, updatedData);
  }

  // mis url here
  misurl='http://localhost:8000/misusers'

  
  getmis(id:any){
    return this.http.get(this.misurl,id);
  }
  postmis(res:any){
    return this.http.post(this.misurl,res);
  }

  surveyusers='http://localhost:8000/surveyusers'

  getsurvuser(id:any){
    return this.http.get(this.surveyusers,id);
  }
  postsurvuser(res:any){
    return this.http.post(this.surveyusers,res);
  }

}
