import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralulistService } from '../superservice/generalulist.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-nonauthorizeduser',
  templateUrl: './nonauthorizeduser.component.html',
  styleUrls: ['./nonauthorizeduser.component.css']
})
export class NonauthorizeduserComponent {
  test:any;

  constructor(private route: Router, private showlist:  GeneralulistService) {
    this.test = this.showlist.getuser().pipe(
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

    this.test.subscribe((res: any) => {
      console.log(res);
      this.test = res;
    });
  }
}
