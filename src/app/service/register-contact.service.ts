import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { register } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class RegisterContactService {

  private range = 'Sheet1!A:Z';

  constructor(private httpClient: HttpClient) {
  }

  saveFormData(register: any) {
    const requestUrl = `https://sheets.googleapis.com/v4/spreadsheets/1o6kXgTxOp5sVzgt2JDMZBVJHbRnIxppemSlnzED6SBw/values/${this.range}:append?valueInputOption=USER_ENTERED&alt=json&key=AIzaSyDlHv9_tb53PDAWZvGUzmTtv348JC-kRw0`;
    const requestBody = {
      values: [[register.name,register.email,register.password,register.phone]]
    };
    console.log([requestUrl, requestBody])

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byAa_G-GNYvMt4j9BVM4H_Yy4Q_oIUnDxmQ8PUU-IETTXOX1tMuQ9DSNqiCisFQwRlSz7yW_PG_na7JkYRubVg7EYF1prNMc09Ez3XvYF-qomBMCuKB20tHzlmKLDf84Jb0NhEcjpBjWenRcQxhi1q_4GiThnIAwaCgYKAesSARESFQGOcNnCfaHanAcgLqYULQVkir2c-w0171')


    return this.httpClient.post<any>(requestUrl, requestBody, {
      headers: headers
    });
  }
  }
