import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';
import {MatSnackBarModule } from '@angular/material/snack-bar';
 

@Component({
  selector: 'app-demo-register',
  templateUrl: './demo-register.component.html',
  styleUrls: ['./demo-register.component.css'],
})
export class DemoRegisterComponent {
  froms = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required]), 
    formnames:new FormControl(''),
    usercounts :new FormControl(''),    
  })

  constructor(private route :Router,private fb: FormBuilder,private register:RegisterService
    ,private snak:MatSnackBarModule){
    this.setupForm();
  }
  ngOnInit(): void {}

  dataCount: number = 0;

  setupForm(){
    this.froms = this.fb.group({
      name:['',[Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password:['',[Validators.required/*,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")*/] ],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      formnames:['contact form'],
      usercounts:['1'],

    });
  }
  count: number = 0;
 
  onSubmit(data:any):void{
    if (this.froms.invalid) {
      //this.register.saveFormData(this.froms.value).subscribe(console.log)
      alert("please enter the vaid formate")
      //this.snak.open()
    }
    
    else{
      this.route.navigate(['/previewcontact']);
      this.register.Createuser(data).subscribe((res:any) => {
        if (res != "") {
          alert("record added");
          this.froms.reset();
        }
        else {
          alert("error");
        }
      })
      /*test:any=[];
  dataCount: number = 1;
  contactform =0;
  eventform =0;
  constructor(private route: Router, private userd: RegisterService) {
    this.test = this.userd.usersreg().subscribe((res) => {
      this.test = res;
      this.dataCount = res.length;
    })
  }
  
} */
      //this.route.navigate(['/homepage']);
    }
    }
  get f(){
    return this.froms.controls;
  }


}
