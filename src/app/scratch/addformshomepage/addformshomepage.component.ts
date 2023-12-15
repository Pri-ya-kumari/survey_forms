import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addformshomepage',
  templateUrl: './addformshomepage.component.html',
  styleUrls: ['./addformshomepage.component.css']
})
export class AddformshomepageComponent {

  constructor(private router:Router){}
  
  homepage(){
    this.router.navigate(['/homepage']);
  }
  titleoption(){
    this.router.navigate(['/addfromshome']);
  }
  saved(){
    this.router.navigate(['/addfromshome','questionaddingforms']);
  }
}
