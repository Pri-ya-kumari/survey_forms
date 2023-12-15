import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDataService } from 'src/app/service/add-data.service';

@Component({
  selector: 'app-addquestionsnow',
  templateUrl: './addquestionsnow.component.html',
  styleUrls: ['./addquestionsnow.component.css']
})
export class AddquestionsnowComponent implements OnInit{
  qId: any;
  title: any;
  questions:any = [];
  id: any;

  constructor(private active:ActivatedRoute,private qservice:AddDataService,private route :Router){
  }
  ngOnInit(): void {
    this.qId = this.active.snapshot.params['id'];
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
}
