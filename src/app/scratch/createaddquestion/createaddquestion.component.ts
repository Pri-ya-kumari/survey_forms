import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AddtestService } from 'src/app/adminservice/addtest.service';
import { AddDataService } from 'src/app/service/add-data.service';

@Component({
  selector: 'app-createaddquestion',
  templateUrl: './createaddquestion.component.html',
  styleUrls: ['./createaddquestion.component.css']
})
export class CreateaddquestionComponent implements OnInit{
  
  
  myforms:any;
  templatef:any;
  constructor(private route:Router , private showforms:AddDataService){
    this.myforms = this.showforms.getdata().pipe(
      map((resdata: any) => {
        console.log(resdata);
        const survey: any[] = [];
        for (const key in resdata) {
          console.log(key);
          if(resdata.hasOwnProperty(key)){
            survey.push({ id:key, ...resdata[key] });
          }
        }
        return survey;
      })
    );

    this.myforms.subscribe((res: any) => {
      console.log(res);
      this.myforms = res;
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
