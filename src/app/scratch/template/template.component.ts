import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddtestService } from 'src/app/adminservice/addtest.service';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Injectable } from '@angular/core';

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
  

  surveys :any;
  constructor(private route:Router,private showtest:AddtestService){
    this.surveys=this.showtest.gettest().subscribe((res) => {
     this.surveys=res;
     console.log('res', res)
   })
   }
}
