import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http : HttpClient) { }
  url='http://localhost:3000/admin';

  checkadmin(){
    return this.http.get(this.url);
  }
  getadmind(){
    return this.http.get(this.url); 
  }
  getdata(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  updateItem(id: number, updatedData: any) {
    const uurl = `${this.url}/${id}`;
    return this.http.put(uurl, updatedData);
  }
}
