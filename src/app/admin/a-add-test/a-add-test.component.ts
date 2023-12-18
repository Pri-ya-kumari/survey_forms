import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddtestService } from 'src/app/adminservice/addtest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-a-add-test',
  templateUrl: './a-add-test.component.html',
  styleUrls: ['./a-add-test.component.css']
})
export class AAddTestComponent implements OnInit{

  constructor(private route:Router,private addservice:AddtestService,private str:LocationStrategy){}
  ngOnInit(): void {
    this.preventback();
  }

  addes = new FormGroup({
    title : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    fid : new FormControl('',[Validators.required]),
  })
  formSubmit(data:any){
    console.log("button works")
    //this.addservice.addtest(data).subscribe((res)=>{
      this.addservice.postdata(data).subscribe((res)=>{
      if(res!=""){
        Swal.fire(
          'Added!',
          'Your data has been added.',
          'success'
        )
        this.addes.reset();
        this.route.navigate(['/admindashboard', 'alltest'])
        
      }
      else{
        alert("error");
      }
    
  })
}

preventback(){
  history.pushState(null,location.href);
  this.str.onPopState(()=>{
    history.pushState(null,location.href)
  })
}

previouspage(){
  this.route.navigate(['/admindashboard','adminhome']);
}

}
