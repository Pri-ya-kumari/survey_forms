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
    this.setupForm();
    this.lofinform();
    localStorage.setItem("IsloggedIn", "false");
  }
  froms = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

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
  setupForm() {
    this.froms = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required/*,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")*/]]
    });
  }

  login = true;
  signup = false;

  loginf() {
    this.login = true;
    this.signup = false;
  }
  Signup() {
    this.signup = true;
    this.login = false;
  }

  loginsubmit(data: any) {
    console.log("button works")
    {
        this.sign.loginuser(data).subscribe((res: any) => {
          const user = res.find((a: any) => {
            return a.email == this.Login.value.loginemail && a.password == this.Login.value.loginpassword;
          });
          if (user) {
            localStorage.setItem("IsloggedIn", "true");
            Swal.fire({
              icon: 'success',
              title: 'Successfully',
              text: 'User Loggin successfully'
            });
            this.Login.reset();
            this.route.navigate(['/generalusers']);
          } else {
            localStorage.setItem("IsloggedIn", "false");
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'user not found'
            })
          }
        });
    }
  }
  homepage(data: any): void {

    if (this.froms.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'please enter the valid formate'
      })
    }
    else {
      this.sign.Createuser(data).subscribe((res) => {
        if (res != "") {
          Swal.fire({
            icon: 'success',
            title: 'Successfully',
            text: 'Your Record is added successfully'
          });
          this.froms.reset();
          this.login = true;
          this.signup = false;
        }
      });
    }
  }

  get f() {
    return this.froms.controls;
  }
  get l() {
    return this.Login.controls;
  }
}
