import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import Swal from 'sweetalert2';
import { SigneduserService } from '../superservice/signeduser.service';
import { AdminserviceService } from 'src/app/service/adminservice.service';

@Component({
  selector: 'app-adminshow',
  templateUrl: './adminshow.component.html',
  styleUrls: ['./adminshow.component.css']
})
export class AdminshowComponent {
  test: any; 

  constructor(private route: Router, private showlist: SigneduserService,public dialog :MatDialog,
    private admin:AdminserviceService) {
    this.test = this.admin.loginuses().pipe(
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
  deleteadmin(data:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "Are You Sure You Want To Delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.test.splice(data-1,1)
        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      }
    })
    this.test;
    
  }



}
