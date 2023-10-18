import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eventpreview',
  templateUrl: './eventpreview.component.html',
  styleUrls: ['./eventpreview.component.css']
})
export class EventpreviewComponent {


  forms = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    op1: new FormControl(''),
    op2: new FormControl(''),
  })
   constructor(private fb:FormBuilder,private router: Router){
    this.form();
   }
   form() {
    this.forms = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      op1: [''],
      op2: [''],
    });
  }
  get f() {
    return this.forms.controls;
  }
  onSubmit(): void {
   // this.router.navigate(['/complete']);
    //console.log(this.today);
    //this..saveFormData(this.today).subscribe(console.log)
    //this.preview.save(this.forms.value).subscribe(console.log)
  }
}
