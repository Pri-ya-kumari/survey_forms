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
    this.service.updatedata(this.active.snapshot.params['cid']).subscribe((res)=>{
      console.log(res);
    })
  }
}
