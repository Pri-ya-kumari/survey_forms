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

  public sendquestion(questionsend:any){
    return this.http.post(`${this.url}`,questionsend);
  }
  public delete(test:any){
    return this.http.delete(this.url,test);
  }
  /*postquestion(fid: number, updatedData: any) {
    const uurl = `${this.url}/${fid}`;
    return this.http.post(uurl, updatedData);
  }*/
}
