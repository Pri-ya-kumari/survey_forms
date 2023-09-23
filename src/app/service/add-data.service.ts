import { Injectable } from '@angular/core';
import { question } from '../data-type';
import { ftitle } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class AddDataService {
  constructor() { }
  private studentForm:any={};
  private formTitle:any={};

  addFormdata(data:question){
    this.studentForm= data;
    console.warn("service called")
    //return this.http.post('http://localhost:3000/sendQuestion',data);
  }
  getformdata(){
    return this.studentForm;
    //console.warn("service is detected");
    //return this.http.get<question[]>('http://localhost:3000/sendQuestion');
  }
  addformTitle(value:ftitle){
    this.formTitle=value;
  }
  getformtitle(){
    return this.formTitle;
  }
}
