import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/adminservice/admin-login.service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent {
  Login = new FormGroup({
    loginemail : new FormControl(''),
    loginpassword : new FormControl(''),
  })
  constructor(private route :Router,private check:AdminLoginService){}
  loginsubmit(){
    //this.route.navigate(['/admindashboard'])
    console.log("button workd");
    this.check.checkadmin().subscribe((res:any)=>{
      const admin = res.find((a:any)=>{
        return a.email == this.Login.value.loginemail && a.password == this.Login.value.loginpassword
      })
      if(admin){
        alert("login successfully")
        this.Login.reset();
        this.route.navigate(['/admindashboard'])
      }
      else{
        alert("user not found");
      }
    })
  }
  loginf(){
    
  }
}
