import { Component } from '@angular/core';
import { UseraccesdelogComponent } from '../useraccesdelog/useraccesdelog.component';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { SignuserService } from '../service/signuser.service';
import { Router } from '@angular/router';
import { ChatboxComponent } from '../chatbotoption/chatbox/chatbox.component';

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

  user$ = this.sign.currentUsser$;

  constructor(public dialog :MatDialog,private sign:SignuserService,private route:Router){}
 showdemo(){
    this.dialog.open(UseraccesdelogComponent,{
      width:'800px',height:'600px'
    });
  }
  Login(){
    this.route.navigate(['/loginpage'])
  }
  showchatbot(){
    this.dialog.open(ChatboxComponent,{
      width:'330px',height:'380px',    
      position: { top: '100px',right:'10px'},
    });
  }

  userlogin(){
    this.route.navigate(['/loginpage'])
  }
  adminlogin(){
    this.route.navigate(['/adminlogin'])
  }
  superadmin(){
    this.route.navigate(['/superadminLogin'])
  }
}
