import { Component } from '@angular/core';
import { SignuserService } from 'src/app/service/signuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-surveyusers',
  templateUrl: './surveyusers.component.html',
  styleUrls: ['./surveyusers.component.css']
})
export class SurveyusersComponent {
  test:any=[];
  id:any;
  constructor( private userd: SignuserService) {
    this.test = this.userd.loginuser(this.id).subscribe((res:any) => {
      this.test = res;
      console.log(this.test);
    })
  }
  ngOnInit(): void {
    
  }
  deleted(data:any){
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
    //})
  }
  update(data1:any){
    //alert(data1);
    //this.route.navigate(['/update/'+'id'])
  }
}
