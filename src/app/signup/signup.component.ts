import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignuserService } from '../service/signuser.service';
import { AdminLoginService } from '../adminservice/admin-login.service';
import Swal from 'sweetalert2'
import { MatDialog } from '@angular/material/dialog';
import { UseraccesdelogComponent } from '../useraccesdelog/useraccesdelog.component';
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
    loginemail: new FormControl('',[Validators.required]),
    loginpassword: new FormControl(''),
  })

  
  getemain(){
    return this.Login.get('loginemail')
  }
  getpassword(){
    return this.Login.get('loginpassword')
  }
  lofinform(){
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
    public dialog :MatDialog) {
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
  id:any;
  loginsubmit(id:any) {
    console.log("button works")
    this.adminservice.checkadmin().subscribe((che: any) => {
      const adminl = che.find((b: any) => {
        return b.loginemail == this.Login.value.loginemail && b.loginpassword == this.Login.value.loginpassword
      })
      if (adminl) {
        //alert("login successfully")
        Swal.fire('success', 'user is login successfully', 'success');
        this.Login.reset()
        this.route.navigate(['/admindashboard'])
      }else{
        Swal.fire('error', 'user not found', 'error');
      }
    })
    const {loginemail,loginpassword} = this.Login.value
    this.sign.getuser(loginemail,loginpassword).subscribe(()=>{
      Swal.fire({
        icon: 'success',
        title: 'SuccessFully',
        text: 'Login Successfully',
      })
      this.route.navigate(['/guser'])
      this.dialog.open(UseraccesdelogComponent,{
        width:'800px',height:'600px'
      });
      this.Login.reset()
    })
    /*
    this.sign.loginuser(id).subscribe((res: any) => {
      const user = res.find((a: any) => {
        return a.email == this.Login.value.loginemail && a.password == this.Login.value.loginpassword
      })
      if (user) {
        //alert("login successfully")
        Swal.fire({
          icon: 'success',
          title: 'SuccessFully',
          text: 'Login Successfully',
        })
        this.route.navigate(['/guser'])
        this.dialog.open(UseraccesdelogComponent,{
          width:'800px',height:'600px'
        });
        this.Login.reset()
      }
    })*/
  }

  homepage(data: any): void {
    if (this.froms.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter the valid formate'})
      //alert("please enter the vaid formate")
    }
    else {
      this.sign.postuser(data).subscribe((res) => {
        if (res != "") {
          Swal.fire({
            icon: 'success',
            title: 'Successfully',
            text: 'Your Record is added successfully'})    
          //alert("record added");
          this.froms.reset();
          this.login = true;
          this.signup = false;
        }
        else {
          //alert("error");
          //Swal.fire({
           // icon: 'error',
           // title: 'Oops...',
            //text: 'Please enter the valid formate'})
          
        }
      })
      //this.route.navigate(['/homepage']);
    }
  }
  get f() {
    return this.froms.controls;
  }
  get l() {
    return this.Login.controls;
  }
}
