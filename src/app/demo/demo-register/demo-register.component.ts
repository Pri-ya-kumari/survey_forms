import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterContactService } from 'src/app/service/register-contact.service';
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
  })

  constructor(private route :Router,private fb: FormBuilder,private register:RegisterContactService){
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
    });
  }

 
  onSubmit():void{
    /*this.admin.adminlogin(data).subscribe((result)=>{
      if(result){
        this.route.navigate(['admin']);
      }
    });*/
    if (this.froms.invalid) {
      this.register.saveFormData(this.froms.value).subscribe(console.log)
      alert("please enter the vaid formate")
    }
    else{
      this.route.navigate(['/previewcontact']);
    }
  }
  get f(){
    return this.froms.controls;
  }
}
