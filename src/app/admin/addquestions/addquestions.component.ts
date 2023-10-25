import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    console.log(this.route.snapshot.params["fid"])
    this.qId = this.route.snapshot.params['fid'];
    this.qtitle = this.route.snapshot.params['title'];
  }
  constructor(
    private route:ActivatedRoute,private addquestion:QuestionsService,private router:Router
  ){}

  qId:any;
  qtitle:any;
  
  Submit(data:any){
    console.log(this.questionadd.value);
    this.addquestion.sendquestion(this.route.snapshot.params["fid"]).subscribe((datas:any)=>{
      console.warn(datas);
      //this.router.navigate(['/users'])
    })
  }
}
