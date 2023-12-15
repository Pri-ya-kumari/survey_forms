import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmincreationService } from 'src/app/superadmin/superservice/admincreation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private route:Router,private admind:AdmincreationService){
    this.test = this.admind.getadmin().subscribe((res:any)=>{
      this.test= res;
      console.log(this.test);
    })
    //this.test=this.admind.checkadmin().subscribe((res) => {
      //this.test=res;
     
  }
  ngOnInit(): void {
  }
  test:any=[];

  previous(){
    this.route.navigate(['/admindashboard', 'adminhome']);
  }

}