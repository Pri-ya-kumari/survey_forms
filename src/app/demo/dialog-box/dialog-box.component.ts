import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  constructor(private route:Router){}
  register(){
    this.route.navigate(['/demoregister']);
  }
  
}
