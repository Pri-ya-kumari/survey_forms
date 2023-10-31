import {Injectable} from '@angular/core';
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
      values: [[character.fname, character.lname, character.email, character.phone,character.test,character.op1,character.op2,character.op3,character.op4,character.op5,character.op6,character.op7,character.text1,character.text2,character.text3,character.time]]
    };
    console.log([requestUrl, requestBody])

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byBzVCV9jJ8hJUG8c_BLZN2GlZ_JZMa3YwrcuXHsNXMxisX-n9kkrp_IvXkrHqR3ZkSjnMsmyBvq5LFcYBL9WtUUB8pJ5Vky3ClsE2gkQ6wwqHYT9C3_me401YOKc4Z5Y-hUEJgNdtVtza2W12LTg_knt8PGyazraCgYKAcMSARESFQGOcNnC1L9RWAsM_pSVs42bVMy0wA0171')


    return this.httpClient.post<any>(requestUrl, requestBody, {
      headers: headers
    });
  }

  public send='http://localhost:3000/angularformresponses';

  postdata(data:any){
    return this.httpClient.post(this.send,data);
  }
  getdata(){
    return this.httpClient.get(this.send);
  }
}