import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddtestService } from 'src/app/adminservice/addtest.service';

@Component({
  selector: 'app-alltest',
  templateUrl: './alltest.component.html',
  styleUrls: ['./alltest.component.css']
})
export class AlltestComponent {

  constructor(private route:Router,private showtest:AddtestService){
   this.test=this.showtest.gettest().subscribe((res) => {
    this.test=res;
    //console.log('res', res)
  })
  }
  test:any;
  
  addt(){
    this.route.navigate(['/admindashboard', 'atest']);
  }
}
