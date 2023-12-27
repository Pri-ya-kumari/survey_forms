import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-demo-register',
  templateUrl: './demo-register.component.html',
  styleUrls: ['./demo-register.component.css'],
})
export class DemoRegisterComponent {
  froms = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    formnames: new FormControl(''),
    usercounts: new FormControl(''),
  })

  constructor(private route: Router, private fb: FormBuilder, private register: RegisterService) {
    this.setupForm();
  }
  ngOnInit(): void { }

  dataCount: number = 0;

  setupForm() {
    this.froms = this.fb.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*")]],
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required/*,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$")*/]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      formnames: ['contact form'],
      usercounts: ['1'],

    });
  }
  count: number = 0;

  onSubmit(data: any): void {
    if (this.froms.invalid) {
      Swal.fire(
        'Error!',
        'Enter the valid formate.',
      )    }

    else {
      this.route.navigate(['/previewcontact']);
      this.register.Createuser(data).subscribe((res: any) => {
        if (res != "") {
          //alert("record added");
          Swal.fire('success', 'You Can Access to the form now', 'success')
          this.froms.reset();
        }
        else {
          //alert("error");
          Swal.fire(
            'Error!',
            'Enter the valid formate.',
          )
        }
      })
    }
  }
  get f() {
    return this.froms.controls;
  }


}
