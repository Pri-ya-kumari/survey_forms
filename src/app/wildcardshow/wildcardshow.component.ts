import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wildcardshow',
  templateUrl: './wildcardshow.component.html',
  styleUrls: ['./wildcardshow.component.css']
})
export class WildcardshowComponent {
  constructor(private route:Router){}
  
  see(){
    this.route.navigate(['/mainpage'])
  }
}
