import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/adminservice/questions.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit{

  ngOnInit(): void {
    console.log(this.route.snapshot.params['fid'])
    this.qId = this.route.snapshot.params['fid'];
    this.qtitle = this.route.snapshot.params['title'];
    this.question.tests['fid']=this.qId;
    this.preventback();

  }

  public Editor = ClassicEditor;

  constructor(
    private route:ActivatedRoute,private addq:QuestionsService,private str:LocationStrategy,
    private rout:Router
  ){}

  qId:any;
  qtitle:any;
  question:any ={
    tests: {
    fid: '', 
  },
  content: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  };
  Submit(){
  this.addq.sendQuestions(this.qId,this.question).subscribe((res:any)=>{
    Swal.fire('success','all deta send successfully','success');
    console.log(res);
    this.question.reset();
  })
  }
  
preventback(){
  history.pushState(null,location.href);
  this.str.onPopState(()=>{
    history.pushState(null,location.href)
  })
}
}