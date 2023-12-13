import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDataService } from 'src/app/service/add-data.service';

@Component({
  selector: 'app-savedforms',
  templateUrl: './savedforms.component.html',
  styleUrls: ['./savedforms.component.css']
})
export class SavedformsComponent {

  constructor(private addDataService: AddDataService,private fb: FormBuilder
    ,private router: Router) {  }
  public displayTitle:any = 'Untitiled';

  homepage(){
    this.router.navigate(['/homepage']);
  }

}
