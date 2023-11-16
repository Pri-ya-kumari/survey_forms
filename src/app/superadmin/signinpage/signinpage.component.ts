import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SuperadmingetingService } from '../superservice/superadmingeting.service';
@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent {

  constructor(private route: Router, private fb: FormBuilder,
    private superadmin: SuperadmingetingService,
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
      {
        this.superadmin.loginuser(data).subscribe((res: any) => {
          const user = res.find((a: any) => {
            return a.email == this.Login.value.loginemail && a.password == this.Login.value.loginpassword;
          });
          if (user) {
            Swal.fire({
              icon: 'success',
              title: 'Successfully',
              text: 'User Loggin successfully'
            });
            localStorage.setItem("issuperadminin", "true");
            this.Login.reset();
            this.route.navigate(['/superadmin']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'User not found'
            });
            localStorage.setItem("issuperadminin", "false");
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
