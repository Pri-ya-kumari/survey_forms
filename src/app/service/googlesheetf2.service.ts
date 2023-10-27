import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { character } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class Googlesheetf2Service {

  constructor(private http:HttpClient) { }
  private range = 'Sheet2!A:Z';

  saveFormData(character: any) {
    const requestUrl = `https://sheets.googleapis.com/v4/spreadsheets/1yf-JTqXJ3j6yl7XTrusl3GoriX_nQQdzG4j84Irho1Y/values/${this.range}:append?valueInputOption=USER_ENTERED&alt=json&key=AIzaSyCRlHzRq8b8RKf0_5agbsV2X9xj4NVWLno`;

    const requestBody = {
      values: [[character.fname, character.lname, character.email, character.phone,character.test,character.op1,character.op2,character.op3,character.op4,character.op5,character.op6,character.op7,character.text1,character.text2,character.text3]]
    };
    console.log([requestUrl, requestBody])

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byA2fI8QkIgaegCBtv6l8ToSZyXKLJ-A6rtcyyVKcpOukRNUtNBQyKJV5_62CmVrzaai_jjVbzVSyK26qhfG3dlUcrekZpR5i1-OQn64txi8_Cgo4f-4_lKmTQZf61ZM_JPJsGY5NbsuyFjp6wbtyw96jZBuEfmeaCgYKAaQSARESFQGOcNnC-WPMMtsOU80eEA9nu1dCNA0171')


    return this.http.post<any>(requestUrl, requestBody, {
      headers: headers
    });

}
}
