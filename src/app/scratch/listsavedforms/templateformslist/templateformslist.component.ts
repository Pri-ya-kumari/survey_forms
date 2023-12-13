import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AddtestService } from 'src/app/adminservice/addtest.service';

@Component({
  selector: 'app-templateformslist',
  templateUrl: './templateformslist.component.html',
  styleUrls: ['./templateformslist.component.css']
})
export class TemplateformslistComponent {

  templatef:any;
  constructor(private route:Router ,private templates:AddtestService){
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
