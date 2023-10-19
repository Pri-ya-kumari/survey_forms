import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  url = `http://localhost:3000/questions`;
  public getquestion(id: any){
    return this.http.get(this.url,id);
  }

  public sendquestion(data:any){
    return this.http.post(this.url,data);
  }
}
