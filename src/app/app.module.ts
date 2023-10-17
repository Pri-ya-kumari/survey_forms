import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddFormsComponent } from './scratch/add-forms/add-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { PreviewDataComponent } from './scratch/preview-data/preview-data.component';
import { TemplateComponent } from './scratch/template/template.component';
import { AngularsFormComponent } from './scratch/template/angulars-form/angulars-form.component';
import { HtcsjsComponent } from './scratch/template/htcsjs/htcsjs.component';
import { FinalsubmitComponent } from './scratch/template/finalsubmit/finalsubmit.component';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import { environment } from '../environments/environment';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ConactFormComponent } from './demo/conact-form/conact-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBoxComponent } from './demo/dialog-box/dialog-box.component';
import { DemoRegisterComponent } from './demo/demo-register/demo-register.component';
import { PreviewContactComponent } from './demo/preview-contact/preview-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    AddFormsComponent,
    PreviewDataComponent,
    TemplateComponent,
    AngularsFormComponent,
    HtcsjsComponent,
    FinalsubmitComponent,
    MainpageComponent,
    LoginComponent,
    AdminpageComponent,
    ConactFormComponent,
    DialogBoxComponent,
    DemoRegisterComponent,
    PreviewContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [ 
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
