import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { admin } from '../data-type';
import { AdminService } from '../service/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  froms = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
  })

  constructor(private route :Router,private fb: FormBuilder,private admin:AdminService){
    this.setupForm();
  }
  ngOnInit(): void {}

  
  setupForm(){
    this.froms = this.fb.group({
      name:['',[Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password:['',[Validators.required/*,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")*/] ]
    });
  }

 
  homepage():void{
    /*this.admin.adminlogin(data).subscribe((result)=>{
      if(result){
        this.route.navigate(['admin']);
      }
    });*/
    if (this.froms.invalid) {
      alert("please enter the vaid formate")
    }
    else{
      this.route.navigate(['/homepage']);
    }
  }
  get f(){
    return this.froms.controls;
  }
}
