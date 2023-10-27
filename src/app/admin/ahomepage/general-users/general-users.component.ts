import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-general-users',
  templateUrl: './general-users.component.html',
  styleUrls: ['./general-users.component.css']
})
export class GeneralUsersComponent {

  test:any=[];
  dataCount: number = 1;
  constructor(private route: Router, private userd: RegisterService) {
    this.test = this.userd.usersreg().subscribe((res) => {
      this.test = res;
      this.dataCount = res.length;
    })
  }  
}
