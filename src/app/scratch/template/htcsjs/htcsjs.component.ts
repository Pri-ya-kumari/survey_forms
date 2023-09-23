import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-htcsjs',
  templateUrl: './htcsjs.component.html',
  styleUrls: ['./htcsjs.component.css']
})
export class HtcsjsComponent {

  forms= new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
  })

  constructor(private fb: FormBuilder, private router: Router) {
    this.form();
  }
  form(){
    this.forms = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      email: ['', [Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
    });
  }
  onSubmit() {
    if (this.forms.valid) {
      // Navigate to the next page using Angular Router
      this.router.navigate(['/complete']);
    }
  }
}
