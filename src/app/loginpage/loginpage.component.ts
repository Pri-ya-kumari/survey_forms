import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminLoginService } from '../adminservice/admin-login.service';
import { SignuserService } from '../service/signuser.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {


  constructor(private route: Router, private fb: FormBuilder, private sign: SignuserService,
    private admin: AdminLoginService,
    public dialog: MatDialog) {

    localStorage.setItem("isloggedin", "false");
    localStorage.setItem("IslogedIn", "false");
    this.lofinform();
  }

  Login = new FormGroup({
    loginemail: new FormControl('', [Validators.required]),
    loginpassword: new FormControl(''),
  })


  lofinform() {
    this.Login = this.fb.group({
      loginemail: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      loginpassword: ['', [Validators.required]]
    });
  }


  loginsubmit(data: any) {
    console.log("button works");
    /*this.admin.checkadmin().subscribe((che: any) => {
      const adminl = che.find((b: any) => {
        return b.email == this.Login.value.loginemail && b.password == this.Login.value.loginpassword;
      });
      if (adminl) {
        Swal.fire({
          icon: 'success',
          title: 'Successfully',
          text: 'Admin Loggin successfully'
        });
        localStorage.setItem("isloggedin", "true");
        this.Login.reset();
        this.route.navigate(['/admindashboard']);
      } */
      {
        this.sign.loginuser(data).subscribe((res: any) => {
          const user = res.find((a: any) => {
            return a.email == this.Login.value.loginemail && a.password == this.Login.value.loginpassword;
          });
          if (user) {
            Swal.fire({
              icon: 'success',
              title: 'Successfully',
              text: 'User Loggin successfully'
            });
            localStorage.setItem("isloggedin", "true");
            this.Login.reset();
            this.route.navigate(['/homepage']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'User not found'
            });
            localStorage.setItem("isloggedin", "false");
          }
        });
      }
  }

  get l() {
    return this.Login.controls;
  }
  Signup() {
    this.route.navigate(['/adminlogin'])
  }
}