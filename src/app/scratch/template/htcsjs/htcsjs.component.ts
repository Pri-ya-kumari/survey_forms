import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Googlesheetf2Service } from 'src/app/service/googlesheetf2.service';
@Component({
  selector: 'app-htcsjs',
  templateUrl: './htcsjs.component.html',
  styleUrls: ['./htcsjs.component.css']
})
export class HtcsjsComponent {

  forms = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    test: new FormControl('', [Validators.required]),
    op1: new FormControl(''),
    op2: new FormControl(''),
    op3: new FormControl(''),
    op4: new FormControl(''),
    op5: new FormControl(''),
    op6: new FormControl(''),
    op7: new FormControl(''),
    text1: new FormControl(''),
    text2: new FormControl('', [Validators.required]),
    text3: new FormControl(''),
  })

  constructor(private fb: FormBuilder, private router: Router,
    private googlesheet: Googlesheetf2Service, private googleSheetsDbService: GoogleSheetsDbService) {
    this.form();
  }
  ngOnInit(): void { }
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
      op3: [''],
      op4: [''],
      op5: [''],
      op6: [''],
      op7: [''],
      text1: [''],
      text2: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2), Validators.max(10)]],
      text3: ['',],
    });
  }
  get f() {
    return this.forms.controls;
  }
  onSubmit(): void {
    //console.log(this.forms.value)
    if (this.forms.valid) {
      // Navigate to the next page using Angular Router
      this.router.navigate(['/complete']);
    }
    this.googlesheet.saveFormData(this.forms.value).subscribe(console.log)
    //alert("your form has been submitted");

  }
  sheet() {
    document.location = "https://docs.google.com/spreadsheets/d/1yf-JTqXJ3j6yl7XTrusl3GoriX_nQQdzG4j84Irho1Y/edit?usp=sharing"
  }
}
