import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private active:ActivatedRoute,private qservice:QuestionsService,private route :Router){
    
 }

  ngOnInit(): void {
    this.qId = this.active.snapshot.params['fid'];
    this.title = this.active.snapshot.params['title']; 
    this.qservice.getQuestions(this.qId).subscribe(
      (data: any) => {
        if (data) {
          //here converting the object value in array
          this.questions = Object.values(data); 
          console.log(this.questions);
        } else {
          console.log('empty form.');
        }
      }
    );
  }
  previous(){
    this.route.navigate(['/admindashboard', 'alltest']);
  }
}
