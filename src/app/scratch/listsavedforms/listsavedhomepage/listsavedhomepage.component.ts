import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AddtestService } from 'src/app/adminservice/addtest.service';
import { AddDataService } from 'src/app/service/add-data.service';

@Component({
  selector: 'app-listsavedhomepage',
  templateUrl: './listsavedhomepage.component.html',
  styleUrls: ['./listsavedhomepage.component.css']
})
export class ListsavedhomepageComponent {
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

    this.templatef = this.templates.getdata().pipe(
      map((resdata1: any) => {
        console.log(resdata1);
        const survey2: any[] = [];
        for (const keys in resdata1) {
          console.log(keys);
          if(resdata1.hasOwnProperty(keys)){
            survey2.push({ id:keys, ...resdata1[keys] });
          }
        }
        return survey2;
      })
    );
    
    this.templatef.subscribe((ress: any) => {
      console.log(ress);
      this.templatef = ress;
    });
  }
}
