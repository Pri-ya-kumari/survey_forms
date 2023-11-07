import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmincreationService {

  constructor(private http :HttpClient) { }

  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/admin.json';

  post(res:any){
    return this.http.post(this.urls,res);
  }

  getdata(){
    return this.http.get(this.urls);
  }
  getdatas(id:any){
    return this.http.get(this.urls,id);
  }
  updateItem(id: number, updatedData: any) {
    const url = `${this.urls}/${id}`;
    return this.http.put(url, updatedData);
  }
}
