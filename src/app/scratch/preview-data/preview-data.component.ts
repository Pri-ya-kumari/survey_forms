import { Component } from '@angular/core';
import { ftitle, question } from 'src/app/data-type';
import { AddDataService } from 'src/app/service/add-data.service';
@Component({
  selector: 'app-preview-data',
  templateUrl: './preview-data.component.html',
  styleUrls: ['./preview-data.component.css']
})
export class PreviewDataComponent {

  constructor(private addDataService: AddDataService) {}
  formData: undefined | question[];
  formtitle :undefined | ftitle[];

ngOnInit() {
  this.formData = this.addDataService.getformdata();
  this.formtitle = this.addDataService.getformtitle();
}
}
