import { Injectable } from '@angular/core';
import { question } from '../data-type';
import { ftitle } from '../data-type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddDataService {
  constructor(private http:HttpClient) { }
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


  urls= 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com/surveyformtitle.json';
  
  postdata(data:any[]){
    //return this.http.post(this.urls,data);
    return this.http.post(this.urls,data);

  }
  getdata(){
    return this.http.get(this.urls);
  }
  detet(){
    return this.http.delete(this.urls);
  }

  Urlss = 'https://survey-forms-3ecc3-default-rtdb.firebaseio.com';

  getQuestions(fid: any) {
    const urlss = `${this.Urlss}/surveyformtitle/${fid}.json`; 
    return this.http.get(urlss);
  }

}
