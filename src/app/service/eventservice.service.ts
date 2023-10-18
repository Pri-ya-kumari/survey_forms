import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  private range = 'sheet1!A:z';
  constructor(private httpclient:HttpClient) { }

  save(register :any){
    const requestUrl = `https://sheets.googleapis.com/v4/spreadsheets/1SIHf2Bkk-r41jCtYXefdpJ1dYZNJsDUvHDQq3LARrSQ/values/${this.range}:append?valueInputOption=USER_ENTERED&alt=json&key=AIzaSyALyxDDNthFKzBatN-EH9vKNKcmJLyut4Y`;

    const requestBody ={
      values:[[register.name,register.email,register.password,register.phone]]
    };
    console.log([,requestUrl,requestBody])
    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byAt23PZIbGJfN5Q2UpMcbh1NsnIBTsVQfGcnAY0S2Ery7N1hdKfnSaFjTFvh0gBri7ucY5CTFxIwhxtAb9_wyynNyEaB6vdJdo-_UPU4_XzI12__2NcgdT9_TCEN5XLQUAe84ynt7L8x0TVVRThge8ieZ-z1-JRaCgYKAZASARESFQGOcNnCvqKssuJ3ClMm-9jryBMMqA0171')

    return this.httpclient.post<any>(requestUrl,requestBody,{
      headers :headers
    })
  }
}
