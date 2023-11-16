import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sadashboard',
  templateUrl: './sadashboard.component.html',
  styleUrls: ['./sadashboard.component.css']
})
export class SadashboardComponent implements OnInit{


  constructor(private route:Router,private str:LocationStrategy){}
  ngOnInit(): void {
    this.preventback();
  }
  preventback(){
    history.pushState(null,location.href);
    this.str.onPopState(()=>{
      history.pushState(null,location.href)
    })
  }
  adminhome(){
    this.route.navigate(['/admindashboard', '']);
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
  authorizeduser(){
    this.route.navigate(['/superadmin','authorizeduserlist'])
  }
}
