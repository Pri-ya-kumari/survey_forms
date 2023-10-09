import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { GooglesheetService } from "../../../service/googlesheet.service";
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { interval } from 'rxjs';
@Component({
  selector: 'app-angulars-form',
  templateUrl: './angulars-form.component.html',
  styleUrls: ['./angulars-form.component.css'],
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
export class AngularsFormComponent {
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
    text2: new FormControl(''),
    text3: new FormControl(''),
    time: new FormControl(''),
  })
  //private googlesheet : GooglesheetService
  //characte$: Observable<Character[]>;
  constructor(private fb: FormBuilder, private router: Router,
    private googleSheetsDbService: GoogleSheetsDbService, private googlesheet: GooglesheetService) {
    this.form();
  }
  counter = 150;
  interval$: any;

  ngOnInit(): void {
    this.startcounter();
  }

  startcounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter === 0) {
        this.counter = 150;
        this.onSubmit();
        this.startcounter();
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 1500000)
  }
  stopcounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  getformatedtime() {
    var mm = Math.floor(this.counter / 60);
    var ss = this.counter - mm * 60;
    return `${mm} min : ${ss} sec`;
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
      op3: [''],
      op4: [''],
      op5: [''],
      op6: [''],
      op7: [''],
      text1: [''],
      text2: ['', [Validators.pattern("^[0-9]*$"), Validators.maxLength(2), Validators.max(10)]],
      text3: ['',],
      time: [''],
    });
  }
  get f() {
    return this.forms.controls;
  }
  onSubmit(): void {
    this.router.navigate(['/complete']);
    this.googlesheet.saveFormData(this.forms.value).subscribe(console.log)
  }
  sheet() {
    document.location = "https://docs.google.com/spreadsheets/d/1F5_TtESFPl0bDorDx4KaVKzVZFtCNVz_c3SMJBUCNqY/edit?usp=sharing"
  }
}
