import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { GooglesheetService } from 'src/app/service/googlesheet.service';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

//import { environment } from '../environments/environment';
//import { Character, characterA } from './character.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-angulars-form',
  templateUrl: './angulars-form.component.html',
  styleUrls: ['./angulars-form.component.css']
})
export class AngularsFormComponent {
  forms= new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    op1: new FormControl(''),
    op2: new FormControl(''),
    op3: new FormControl(''),
    op4: new FormControl(''),
    op5: new FormControl(''),
    op6: new FormControl(''),
    op7: new FormControl(''),
    text1: new FormControl(''),
    text2: new FormControl(''),
    text3: new FormControl(''),
  })
//private googlesheet : GooglesheetService
  //characte$: Observable<Character[]>;
  constructor(private fb: FormBuilder, private router: Router,
    private googleSheetsDbService: GoogleSheetsDbService) {
    this.form();
  }
  ngOnInit(): void {}
  form(){
    this.forms = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      email: ['', [Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] , 
      op1:[''],
      op2:[''],
      op3:[''],
      op4:[''],
      op5:[''],
      op6:[''],
      op7:[''],
      text1:[''],
      text2:[''],
      text3:[''],
    });
  }
  onSubmit():void {
    if (this.forms.valid) {
      // Navigate to the next page using Angular Router
      this.router.navigate(['/complete']);
      console.log(this.forms.value);
    }
    /*this.googlesheet.saveFormData(this.forms)
      .then(() => {
        // Clear form on success
        this.forms.reset();
      });*/
  }
}