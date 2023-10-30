import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GooglesheetService } from 'src/app/service/googlesheet.service';

@Component({
  selector: 'app-angular-record',
  templateUrl: './angular-record.component.html',
  styleUrls: ['./angular-record.component.css']
})
export class AngularRecordComponent implements OnInit{

  data:any=[];
  constructor( private route:Router,private angular:GooglesheetService){
    this.data = this.angular.getdata().subscribe((res:any)=>{
      this.data = res;
      console.log(res);
    })
  }
  ngOnInit(): void {
  }

}
