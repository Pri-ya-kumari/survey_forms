import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddtestService } from 'src/app/adminservice/addtest.service';

@Component({
  selector: 'app-a-add-test',
  templateUrl: './a-add-test.component.html',
  styleUrls: ['./a-add-test.component.css']
})
export class AAddTestComponent {

  constructor(private route:Router,private addservice:AddtestService){}

  addes = new FormGroup({
    title : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
  })
  formSubmit(data:any){
    console.log("button works")
    this.addservice.addtest(data).subscribe((res)=>{
      if(res!=""){
        alert("record added");
        this.addes.reset();
        this.route.navigate(['/admindashboard', 'alltest'])
      }
      else{
        alert("error");
      }
    
  })
}


}
