import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/adminservice/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit{

  ngOnInit(): void {
    console.log(this.route.snapshot.params['fid'])
    //console.log(this.route.snapshot.params['title'])
    this.qId = this.route.snapshot.params['fid'];
    this.qtitle = this.route.snapshot.params['title'];
    this.question.tests['fid']=this.qId;
  }
  constructor(
    private route:ActivatedRoute,private addq:QuestionsService
  ){}

  qId:any;
  qtitle:any;
  question:any ={
    tests: {
    fid: '', // Initialize with an empty string or the desired value
  },
  content: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  };
  Submit(){
  this.addq.sendquestion(this.question,this.qId).subscribe((res:any)=>{
    Swal.fire('success','all deta send successfully','success');
    console.log(res);
  })
  }
}