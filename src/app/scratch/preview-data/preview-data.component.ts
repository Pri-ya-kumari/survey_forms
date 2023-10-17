import { Component } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { charactera,character } from 'src/app/data-type';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-preview-data',
  templateUrl: './preview-data.component.html',
  styleUrls: ['./preview-data.component.css']
})
export class PreviewDataComponent {

  characters$: Observable<character[]> | undefined;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.getActive<character>(
      environment.characters.spreadsheetId,
      environment.characters.worksheetName,
      charactera,
      'Active'
    );
  }


}
