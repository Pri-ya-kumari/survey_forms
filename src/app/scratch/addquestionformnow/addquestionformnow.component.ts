import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDataService } from 'src/app/service/add-data.service';
import { SendquestionService } from 'src/app/service/sendquestion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquestionformnow',
  templateUrl: './addquestionformnow.component.html',
  styleUrls: ['./addquestionformnow.component.css']
})
export class AddquestionformnowComponent implements OnInit{

  qId: any;
  title: any;
  questions: any = {};

  constructor(private active: ActivatedRoute,private qservice: AddDataService,private fb: FormBuilder,
    private sendq:SendquestionService,private router:Router
  ) {}
  ngOnInit(): void {
    this.qId = this.active.snapshot.params['fid'];
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
    this.qId = this.active.snapshot.params['fid'];
    this.question.test['fid']=this.qId; 
  }
  question: any = {
    test: {
      qId: '',
    },
    ques: '',
    questype: '',
    options: [], 
  };
  addOption(): void {
    this.question.options.push({ optionques: ''});
  }

  removeOption(index: number): void {
    this.question.options.splice(index, 1);
  }
  checkaddOption(): void {
    this.question.options.push({ optionques: ''});
  }
  
  checkOption(indexi: number): void {
    this.question.options.splice(indexi, 1);
  }

  submit(){
    //console.log(this.question);
    this.sendq.sendquestion(this.qId,this.question).subscribe((res)=>{
      Swal.fire('success','all deta send successfully','success');
      console.log(res);
    })
  }
}
