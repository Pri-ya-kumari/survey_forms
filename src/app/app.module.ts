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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ConactFormComponent } from './demo/conact-form/conact-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PreviewContactComponent } from './demo/preview-contact/preview-contact.component';
import { EventFormComponent } from './demo/event-form/event-form.component';
import { EventpreviewComponent } from './demo/eventpreview/eventpreview.component';
import { SignUpComponent } from './signup/signup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AhomepageComponent } from './admin/ahomepage/ahomepage.component';
import { AAddquestionComponent } from './admin/a-addquestion/a-addquestion.component';
import { AAddTestComponent } from './admin/a-add-test/a-add-test.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatListModule} from '@angular/material/list';
import { AlltestComponent } from './admin/alltest/alltest.component';
import { AddquestionsComponent } from './admin/addquestions/addquestions.component';
import { UsersDetailsComponent } from './admin/dashboard/users-details/users-details.component';
import { ProfileComponent } from './admin/dashboard/profile/profile.component';
import { GeneralUsersComponent } from './admin/ahomepage/general-users/general-users.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateComponentComponent } from './admin/dashboard/update-component/update-component.component';
import { AnalysisDataComponent } from './admin/dashboard/analysis-data/analysis-data.component';
import { UpdatePasswordComponent } from './admin/dashboard/update-password/update-password.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
//    imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule],
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { NgChartsModule } from 'ng2-charts';
import { AngularRecordComponent } from './admin/dashboard/angular-record/angular-record.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AddtestService } from './adminservice/addtest.service';
import { ViewSurveyComponent } from './scratch/template/view-survey/view-survey.component';
import { TempHomeComponent } from './scratch/template/temp-home/temp-home.component';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { SignuserService } from './service/signuser.service';
import { GuserComponent } from './guser/guser.component';

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
    SignUpComponent,
    ConactFormComponent,
    PreviewContactComponent,
    EventFormComponent,
    EventpreviewComponent,
    DashboardComponent,
    AhomepageComponent,
    AAddquestionComponent,
    AAddTestComponent,
    NavBarComponent,
    AlltestComponent,
    AddquestionsComponent,
    UsersDetailsComponent,
    ProfileComponent,
    GeneralUsersComponent,
    UpdateComponentComponent,
    AnalysisDataComponent,
    UpdatePasswordComponent,
    AngularRecordComponent,
    ViewSurveyComponent,
    TempHomeComponent,
    GuserComponent,
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
    MatListModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    NgChartsModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyCRRsd8l3dq10gwftPm_OmKxqYChkVqQKU",
        authDomain: "survey-forms-3ecc3.firebaseapp.com",
        databaseURL: "https://survey-forms-3ecc3-default-rtdb.firebaseio.com",
        projectId: "survey-forms-3ecc3",
        storageBucket: "survey-forms-3ecc3.appspot.com",
        messagingSenderId: "51765124953",
        appId: "1:51765124953:web:5307b4bcef53b7d400b648",
        measurementId: "G-6GZY005SP9"
    }),
    AngularFireAuthModule
  ],
  providers: [ 
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    
    GoogleSheetsDbService,AddtestService,SignuserService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
