import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
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
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AhomepageComponent } from './admin/ahomepage/ahomepage.component';
import { AAddquestionComponent } from './admin/a-addquestion/a-addquestion.component';
import { AAddTestComponent } from './admin/a-add-test/a-add-test.component';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { AngularRecordComponent } from './admin/dashboard/angular-record/angular-record.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AddtestService } from './adminservice/addtest.service';
import { ViewSurveyComponent } from './scratch/template/view-survey/view-survey.component';
import { TempHomeComponent } from './scratch/template/temp-home/temp-home.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SignuserService } from './service/signuser.service';
import { GuserComponent } from './guser/guser.component';
import { UseraccesdelogComponent } from './useraccesdelog/useraccesdelog.component';
import { UserrequestComponent } from './userrequest/userrequest.component';
import { SadashboardComponent } from './superadmin/sadashboard/sadashboard.component';
import { AdmincreationComponent } from './superadmin/admincreation/admincreation.component';
import { EditformdialogComponent } from './superadmin/editformdialog/editformdialog.component';
import { UserrequestsComponent } from './superadmin/userrequests/userrequests.component';
import { NonauthorizeduserComponent } from './superadmin/nonauthorizeduser/nonauthorizeduser.component';
import { WildcardshowComponent } from './wildcardshow/wildcardshow.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CreateuserComponent } from './admin/createuser/createuser.component';
import { AuthorizeduserlistComponent } from './superadmin/authorizeduserlist/authorizeduserlist.component';
import { CookieService } from 'ngx-cookie-service';
import { UpdateadminDetailsComponent } from './superadmin/updateadmin-details/updateadmin-details.component';
import { UpdateauthouserDetailsComponent } from './superadmin/updateauthouser-details/updateauthouser-details.component';
import { SuperadminprofileComponent } from './superadmin/superadminprofile/superadminprofile.component';
import { UpdatesuperadminComponent } from './superadmin/updatesuperadmin/updatesuperadmin.component';
import {MatCardModule} from '@angular/material/card';
import { ChatboxComponent } from './chatbotoption/chatbox/chatbox.component';
import { SavedformsComponent } from './scratch/savedforms/savedforms.component';
import { ListsavedformsComponent } from './scratch/listsavedforms/listsavedforms.component';
import { ListsavedhomepageComponent } from './scratch/listsavedforms/listsavedhomepage/listsavedhomepage.component';
import { MyformslistComponent } from './scratch/listsavedforms/myformslist/myformslist.component';
import { TemplateformslistComponent } from './scratch/listsavedforms/templateformslist/templateformslist.component';
import { ViewsavedformsComponent } from './scratch/listsavedforms/viewsavedforms/viewsavedforms.component';
import { ViewadmindrivenformsComponent } from './scratch/listsavedforms/viewadmindrivenforms/viewadmindrivenforms.component';
import { AddingtitleComponent } from './scratch/addingtitle/addingtitle.component';
import { AddformshomepageComponent } from './scratch/addformshomepage/addformshomepage.component';
import { CreateaddquestionComponent } from './scratch/createaddquestion/createaddquestion.component';
import { AddquestionformnowComponent } from './scratch/addquestionformnow/addquestionformnow.component';
import { previewfileComponent } from './scratch/previewfile/previewfile.component';
import { ResponseComponent } from './scratch/response/response.component';
import { QuestionshowcompComponent } from './scratch/questionshowcomp/questionshowcomp.component';
import { AdminshowComponent } from './superadmin/adminshow/adminshow.component';
import { RequestshowComponent } from './admin/dashboard/requestshow/requestshow.component';
import { DemoRegisterComponent } from './demo/demo-register/demo-register.component';
import { DialogBoxComponent } from './demo/dialog-box/dialog-box.component';
import { EventdialogboxComponent } from './demo/eventdialogbox/eventdialogbox.component';
import { EventRegComponent } from './demo/event-reg/event-reg.component';
import { FinalpageComponent } from './scratch/finalpage/finalpage.component';
import { QuestionviewbuildComponent } from './scratch/questionviewbuild/questionviewbuild.component';
import { SurveycreatosComponent } from './admin/dashboard/users-details/surveycreatos/surveycreatos.component';
import { SurveyusersComponent } from './admin/dashboard/users-details/surveyusers/surveyusers.component';
import { MisComponent } from './admin/dashboard/users-details/mis/mis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PreviewDataComponent,
    TemplateComponent,
    AngularsFormComponent,
    HtcsjsComponent,
    FinalsubmitComponent,
    MainpageComponent,
    ConactFormComponent,
    PreviewContactComponent,
    EventFormComponent,
    EventpreviewComponent,
    DemoRegisterComponent,
    DialogBoxComponent,
    EventdialogboxComponent,
    EventRegComponent,
    DashboardComponent,
    AhomepageComponent,
    AAddquestionComponent,
    AAddTestComponent,
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
    UseraccesdelogComponent,
    UserrequestComponent,
    SadashboardComponent,
    AdmincreationComponent,
    EditformdialogComponent,
    UserrequestsComponent,
    NonauthorizeduserComponent,
    WildcardshowComponent,
    LoginpageComponent,
    CreateuserComponent,
    AuthorizeduserlistComponent,
    UpdateadminDetailsComponent,
    UpdateauthouserDetailsComponent,
    SuperadminprofileComponent,
    UpdatesuperadminComponent,
    ChatboxComponent,
    SavedformsComponent,
    ListsavedformsComponent,
    ListsavedhomepageComponent,
    MyformslistComponent,
    TemplateformslistComponent,
    ViewsavedformsComponent,
    ViewadmindrivenformsComponent,
    AddingtitleComponent,
    AddformshomepageComponent,
    CreateaddquestionComponent,
    AddquestionformnowComponent,
    previewfileComponent,
    ResponseComponent,
    QuestionshowcompComponent,
    AdminshowComponent,
    RequestshowComponent,
    FinalpageComponent,
    QuestionviewbuildComponent,
    SurveycreatosComponent,
    SurveyusersComponent,
    MisComponent,
    
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
    AngularFireAuthModule,
    MatDialogModule,
    CKEditorModule,
    MatCardModule
  ],
  providers: [ 
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService,AddtestService,SignuserService,CookieService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }