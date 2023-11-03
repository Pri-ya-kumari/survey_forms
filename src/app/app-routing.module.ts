import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormsComponent } from './scratch/add-forms/add-forms.component';
import { HeaderComponent } from './header/header.component';
import { PreviewDataComponent } from './scratch/preview-data/preview-data.component';
import { TemplateComponent } from './scratch/template/template.component';
import { AngularsFormComponent } from './scratch/template/angulars-form/angulars-form.component';
import { HtcsjsComponent } from './scratch/template/htcsjs/htcsjs.component';
import { FinalsubmitComponent } from './scratch/template/finalsubmit/finalsubmit.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignUpComponent } from './signup/signup.component';
import { ConactFormComponent } from './demo/conact-form/conact-form.component';
import { PreviewContactComponent } from './demo/preview-contact/preview-contact.component';
import { EventFormComponent } from './demo/event-form/event-form.component';
import { EventpreviewComponent } from './demo/eventpreview/eventpreview.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AhomepageComponent } from './admin/ahomepage/ahomepage.component';
import { AAddTestComponent } from './admin/a-add-test/a-add-test.component';
import { AAddquestionComponent } from './admin/a-addquestion/a-addquestion.component';
import { AlltestComponent } from './admin/alltest/alltest.component';
import { AddquestionsComponent } from './admin/addquestions/addquestions.component';
import { UsersDetailsComponent } from './admin/dashboard/users-details/users-details.component';
import { ProfileComponent } from './admin/dashboard/profile/profile.component';
import { GeneralUsersComponent } from './admin/ahomepage/general-users/general-users.component';
import { UpdateComponentComponent } from './admin/dashboard/update-component/update-component.component';
import { AnalysisDataComponent } from './admin/dashboard/analysis-data/analysis-data.component';
import { UpdatePasswordComponent } from './admin/dashboard/update-password/update-password.component';
import { AngularRecordComponent } from './admin/dashboard/angular-record/angular-record.component';
import { ViewSurveyComponent } from './scratch/template/view-survey/view-survey.component';
import { TempHomeComponent } from './scratch/template/temp-home/temp-home.component';
import { GuserComponent } from './guser/guser.component';
import { UserrequestComponent } from './userrequest/userrequest.component';
import { redirectUnauthorizedTo,redirectLoggedInTo, canActivate } from '@angular/fire/compat/auth-guard';
const redirectToLoginIn = () => redirectUnauthorizedTo(['/login'])
const redirectToHome = () => redirectLoggedInTo(['/generalusers'])

const routes: Routes = [
  {
    path: 'mainpage',
    component: MainpageComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'login',
    component: SignUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'homepage',
    component: HeaderComponent
  },
  {
    path: 'add-forms',
    component: AddFormsComponent
  },
  {
    path: 'pd',
    component: PreviewDataComponent
  },
  {
    path: 'angular-s-form',
    component: AngularsFormComponent
  },
  {
    path: 'complete',
    component: FinalsubmitComponent
  },
  {
    path: 'htcsjs-form',
    component: HtcsjsComponent
  },
  {
    path: 'users',
    component: UsersDetailsComponent,
  },
  {
    path: 'update/:id',
    component: UpdateComponentComponent
  },
  {
    path: 'analysis',
    component: AnalysisDataComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'generalusers',
    component: GuserComponent,
    ...canActivate(redirectToLoginIn)
  },
  {
    path: 'guser',
    component: GeneralUsersComponent,
  },
  {
    path: 'updatepass/:cid',
    component: UpdatePasswordComponent
  },
  {
    path: 'angularrecord',
    component: AngularRecordComponent,
  },
  {
    path: 'userrequest',
    component: UserrequestComponent,
  },
  {
    path: 'temphome',
    component: TempHomeComponent,
    children:[
      {
        path: '',
        redirectTo:'template-form',
        pathMatch:'full'
      },
      {
        path: 'template-form',
        component: TemplateComponent,
      },
      {
        path: 'viewsurvey/:fid/:title',
        component: ViewSurveyComponent,
      },
    ]
  },
  {
    path: 'admindashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'adminhome',
        pathMatch: 'full'
      },
      {
        path: 'adminhome',
        component: AhomepageComponent,
      },
      {
        path: 'atest',
        component: AAddTestComponent,
      },
      {
        path: 'aquestion/:fid/:title',
        component: AAddquestionComponent,
      },
      {
        path: 'addquestion/:fid/:title',
        component: AddquestionsComponent,
      },
      {
        path: 'alltest',
        component: AlltestComponent,
      }
    ]
  },
  {
    path: 'event',
    component: EventFormComponent
  },
  {
    path: '',
    redirectTo: '/mainpage',
    pathMatch: 'full'
  },
  {
    path: 'demof1',
    component: ConactFormComponent,
  },
  {
    path: 'previewcontact',
    component: PreviewContactComponent,
  },
  {
    path: 'previewevent',
    component: EventpreviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
