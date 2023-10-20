import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  url = `http://localhost:3000/questions`;
  public getquestion(fid: any){
    return this.http.get(this.url,fid);
  }

  public sendquestion(data:any){
    return this.http.post(this.url,data);
  }
  public delete(test:any){
    return this.http.delete(this.url,test);
  }
}
