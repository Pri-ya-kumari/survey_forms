import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendquestionService } from 'src/app/service/sendquestion.service';

@Component({
  selector: 'app-finalpage',
  templateUrl: './finalpage.component.html',
  styleUrls: ['./finalpage.component.css']
})
export class FinalpageComponent {

  qId: any;
  title: any;
  question:any = [];
  answer:any=[];
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
          //here converting the object value in array
          this.question = Object.values(data); 
          console.log(this.question);
          } 
          else {
          console.log('empty form.');
        }
      }
    );
    
  }
  
}
