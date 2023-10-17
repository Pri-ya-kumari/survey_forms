import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
//import { character } from '../data-type';

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

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byBwPZeF6fjt2xqyJrtP1GOwRG7MNX-OPDJK_hoq373X3zl8I7Zynsvn_94limaW_aoyUuoKvwXEMTXE4W4K253uC7L-NyPI9MuXPMNVH2He1DoLPCCVO5GEDv2VdDWoC5yqtwCjrgGsybXbEiveYG2iw4dgWvYQeAaCgYKAQgSARESFQGOcNnCj9-5u-9EahNarec5jTD85Q0173')


    return this.httpClient.post<any>(requestUrl, requestBody, {
      headers: headers
    });
  }
  
}