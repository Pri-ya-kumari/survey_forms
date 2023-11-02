import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { MainpageComponent } from 'src/app/mainpage/mainpage.component';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-conact-form',
  templateUrl: './conact-form.component.html',
  styleUrls: ['./conact-form.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ]),
    trigger('fade1', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(3000)
      ])
    ])
  ]
})
export class ConactFormComponent {
  forms = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    test: new FormControl('', [Validators.required]),
    op1: new FormControl(''),
    op2: new FormControl(''),
  })
   constructor(private fb:FormBuilder,private router: Router,public dialog :MatDialog){
    this.form();
   }
   openDialog() {
    this.router.navigate(['/previewcontact'])
  }
   
  form() {
    this.forms = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      lname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      test: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
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
   // this.googlesheet.saveFormData(this.today).subscribe(console.log)
    //this.googlesheet.saveFormData(this.forms.value).subscribe(console.log)
  }
}
