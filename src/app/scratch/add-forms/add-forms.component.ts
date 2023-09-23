import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDataService } from 'src/app/service/add-data.service';

@Component({
  selector: 'app-add-forms',
  templateUrl: './add-forms.component.html',
  styleUrls: ['./add-forms.component.css']
})
export class AddFormsComponent {

  public displayTitle:any = 'Untitiled';
  //this is all for the survey form titile only 
  display = true;
  isselect = true;
  isclicked = false;
  selectedvalue: string = '';
  checkb: any[] = [0];
  checkc: any[] = [0];
  //public choice:any='';
  selectedOptions: { [key: string]: string } = {};
  display1 = true;

  constructor(private addDataService: AddDataService,
    private router: Router) { }

  saveform() {
    // Assuming formValue is the form data you want to save
    this.addDataService.addFormdata(this.studentForm.value);
    this.addDataService.addformTitle(this.displayTitle.value);
    this.router.navigate(['/saved-form']);
  }

  formTitle : FormGroup = new FormGroup({
    titlelist:new FormArray([this.gettitle()])
  });
  gettitle(): FormGroup{
    return new FormGroup({
      title:new FormGroup(''),
    });
  }
  //till there 
  studentForm: FormGroup = new FormGroup({
    studentlist: new FormArray([this.getstudentfield()])
  });
  getstudentfield(): FormGroup {
    return new FormGroup({
      Question: new FormControl(''),
      option: new FormControl(''),
    });
  }

  studentListArray() {
    return this.studentForm.get('studentlist') as FormArray;
  }

  addStudent() {
    this.studentListArray().push(this.getstudentfield());
  }

  removeStudent(i: number) {
    this.studentListArray().removeAt(i);
  }

  getformData() {
    console.log(this.studentForm.value);
  }
  //surveyform title
  toggle() {
    this.isclicked = true;
  }
  disable() {
    this.isclicked = false;
  }
  getTitle(value: string) {
    //console.log(value);
    this.displayTitle = value;
  }
  //till here survey form title
  addcheck() {
    this.checkb.push({});
  }
  remove(index1: number) {
    this.checkb.splice(index1);
  }
  addch() {
    this.checkc.push({});
  }
  removech(index1: number) {
    this.checkc.splice(index1);
  }
}
