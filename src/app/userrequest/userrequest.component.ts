import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestuserService } from '../service/requestuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userrequest',
  templateUrl: './userrequest.component.html',
  styleUrls: ['./userrequest.component.css']
})
export class UserrequestComponent {

  constructor(private route:Router,private request:RequestuserService){}

  froms = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  })


  send(data:any):void{
    this.request.postuser(data).subscribe((res) => {
      if (res != "") {
        Swal.fire({
          icon: 'success',
          title: 'Successfully',
          text: 'Your Request has been sent successfully'})    
        //alert("record added");
        this.froms.reset();
      }
      else {
        //alert("error");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter the valid formate'})
        
      }
    })
    //this.route.navigate(['/homepage']);
  }
}
