import { Component } from '@angular/core';
import { AdmincreationService } from '../superservice/admincreation.service';
import { map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SigneduserService } from '../superservice/signeduser.service';

@Component({
  selector: 'app-authorizeduserlist',
  templateUrl: './authorizeduserlist.component.html',
  styleUrls: ['./authorizeduserlist.component.css']
})
export class AuthorizeduserlistComponent {

  test: any; 

  constructor(private route: Router, private showlist: SigneduserService,public dialog :MatDialog) {
    this.test = this.showlist.getUsers().pipe(
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
