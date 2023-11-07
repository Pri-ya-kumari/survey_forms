import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignuserService } from '../service/signuser.service';
import { AdminLoginService } from '../adminservice/admin-login.service';
import Swal from 'sweetalert2'
import { MatDialog } from '@angular/material/dialog';
import { UseraccesdelogComponent } from '../useraccesdelog/useraccesdelog.component';
import { AdmincreationService } from '../superadmin/superservice/admincreation.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  froms = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  Login = new FormGroup({
    loginemail: new FormControl('', [Validators.required]),
    loginpassword: new FormControl(''),
  })


  getemain() {
    return this.Login.get('loginemail')
  }
  getpassword() {
    return this.Login.get('loginpassword')
  }
  lofinform() {
    this.Login = this.fb.group({
      //name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      loginemail: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      loginpassword: ['', [Validators.required/*,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")*/]]
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

  constructor(private route: Router, private fb: FormBuilder, private sign: SignuserService, private adminservice: AdminLoginService,
    private admincreation: AdmincreationService,
    public dialog: MatDialog) {
    this.setupForm();
    this.lofinform();
  }
  ngOnInit(): void { }

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
  id: any;
  loginsubmit() {
    console.log('Button works');
    this.admincreation.getdata().subscribe((adminData: any) => {
      const adminl = adminData.find((admin: any) => {
        return (
          admin.loginemail === this.Login.value.loginemail &&
          admin.loginpassword === this.Login.value.loginpassword
        );
      });

      if (adminl) {
        Swal.fire('success', 'Admin is logged in successfully', 'success');
        this.Login.reset();
        this.route.navigate(['/superadmin']);
      } else {
        this.userLogin();
      }
    });
  }

  userLogin() {
    this.sign.getUsers().subscribe((userData: any) => {
      const user = userData.find((user: any) => {
        console.log("user");
        return (
          user.loginemail === this.Login.value.loginemail &&
          user.loginpassword === this.Login.value.loginpassword
        );
      });

      if (user) {
        Swal.fire({
          icon: 'success',
          title: 'Successfully',
          text: 'Login Successfully',
        });
        this.route.navigate(['/generalusers']);
        this.Login.reset();
      } else {
        Swal.fire('error', 'User not found', 'error');
      }
    });
  }

  homepage(data: any): void {
    if (this.froms.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter the valid formate'
      })
      //alert("please enter the vaid formate")
    }
    else {
      const { name, email, password } = this.froms.value;
      this.sign.post(data).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully',
          text: 'Your Record is added successfully'
        });
        this.froms.reset();
        this.login = true;
        this.signup = false;
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