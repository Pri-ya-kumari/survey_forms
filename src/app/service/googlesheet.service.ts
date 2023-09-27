import {Injectable} from '@angular/core';
//import axios from 'axios';
//import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { character } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class GooglesheetService {

  private range = 'Sheet1!A:Z';

  constructor(private httpClient: HttpClient) {
  }

  saveFormData(character: any) {
    const requestUrl = `https://sheets.googleapis.com/v4/spreadsheets/1F5_TtESFPl0bDorDx4KaVKzVZFtCNVz_c3SMJBUCNqY/values/${this.range}:append?valueInputOption=USER_ENTERED&alt=json&key=AIzaSyB6mBf2ssBec7eqI3BjUZe70ZevSyMLjZE`;

    const requestBody = {
      values: [[character.fname, character.lname, character.email, character.phone,character.test,character.op1,character.op2,character.op3,character.op4,character.op5,character.op6,character.op7,character.text1,character.text2,character.text3]]
    };
    console.log([requestUrl, requestBody])

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byA2wK-O-mzrSEEzhyPsZWePyhyiWoZsY6ZOlqPc_x3KzaaonrQYa7xwR1SfLyyxse2mbmeqL9v0zQNtdT-cP5Lsp6CK7hSwzSYDNXL6Ik_-tf3zXKQLhOB-fMw0gr0cZGo81xHQw2z76sfU2Txp26SV1viubmnqSQaCgYKAT4SARESFQGOcNnC0gfZ2MKKuiyXwcPyeIiP5Q0173')


    return this.httpClient.post<any>(requestUrl, requestBody, {
      headers: headers
    });
  }
}