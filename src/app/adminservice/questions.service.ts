
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com';

  getQuestions(fid: any) {
    const url = `${this.baseUrl}/question/${fid}.json`; // Assuming the 'fid' should be part of the URL
    return this.http.get(url);
  }

  deleteQuestion(fid: any, questionId: any) {
    const url = `${this.baseUrl}/question/${fid}/${questionId}.json`; // Assuming the 'fid' and 'questionId' should be part of the URL
    return this.http.delete(url);
  }

  sendQuestions(fid: any, questionsToSend: any) {
    const url = `${this.baseUrl}/question/${fid}.json`; // Assuming the 'fid' should be part of the URL
    return this.http.post(url, questionsToSend);
  }
}

