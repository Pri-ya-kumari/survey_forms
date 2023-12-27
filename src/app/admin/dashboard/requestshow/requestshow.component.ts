import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { RequestuserService } from 'src/app/service/requestuser.service';

@Component({
  selector: 'app-requestshow',
  templateUrl: './requestshow.component.html',
  styleUrls: ['./requestshow.component.css']
})
export class RequestshowComponent {
  request:any;

  constructor (private route : Router,private req :RequestuserService){
    this.request = this.req.getuser().pipe(
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

  this.request.subscribe((res: any) => {
    console.log(res);
    this.request = res;
  });
}
}
