import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SignuserService } from '../service/signuser.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

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
  logout(){ 
    localStorage.setItem("isloggedin","false");
    localStorage.setItem("IslogedIn", "false");
    this.route.navigate(['/mainpage'])
  }
}
