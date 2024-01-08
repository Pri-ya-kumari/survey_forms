import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignuserService } from '../service/signuser.service';
import Swal from 'sweetalert2';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{


  constructor(private route: Router, private fb: FormBuilder, private sign: SignuserService,
    private admin: AdminserviceService,

    public dialog: MatDialog) {

    localStorage.setItem("isloggedin", "false");
    localStorage.setItem("IslogedIn", "false");
    localStorage.setItem("isadminin", "false");
    localStorage.setItem("isadminin", "false");
    localStorage.setItem("issuperadminin", "false");
    this.lofinform();
  }
  ngOnInit(): void {
  }
  Login = new FormGroup({
    loginemail: new FormControl('', [Validators.required]),
    loginpassword: new FormControl(''),
  })
  showPassword: boolean = false;

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  lofinform() {
    this.Login = this.fb.group({
      loginemail: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      loginpassword: ['', [Validators.required]]
    });
  }
  loginsubmit(data:any) {
    console.log("button works")
    this.admin.loginuser(data).subscribe((che: any) => {
      const adminl = che.find((b: any) => {
        return b.email == this.Login.value.loginemail && b.password == this.Login.value.loginpassword
      })
        if (adminl) {
          Swal.fire({
            icon: 'success',
            title: 'Successfully',
            text: 'Admin Loggin successfully'
          });
          this.Login.reset()
          this.route.navigate(['/admindashboard'])
          localStorage.setItem("isadminin", "true");
        }
      })
      this.sign.loginuser(data).subscribe((res: any) => {
      const user = res.find((a: any) => {
        return a.email == this.Login.value.loginemail && a.password == this.Login.value.loginpassword
      })
        if (user) {
          Swal.fire({
          icon: 'success',
          title: 'Successfully',
          text: 'User Loggin successfully'
        });
        this.Login.reset()
          this.route.navigate(['/homepage'])
          localStorage.setItem("isloggedin", "true");
        }
      })
    }
  get l() {
    return this.Login.controls;
  }
}
