import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SignuserService } from 'src/app/service/signuser.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {

  Id=1;
  constructor(private route:ActivatedRoute,private fb: FormBuilder,private updatedeta:SignuserService){
    this.setupForm();
  }
  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"])
    this.Id = this.route.snapshot.params["id"];
    this.updatedeta.loginuser(this.route.snapshot.params["id"]).subscribe((res:any)=>{
      console.log(res);
      this.froms = new FormGroup({
        name: new FormControl(res['name']),
        email: new FormControl(res['email']),
        password: new FormControl(res['password']),
      })
    
    })
    //alert(this.Id);
  }
  froms = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
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
  
  get f() {
    return this.froms.controls;
  }
  homepage(data:any){
    
  }
}
