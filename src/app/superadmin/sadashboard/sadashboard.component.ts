import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sadashboard',
  templateUrl: './sadashboard.component.html',
  styleUrls: ['./sadashboard.component.css']
})
export class SadashboardComponent {


  constructor(private route:Router){}

  adminhome(){
    this.route.navigate(['/admindashboard', 'adminhome']);
  }
  admincreation(){
    this.route.navigate(['/superadmin', 'admincreation']);
  }
  adminlist(){
    this.route.navigate(['/superadmin', 'alladminlist']);
  }
  request(){
    this.route.navigate(['/superadmin', 'userresquest']);
  }
  logout(){
    this.route.navigate(['/mainpage']);
  }
  nonautho(){
    this.route.navigate(['/superadmin', 'nonauthorized']);
  }
}
