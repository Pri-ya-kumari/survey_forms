import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignuserService } from 'src/app/service/signuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  
  constructor(private route: Router, private fb: FormBuilder, private sign: SignuserService,
    public dialog: MatDialog) {
    this.setupForm();
  }
  showPassword: boolean = false;

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  froms = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  setupForm() {
    this.froms = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required/*,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")*/]]
    });
  }

  homepage(data: any): void {

    if (this.froms.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'please enter the valid formate'
      })
    }
    else {
      this.sign.Createuser(data).subscribe((res) => {
        if (res != "") {
          Swal.fire({
            icon: 'success',
            title: 'Successfully',
            text: 'Record is added successfully'
          });
          this.froms.reset();
        }
      });
    }
  }

  get f() {
    return this.froms.controls;
  }
  loginf(){
    this.route.navigate(['/loginpage'])
  }
  
previouspage(){
  this.route.navigate(['/admindashboard','users']);
}

}
