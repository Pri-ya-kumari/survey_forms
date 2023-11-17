import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperadmingetingService } from '../superservice/superadmingeting.service';

@Component({
  selector: 'app-updatesuperadmin',
  templateUrl: './updatesuperadmin.component.html',
  styleUrls: ['./updatesuperadmin.component.css']
})
export class UpdatesuperadminComponent {
 
  Login = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private route :Router,private service:SuperadmingetingService,private active:ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.active.snapshot.params['cid']);
    this.service.getdatass(this.active.snapshot.params['cid']).subscribe((res:any)=>{
      console.log(res);
      this.Login = new FormGroup({
        name: new FormControl(res['name']),
        email: new FormControl(res['email']),
        password: new FormControl(res['password']),
      })    
    })
  }

  savedata(data:any){
    console.log(this.Login.value);
    this.service.updateItem(this.active.snapshot.params['cid'],this.Login.value).subscribe((data1:any)=>{
      console.warn(data1);
      this.route.navigate(['/superadmin/superadminprofile']);
    })
  }

}
