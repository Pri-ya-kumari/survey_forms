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

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byB8wSLiEBh5iIzv0JywYP_eC8IqQoNE3F9XdFGol1p4bLQzsalgkn85yDwbtHl9tMTekL4MSzvp5ePNTM7gluFMzxDs8D8m1nlPdhApDhWGU8w2M6LLnlE80XcsGOIRYLMi12zNBM4Thft06KYD20c9yeqSv9BCaCgYKAQUSARESFQGOcNnCPl_MNVB-BZVnQkJj8Frjwg0171')


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