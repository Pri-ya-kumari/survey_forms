import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignuserService } from 'src/app/service/signuser.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {

  test:any=[];

  constructor(private route: Router, private userd: SignuserService) {
    this.test = this.userd.loginuser().subscribe((res) => {
      this.test = res;
    })
  }
}
