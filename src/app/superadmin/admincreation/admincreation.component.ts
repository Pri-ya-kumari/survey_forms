import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdmincreationService } from '../superservice/admincreation.service';
@Component({
  selector: 'app-admincreation',
  templateUrl: './admincreation.component.html',
  styleUrls: ['./admincreation.component.css']
})
export class AdmincreationComponent {

  constructor(private route:Router,private creation:AdmincreationService){}

  froms = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  })


  send(data:any):void{
    this.creation.postadmin(data).subscribe((res) => {
      if (res != "") {
        Swal.fire({
          icon: 'success',
          title: 'Successfully',
          text: 'Your Request has been sent successfully'})    
        //alert("record added");
        this.froms.reset();
        this.route.navigate(['/superadmin', 'alladminlist']);
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
