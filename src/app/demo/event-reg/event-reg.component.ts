import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventserviceService } from 'src/app/service/eventservice.service';
@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.css']
})
export class EventRegComponent {


  froms = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    phone: new FormControl('', [Validators.required]),    
  })

  constructor(private route :Router,private fb: FormBuilder,private eventregister:EventserviceService){
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
      //this.register.saveFormData(this.froms.value).subscribe(console.log)
      alert("please enter the vaid formate")
    }
    else{
      this.route.navigate(['/previewevent']);
      this.eventregister.save(this.froms.value).subscribe(console.log)
    }
  }
  get f(){
    return this.froms.controls;
  }
}
