import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { UseraccesdelogComponent } from '../useraccesdelog/useraccesdelog.component';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
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
export class MainpageComponent implements OnInit {
  constructor(
    private router: Router,public dialog :MatDialog) {
      //localStorage.setItem("isloggedin","false");
      //localStorage.setItem("IslogedIn", "false");
      localStorage.setItem("isadminin", "false");
      localStorage.setItem("issuperadminin", "false");
    }
  ngOnInit(): void {
  }
  loginpage(){
    this.router.navigate(['/generalusers']);
    this.dialog.open(UseraccesdelogComponent,{
      width:'800px',height:'600px'
    });

  }
  see(){
    this.router.navigate(['/signuppage'])
  }
}
