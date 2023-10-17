import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreviewContactService {

  private range = 'sheet1!A:z';
  constructor(private httpclient:HttpClient) { }

  save(register :any){
    const requestUrl = `https://sheets.googleapis.com/v4/spreadsheets/1eGrsCdwKoVoRd8ABJ_KavHFOxJL4hGqWe-li-RaGFzc/values/${this.range}:append?valueInputOption=USER_ENTERED&alt=json&key=AIzaSyBzocqf_tWXIefZ2Xw8fEQ6hCHO3lBnwRM`;

    const requestBody ={
      values:[[register.fname,register.lname,register.email,register.phone,register.op1,register.op2]]
    };
    console.log([,requestUrl,requestBody])
    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byBoq2QQ28YedTwRYib_x73c5Y_Ug-cgxgbC1k5X0WJqZ1sPJvrVpOQHpEGDC26Dpi1-Z10V4CDAlHtz68D-b73ROZMDEdEW8DIBlhywNSmUXuqAtiXR7wTvj9lvgkhS3adR-tR7YWyhpP24HlT4Q4oTZ9wYr1w5aCgYKAY0SARESFQGOcNnCB0J6Cp40Jly_23zRxjCTpA0171')

    return this.httpclient.post<any>(requestUrl,requestBody,{
      headers :headers
    })
  }
}
