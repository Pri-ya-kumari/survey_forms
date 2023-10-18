import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor (private route : Router){}
  adminhome(){
    this.route.navigate(['/admindashboard', 'adminhome']);
  }
  atest(){
    this.route.navigate(['/admindashboard', 'atest']);
  }
  aquestion(){
    this.route.navigate(['/admindashboard', 'aquestion']);
  }
}
