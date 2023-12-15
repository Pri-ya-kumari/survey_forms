import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDataService } from 'src/app/service/add-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addingtitle',
  templateUrl: './addingtitle.component.html',
  styleUrls: ['./addingtitle.component.css']
})
export class AddingtitleComponent {

  constructor(private addDataService: AddDataService, private fb: FormBuilder
    , private router: Router) {
    this.titleform();
  }

  addes = new FormGroup({
    title: new FormControl('', [Validators.required]),
  })
  titleform() {
    this.addes = this.fb.group({
      title: ['', [Validators.required]]
    })
  }
  get l() {
    return this.addes.controls;
  }
  showalert() {
    Swal.fire(
      'Alert!',
      'First Save Your Title.',
      'warning'
    )
  }
  formssubmits(datas: any) {
    console.log("button works for firebase savgin")
    this.addDataService.postdata(datas).subscribe((res) => {
      if (res != "") {
        Swal.fire(
          'Success!',
          'Your Form Title has been saved now moving to the nextpage',
          'success'
        )
        this.router.navigate(['/addfromshome','questionaddingforms'])
      }
      else {
        Swal.fire(
          'Alert!',
          'Enter Your Title.',
          'warning'
        )
      }
    })
  }
}
