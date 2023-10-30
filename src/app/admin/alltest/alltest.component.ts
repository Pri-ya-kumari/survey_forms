import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'; // Import 'map' from 'rxjs/operators' instead of 'rxjs'
import { AddtestService } from 'src/app/adminservice/addtest.service';

@Component({
  selector: 'app-alltest',
  templateUrl: './alltest.component.html',
  styleUrls: ['./alltest.component.css']
})
export class AlltestComponent implements OnInit {
  test: any; // Declare the 'test' variable with a type

  constructor(private route: Router, private showtest: AddtestService) {
    this.test = this.showtest.getdata().pipe(
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

  ngOnInit(): void {
  }

  addt() {
    this.route.navigate(['/admindashboard', 'atest']);
  }
}
