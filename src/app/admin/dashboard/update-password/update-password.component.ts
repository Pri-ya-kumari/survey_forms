import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLoginService } from 'src/app/adminservice/admin-login.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  
  Login = new FormGroup({
    loginemail: new FormControl(''),
    loginpassword: new FormControl(''),
  })

  constructor(private route :Router,private service:AdminLoginService,private active:ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.active.snapshot.params['cid']);
    this.service.getdata(this.active.snapshot.params['cid']).subscribe((res:any)=>{
      console.log(res);
      this.Login = new FormGroup({
        loginemail: new FormControl(res['loginemail']),
        loginpassword: new FormControl(res['loginpassword']),
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

}
