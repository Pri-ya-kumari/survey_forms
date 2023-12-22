import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendquestionService {

  constructor(private http : HttpClient) { }

  Url = 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com';

  sendquestion(fid:any,sendquestionto:any){
    const url = `${this.Url}/surveyformanswer/${fid}.json`; 
    return this.http.post(url, sendquestionto);
  }
  
  getanswer(fid: any) {
    const url= `${this.Url}/surveyformanswer/${fid}.json`; 
    return this.http.get(url);
  }


  getQuestions(fid: any) {
    const url= `${this.Url}/surveyformquestion/${fid}.json`; 
    return this.http.get(url);
  }
}
