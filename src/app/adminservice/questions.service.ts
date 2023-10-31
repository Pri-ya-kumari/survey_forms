import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  Url = 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com';

  getQuestions(fid: any) {
    const url = `${this.Url}/question/${fid}.json`; 
    return this.http.get(url);
  }

  deleteQuestion(fid: any, questionId: any) {
    const url = `${this.Url}/question/${fid}/${questionId}.json`; 
    return this.http.delete(url);
  }

  sendQuestions(fid: any, questionsToSend: any) {
    const url = `${this.Url}/question/${fid}.json`; 
    return this.http.post(url, questionsToSend);
  }
}

