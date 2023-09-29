import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private route :Router,private fb: FormBuilder){
    this.setupForm();
  }
  ngOnInit(): void {}

  setupForm(){
    this.froms = this.fb.group({
      name:['',[Validators.required, Validators.pattern("^[a-zA-Z]*")] ],
      email: ['', [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
        password:['',/*[Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")]*/ ]
    });
  }

 
  homepage(){
    if (this.froms.valid) {
      this.route.navigate(['/homepage']);
    }
    
  }
  get f(){
    return this.froms.controls;
  }
}
