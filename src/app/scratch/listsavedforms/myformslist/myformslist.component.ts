import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AddtestService } from 'src/app/adminservice/addtest.service';
import { AddDataService } from 'src/app/service/add-data.service';

@Component({
  selector: 'app-myformslist',
  templateUrl: './myformslist.component.html',
  styleUrls: ['./myformslist.component.css']
})
export class MyformslistComponent {

  myforms:any;
  templatef:any;
  constructor(private route:Router , private showforms:AddDataService,private templates:AddtestService){
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
}
