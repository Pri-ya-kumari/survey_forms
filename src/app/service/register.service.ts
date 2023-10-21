import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private range = 'sheet1!A:z';
  constructor(private httpclient:HttpClient) { }

  url='http://localhost:3000/contactreg';
  //contact form register
  /*save(register :any){
    const requestUrl = `https://sheets.googleapis.com/v4/spreadsheets/1w5nWBCERgMVSwsskCxLHFO2SXyIj3bxOI6kZJXKs2mA/values/${this.range}:append?valueInputOption=USER_ENTERED&alt=json&key=AIzaSyDlHv9_tb53PDAWZvGUzmTtv348JC-kRw0`;

    const requestBody ={
      values:[[register.name,register.email,register.password,register.phone]]
    };
    console.log([,requestUrl,requestBody])
    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ya29.a0AfB_byDnFBXN0NGmFbLPhdqozem2oEhP8J6NNcpA5uh8NvOnLOgjSUIB4M5i_phdh6JkrqnaaiQLzff9c_Oj7-erL8g1ojTCCLATo6iGFc8Por5feUYHdR_fxm_BF7CsBeBq893zm62WHAl4ZAoC8mTNnZ20BsnTt8RnaCgYKAdoSARESFQGOcNnCGkJCzcAyfvSTDgMiW5v9bg0171')

    return this.httpclient.post<any>(requestUrl,requestBody,{
      headers :headers
    })
  }*/

  Createuser(res:any){
    return this.httpclient.post(this.url,res);
  }

  usersreg(){
    return this.httpclient.get(this.url);
  }

}
