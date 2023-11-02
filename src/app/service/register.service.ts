import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private range = 'sheet1!A:z';
  constructor(private httpclient:HttpClient) { }

  url='http://localhost:3000/contactreg';
  
  Createuser(res:any){
    return this.httpclient.post(this.url,res);
  }
  usersreg():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url);
  }

}
