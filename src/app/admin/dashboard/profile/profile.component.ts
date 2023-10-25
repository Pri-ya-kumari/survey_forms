import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/adminservice/admin-login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private route:Router,private admind:AdminLoginService){
    this.test = this.admind.getadmind().subscribe((res:any)=>{
      this.test= res;
      console.log(this.test);
    })
   // this.test=this.admind.checkadmin().subscribe((res) => {
     // this.test=res;
     
  }
  ngOnInit(): void {
  }
  test:any=[];

}
