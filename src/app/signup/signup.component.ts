import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignuserService } from '../service/signuser.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  froms = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
  })

  Login = new FormGroup({
    loginemail : new FormControl(''),
    loginpassword : new FormControl(''),
  })

  constructor(private route :Router,private fb: FormBuilder,private sign:SignuserService){
    this.setupForm();
  }
  ngOnInit(): void {}

  login = true;
  signup = false;

  loginf(){
    this.login = true;
    this.signup = false;
  }
  Signup(){
    this.signup= true;
    this.login= false;
  }
  setupForm(){
    this.froms = this.fb.group({
      name:['',[Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password:['',[Validators.required/*,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")*/] ]
    });
  }

  loginsubmit(){
    console.log("button works")
    this.sign.loginuser().subscribe((res:any)=>{
      const user = res.find((a:any)=>{
        return a.email == this.Login.value.loginemail &&  a.password ==  this.Login.value.loginpassword
      })
      if(user){
        alert("login successfully")
        this.Login.reset()
        this.route.navigate(['/homepage'])
      }
      else{
        alert("user not found");
      }
    })
  }
  homepage(data:any):void{
    if (this.froms.invalid) {
      alert("please enter the vaid formate")
    }
    else{
      this.sign.Createuser(data).subscribe((res)=>{
        if(res!=""){
          alert("record added");
          this.froms.reset();
          this.login= true;
          this.signup = false;
        }
        else{
          alert("error");
        }
      })
      //this.route.navigate(['/homepage']);
    }
  }
  get f(){
    return this.froms.controls;
  }
}
