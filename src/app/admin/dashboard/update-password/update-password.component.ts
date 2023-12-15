import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmincreationService } from 'src/app/superadmin/superservice/admincreation.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  
  Login = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private route :Router,private service:AdmincreationService,private active:ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.active.snapshot.params['cid']);
    this.service.getdatass(this.active.snapshot.params['cid']).subscribe((res:any)=>{
      console.log(res);
      this.Login = new FormGroup({
        name: new FormControl(res['name']),
        email: new FormControl(res['email']),
        password: new FormControl(res['password']),
      })    
    })
  }

  savedata(data:any){
    console.log(this.Login.value);
    this.service.updateItem(this.active.snapshot.params['cid'],this.Login.value).subscribe((data1:any)=>{
      console.warn(data1);
      this.route.navigate(['/profile']);
    })
  }
  profilback(){
    this.route.navigate(['/admindashboard', 'profile']);
  }

}
