import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.css']
})
export class EventRegComponent {


  forms = new FormGroup({
    name : new FormControl('',[Validators.required]),
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
    this.forms = this.fb.group({
      name:['',[Validators.required, Validators.pattern("^[a-zA-Z]*")]],
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
    if (this.forms.invalid) {
      Swal.fire(
        'Error!',
        'Enter the valid formate.',
      )    }
    else{
      this.route.navigate(['/previewevent']);
      this.register.Createuser(data).subscribe((res) => {
        if (res != "") {
          Swal.fire('success', 'You Can Access to the form now', 'success')
          this.forms.reset();
        }
        else {
          Swal.fire(
            'Error!',
            'Enter the valid formate.',
          )
        }
      })
    }
  }
  get f(){
    return this.forms.controls;
  }
}
