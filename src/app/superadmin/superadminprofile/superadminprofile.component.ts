import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdmincreationService } from 'src/app/superadmin/superservice/admincreation.service';
import { SuperadmingetingService } from '../superservice/superadmingeting.service';

@Component({
  selector: 'app-superadminprofile',
  templateUrl: './superadminprofile.component.html',
  styleUrls: ['./superadminprofile.component.css']
})
export class SuperadminprofileComponent {

  constructor(private route:Router,private admind:SuperadmingetingService){
    this.test = this.admind.getdamin().subscribe((res:any)=>{
      this.test= res;
      console.log(this.test);
    })
    //this.test=this.admind.checkadmin().subscribe((res) => {
      //this.test=res;
     
  }
  ngOnInit(): void {
  }
  test:any=[];

}
