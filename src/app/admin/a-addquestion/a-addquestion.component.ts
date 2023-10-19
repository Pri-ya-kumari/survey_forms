import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/adminservice/questions.service';

@Component({
  selector: 'app-a-addquestion',
  templateUrl: './a-addquestion.component.html',
  styleUrls: ['./a-addquestion.component.css']
})
export class AAddquestionComponent implements OnInit {

  id: any;
  title: any;
  questions = [];
  constructor(private active:ActivatedRoute,private qservice:QuestionsService){
    
  }

 
  ngOnInit(): void {
    this.id = this.active.snapshot.params['(this.id)'];
    this.title = this.active.snapshot.params['title'];  
   this.qservice.getquestion(this.id).subscribe((data:any)=>{
    console.log(data);
   }) 
  }

}
