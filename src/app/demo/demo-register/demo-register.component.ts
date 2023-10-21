import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-demo-register',
  templateUrl: './demo-register.component.html',
  styleUrls: ['./demo-register.component.css']
})
export class DemoRegisterComponent {
  froms = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required]), 
    formname:new FormControl(''),
  })

  constructor(private route :Router,private fb: FormBuilder,private register:RegisterService
    ,private snak:MatSnackBarModule){
    this.setupForm();
  }
  ngOnInit(): void {}

  
  setupForm(){
    this.froms = this.fb.group({
      name:['',[Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password:['',[Validators.required/*,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")*/] ],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      formname:['contact for'],
    });
  }

 
  onSubmit(data:any):void{
    if (this.froms.invalid) {
      //this.register.saveFormData(this.froms.value).subscribe(console.log)
      alert("please enter the vaid formate")
      //this.snak.open()
    }
    
    else{
      this.route.navigate(['/previewcontact']);
      //this.register.save(this.froms.value).subscribe(console.log)
      this.register.Createuser(data).subscribe((res) => {
        if (res != "") {
          alert("record added");
          this.froms.reset();
        }
        else {
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
