import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendquestionService } from 'src/app/service/sendquestion.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit{

  qId: any;
  title: any;
  question:any = [];
  answer:any = [];
  selected:any;
  selectedOption: any;

  constructor(private active:ActivatedRoute,    private sendq:SendquestionService,
    private route :Router){
  }
  ngOnInit(): void {
    this.qId = this.active.snapshot.params['fid'];
    this.title = this.active.snapshot.params['title']; 
    this.sendq.getanswer(this.qId).subscribe(
      (data: any) => {
        if (data) {
          //here converting the object value in array
          this.answer = Object.values(data); 
          console.log(this.answer);
        } else {
          console.log('empty form.');
        }
      }
    );
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
  printedQuestions: Set<string> = new Set<string>();

  // your existing component properties and methods

  // Method to check if a question is already printed
  isQuestionPrinted(question: string): boolean {
    return this.printedQuestions.has(question);
  }


}