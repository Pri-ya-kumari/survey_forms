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

  
  constructor(private route: Router, private fb: FormBuilder,private admin:SuperadmingetingService,
    public dialog: MatDialog) {
    this.lofinform();
    localStorage.setItem("IsloggedIn", "false");
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
    console.log("button works")
    {
        this.admin.getuser(data).subscribe((res: any) => {
          const user = res.find((a: any) => {
            return a.email == this.Login.value.loginemail && a.password == this.Login.value.loginpassword;
          });
          if (user) {
            localStorage.setItem("IslogedIn", "true");
            Swal.fire({
              icon: 'success',
              title: 'Successfully',
              text: 'User Loggin successfully'
            });
            this.Login.reset();
            this.route.navigate(['/superadmin']);
          } else {
            localStorage.setItem("IslogedIn", "false");
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'user not found'
            })
          }
        });
    }
  }
  
  get l() {
    return this.Login.controls;
  }
}
