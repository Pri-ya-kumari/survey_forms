import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/adminservice/questions.service';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit{

  questionadd = new FormGroup({
    question : new FormControl(''),
    option1 : new FormControl(''),
    option2 : new FormControl(''),
    option3: new FormControl(''),    
    option4: new FormControl(''),    
  })

  ngOnInit(): void {

    this.qId = this.route.snapshot.params['id'];
    this.qtitle = this.route.snapshot.params['title'];
  }
  constructor(
    private route:ActivatedRoute,private addquestion:QuestionsService
  ){}

  qId:any;
  qtitle:any;
  questions ={
    test :[],
    option1:'',
    option2:'',
    option3:'',
    option4:'',
  }
  Submit(){
    alert("button wordk");
    this.addquestion.sendquestion(this.questions).subscribe((data:any)=>{
      alert("question addes");
    })
  }
}
