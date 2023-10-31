import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  url = `http://localhost:3000/questions`;
  urls= `https://survey-forms-3ecc3-default-rtdb.firebaseio.com/question.json`;

  postquestioon(fid:any,data:any){
    return this.http.post(`${this.urls}/${fid}`,data);
  }

  /*
  postquestioon(data:any){
    return this.http.post(this.urls,data);
  }*/
  public getquestion(fid: any){
    return this.http.get(this.url,fid);
  }
  public delete(test:any){
    return this.http.delete(this.url,test);
  }
  public sendquestion(questionsend: any, fid: any) {
  return this.http.post(`${this.url}/${fid}`, questionsend);
}
}
