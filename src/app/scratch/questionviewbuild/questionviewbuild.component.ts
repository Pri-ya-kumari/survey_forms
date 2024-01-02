import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendquestionService } from 'src/app/service/sendquestion.service';

@Component({
  selector: 'app-questionviewbuild',
  templateUrl: './questionviewbuild.component.html',
  styleUrls: ['./questionviewbuild.component.css']
})
export class QuestionviewbuildComponent implements OnInit {
  qId: any;
  title: any;
  question:any = [];
  selected:any;
  selectedOption: any;

  constructor(private active:ActivatedRoute,    private sendq:SendquestionService,
    private route :Router){
  }
  ngOnInit(): void {
    this.qId = this.active.snapshot.params['fid'];
    this.title = this.active.snapshot.params['title']; 
    this.sendq.getQuestions(this.qId).subscribe(
      (data: any) => {
        if (data) {
          this.question = Object.values(data); 
          console.log(this.question);
        } else {
          console.log('empty form.');
        }
      }
    );
  }  
}
