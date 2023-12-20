import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDataService } from 'src/app/service/add-data.service';
import { SendquestionService } from 'src/app/service/sendquestion.service';

@Component({
  selector: 'app-addquestionsnow',
  templateUrl: './addquestionsnow.component.html',
  styleUrls: ['./addquestionsnow.component.css']
})
export class AddquestionsnowComponent implements OnInit {
  qId: any;
  title: any;
  questions: any = {};
  /*adqu:any={
    tests:{
      id:'',
    },
    question:'',
    questionType:'',
    options:''
  }*/
  id: any;
  form: FormGroup;
  selectedOption: any;
  checkb: any[] = [0];
  checkc: any[] = [0];

  constructor(private active: ActivatedRoute,private qservice: AddDataService,private fb: FormBuilder,
    private addq:SendquestionService
  ) {
    this.form = this.fb.group({
      question:['',Validators.required],
      questionType: ['', Validators.required],
      options: this.fb.array([this.createOption()])
    });
  }

  ngOnInit(): void {
    this.qId = this.active.snapshot.params['id'];
    this.title = this.active.snapshot.params['title'];
    this.qservice.getQuestions(this.qId).subscribe(
      (data: any) => {
        if (data) {
          // here converting the object value into an array
          this.questions = Object.values(data);
          console.log(this.questions);
        } else {
          console.log('empty form.');
        }
      }
    );    
      this.form = this.fb.group({
      question: ['', Validators.required],
      questionType: ['', Validators.required],
      options: this.fb.array([]),
    });

  }
  submit() {
    console.log(this.questions)
  }
  createOption(): FormGroup {
    return this.fb.group({
      option: ''
    });
  }

  get options() {
    return (this.form.get('options') as FormArray).controls;
  }
  get check(){
    return (this.form.get('options') as FormArray).controls;
  }

  addOption(): void {
    const optionsArray = this.form.get('options') as FormArray;
    optionsArray.push(this.createOption());
  }

  removeOption(index: number): void {
    const optionsArray = this.form.get('options') as FormArray;
    optionsArray.removeAt(index);
  }

  onChangeQuestionType() {
    const questionTypeControl = this.form.get('questionType');

    if (questionTypeControl instanceof FormControl) {
      this.selectedOption = questionTypeControl.value;
      console.log(this.selectedOption);
    }
  }
  addCheckbox(): void {
    this.checkc.push(true);
    const optionsArray = this.form.get('options') as FormArray;
    optionsArray.push(this.createOption());
  }

  removeCheckbox(index: number): void {
    this.checkc.splice(index, 1);
    const optionsArray = this.form.get('options') as FormArray;
    optionsArray.removeAt(index);
  }

  

}
