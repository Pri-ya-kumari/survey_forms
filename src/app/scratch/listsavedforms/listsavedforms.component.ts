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
  
  homepage(){
    this.route.navigate(['/homepage']);
  }
}
