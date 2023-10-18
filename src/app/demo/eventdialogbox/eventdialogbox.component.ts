import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventdialogbox',
  templateUrl: './eventdialogbox.component.html',
  styleUrls: ['./eventdialogbox.component.css']
})
export class EventdialogboxComponent {

  constructor(private route:Router){}

  register(){
    this.route.navigate(['/eventregister']);
  }
}
