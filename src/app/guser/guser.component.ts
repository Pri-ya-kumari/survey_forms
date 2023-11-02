import { Component } from '@angular/core';
import { UseraccesdelogComponent } from '../useraccesdelog/useraccesdelog.component';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-guser',
  templateUrl: './guser.component.html',
  styleUrls: ['./guser.component.css'],
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

export class GuserComponent {
  constructor(public dialog :MatDialog){}
 showdemo(){
    this.dialog.open(UseraccesdelogComponent,{
      width:'800px',height:'600px'
    });
  }
}
