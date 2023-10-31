import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddtestService } from 'src/app/adminservice/addtest.service';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({ opacity:0 }),
        animate(2000)
      ])
    ]),
    trigger('fade1',[
      transition('void => *',[
        style({ opacity:0 }),
        animate(3000)
      ])
    ]),
]})
export class TemplateComponent {
  
    qId: any;
    surveys :any;
  test: any;
    constructor(private route: Router, private showtest: AddtestService) {
      this.test = this.showtest.getdata().pipe(
        map((resdata: any) => {
          console.log(resdata);
          const survey: any[] = [];
          for (const key in resdata) {
            console.log(key);
            if(resdata.hasOwnProperty(key)){
              survey.push({ id:key, ...resdata[key] });
            }
          }
          return survey;
        })
      );
  
      this.test.subscribe((res: any) => {
        console.log(res);
        this.test = res;
      });
    }
}
