import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserrequestComponent } from '../userrequest/userrequest.component';

@Component({
  selector: 'app-useraccesdelog',
  templateUrl: './useraccesdelog.component.html',
  styleUrls: ['./useraccesdelog.component.css']
})
export class UseraccesdelogComponent {



  constructor(private route:Router,public dialog :MatDialog){}

    prorequest(){
     this.dialog.open(UserrequestComponent,{
       width:'600px',height:'450px'
     });

   }
   
}
