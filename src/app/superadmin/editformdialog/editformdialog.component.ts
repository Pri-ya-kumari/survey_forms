import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdmincreationService } from '../superservice/admincreation.service';

@Component({
  selector: 'app-editformdialog',
  templateUrl: './editformdialog.component.html',
  styleUrls: ['./editformdialog.component.css']
})
export class EditformdialogComponent implements OnInit{

  constructor(private routes:ActivatedRoute,private route:Router,private creation:AdmincreationService){}
  ngOnInit(): void {
    console.log(this.routes.snapshot.params["id"])
    console.log(this.froms.value);
    this.creation.getdatas(this.routes.snapshot.params["id"]).subscribe((res:any)=>{
      console.log(res); 
      this.froms = new FormGroup({
        name: new FormControl(res['name']),
        email: new FormControl(res['email']),
        number: new FormControl(res['password']),
      })  
    })
  }

  froms = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(''),
  })


  send(data:any):void{
    console.log(this.froms.value);
    this.creation.updateItem(this.routes.snapshot.params["id"],this.froms.value,).subscribe((datas:any)=>{
      console.warn(datas);
      this.route.navigate(['/users'])
    })    //this.route.navigate(['/homepage']);
  }

}
