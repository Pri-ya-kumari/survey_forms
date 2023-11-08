import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
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
export class MainpageComponent {
  constructor(
    private router: Router) {
      localStorage.setItem("IsloggedIn","false");
      localStorage.setItem("IslogedIn", "false");
    }
  loginpage(){
    this.router.navigate(['/loginpage']);
  }
  see(){
    this.router.navigate(['/signuppage'])
  }
}
