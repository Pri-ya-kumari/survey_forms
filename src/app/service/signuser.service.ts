import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignuserService {

  constructor(private http :HttpClient) { }

  public signup='http://localhost:3000/signup';
  
  /*urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/users.json';


  postuser(data:any){
    //return this.http.post(this.urls,data);
    return this.http.post(this.urls,data);

  }
  getuser(id:any){
    return this.http.get(this.urls,id);
  }*/




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
