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

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byCtosl7icXfvuKyKQDQ5OAbFcKAvKFr-9VZi0JYpks5MQwMM4vUgRvh5A5VC_8bJur7P7En_bGMR-NFXkumtoQHRnxr3vvJejwxYBzD-Kzwd8khTUFowvYCsZL1o7c8VN9TYoZLtPkqguT6El35dtUeY4cfMP4daCgYKAXsSARESFQGOcNnC_emslHpAZOMMatzQRS3o9A0171')


    return this.httpClient.post<any>(requestUrl, requestBody, {
      headers: headers
    });
  }
}