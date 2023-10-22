import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignuserService } from 'src/app/service/signuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {

  test:any=[];

  constructor(private route: Router, private userd: SignuserService) {
    this.test = this.userd.loginuser().subscribe((res) => {
      this.test = res;
    })
  }
  deleted(data:any){
    alert(data);
    this.test.splice(data.id-1,1);
    this.userd.deletedata(data.id).subscribe((a:any)=>{
    Swal.fire('success','Data deleted successfully')
    this.test;
    })
  }
  update(data1:any){

  }
}
