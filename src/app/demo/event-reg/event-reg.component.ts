import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventserviceService } from 'src/app/service/eventservice.service';
import { RegisterService } from 'src/app/service/register.service';
@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.css']
})
export class EventRegComponent {


  froms = new FormGroup({
    names : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required]),    
    formname:new FormControl(''),
    count:new FormControl(''),
  })

  constructor(private route :Router,private fb: FormBuilder,private register:RegisterService){
    this.setupForm();
  }
  ngOnInit(): void {}

  
  setupForm(){
    this.froms = this.fb.group({
      names:['',[Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password:['',[Validators.required/*,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")*/] ],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      formname:['event form'],
      count:['1'],
    });
  }

 
  onSubmit(data:any):void{
    /*this.admin.adminlogin(data).subscribe((result)=>{
      if(result){
        this.route.navigate(['admin']);
      }
    });*/
    if (this.froms.invalid) {
      //this.register.saveFormData(this.froms.value).subscribe(console.log)
      alert("please enter the vaid formate")
    }
    else{
      this.route.navigate(['/previewevent']);
      //this.eventregister.save(this.froms.value).subscribe(console.log)
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
