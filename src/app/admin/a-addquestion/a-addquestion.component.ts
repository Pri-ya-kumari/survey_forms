import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/adminservice/questions.service';

@Component({
  selector: 'app-a-addquestion',
  templateUrl: './a-addquestion.component.html',
  styleUrls: ['./a-addquestion.component.css']
})
export class AAddquestionComponent implements OnInit {

  qId: any;
  title: any;
  questions:any = [];
  id: any;
  constructor(private active:ActivatedRoute,private qservice:QuestionsService){
    
 }

  ngOnInit(): void {
    this.qId = this.active.snapshot.params['fid'];
    this.title = this.active.snapshot.params['title']; 
    this.qservice.getQuestions(this.qId).subscribe(
      (data: any) => {
        if (data) {
          // Check if data is not null
          this.questions = Object.values(data); // Convert object values to an array
          console.log(this.questions);
        } else {
          console.log('No questions found for this form.');
        }
      },
      (error) => {
        console.error('Error loading questions:', error);
      }
    );
  }
}
