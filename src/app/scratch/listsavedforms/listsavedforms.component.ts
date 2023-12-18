import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listsavedforms',
  templateUrl: './listsavedforms.component.html',
  styleUrls: ['./listsavedforms.component.css']
})
export class ListsavedformsComponent {

  constructor(private route:Router){}
  
  logout(){
    this.route.navigate(['/mainpage'])
  }
  mainpage(){
    this.route.navigate(['homepage']);
  }
  homepage(){
    this.route.navigate(['/listsurveyhome','listsavedhomepage']);
  }
  createform(){
    this.route.navigate(['/addfromshome']);
  }
  myforms(){
    this.route.navigate(['/listsurveyhome','myformlist'])
  }
  templatefroms(){
    this.route.navigate(['/listsurveyhome','templateformlist'])
  }
}
