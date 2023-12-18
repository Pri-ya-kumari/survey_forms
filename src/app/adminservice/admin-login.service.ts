import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http : HttpClient) { }
  public urls='http://localhost:3000/admins';

  checkadmin(){
    return this.http.get(this.urls);
  }
  loginuser(id:any){
    return this.http.get(this.urls,id);
  }
  getadmind(){
    return this.http.get(this.urls); 
  }
  getdata(id:any){
    return this.http.get(`${this.urls}/${id}`);
  }
  updateItem(id: number, updatedData: any) {
    const uurl = `${this.urls}/${id}`;
    return this.http.put(uurl, updatedData);
  }
}
