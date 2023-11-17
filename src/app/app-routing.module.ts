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
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/compat/auth-guard';
import { SadashboardComponent } from './superadmin/sadashboard/sadashboard.component';
import { AdmincreationComponent } from './superadmin/admincreation/admincreation.component';
import { ListadminComponent } from './superadmin/listadmin/listadmin.component';
import { EditformdialogComponent } from './superadmin/editformdialog/editformdialog.component';
import { UserrequestsComponent } from './superadmin/userrequests/userrequests.component';
import { NonauthorizeduserComponent } from './superadmin/nonauthorizeduser/nonauthorizeduser.component';
import { authGuard } from './guard/auth.guard';
import { WildcardshowComponent } from './wildcardshow/wildcardshow.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SigninpageComponent } from './superadmin/signinpage/signinpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { CreateuserComponent } from './admin/createuser/createuser.component';
import { AuthorizeduserlistComponent } from './superadmin/authorizeduserlist/authorizeduserlist.component';
import { adminguardGuard } from './guard/adminguard.guard';
import { superguardGuard } from './guard/superguard.guard';
import { UpdateadminDetailsComponent } from './superadmin/updateadmin-details/updateadmin-details.component';
import { UpdateauthouserDetailsComponent } from './superadmin/updateauthouser-details/updateauthouser-details.component';
import { SuperadminprofileComponent } from './superadmin/superadminprofile/superadminprofile.component';
import { UpdatesuperadminComponent } from './superadmin/updatesuperadmin/updatesuperadmin.component';
const redirectToLoginIn = () => redirectUnauthorizedTo(['/login'])
const redirectToHome = () => redirectLoggedInTo(['/mainpage'])
//const redirectTosuperadmin = () => redirectUnauthorizedTo(['/superadmin'])
const routes: Routes = [
  {
    path: 'mainpage',
    component: MainpageComponent,
  },
  {
    path: 'loginpage',
    component: LoginpageComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'adminlogin',
    component:SignuppageComponent,
  },
  {
    path: 'superadminLogin',
    component: SigninpageComponent,
  },
  {
    path: 'homepage',
    component: HeaderComponent,
    canActivate:[authGuard]
  },
  {
    path: 'add-forms',
    component: AddFormsComponent,
    canActivate:[authGuard]
  },
  {
    path: 'pd',
    component: PreviewDataComponent,
    canActivate:[authGuard]
  },
  {
    path: 'angular-s-form',
    component: AngularsFormComponent,
    canActivate:[authGuard]
  },
  {
    path: 'complete',
    component: FinalsubmitComponent,
    canActivate:[authGuard]
  },
  {
    path: 'htcsjs-form',
    component: HtcsjsComponent,
    canActivate:[authGuard]
  },
  {
    path: 'users',
    component: UsersDetailsComponent,
    canActivate:[adminguardGuard],
  },
  {
    path: 'update/:id',
    component: UpdateComponentComponent,
    canActivate:[adminguardGuard],
  },
  {
    path: 'updateadmin/:id',
    component: EditformdialogComponent,
    canActivate:[adminguardGuard],
  },
  {
    path: 'analysis',
    component: AnalysisDataComponent,
    canActivate:[adminguardGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[adminguardGuard],
  },
  {
    path: 'generalusers',
    component: GuserComponent,
    //canActivate:[authGuard]
  },
  {
    path: 'guser',
    component: GeneralUsersComponent,
    canActivate:[adminguardGuard],
    //data:{
      //expectedRole:['Admin']
    //}
  },
  {
    path: 'updatepass/:cid',
    component: UpdatePasswordComponent,
    canActivate:[adminguardGuard],
  },
  {
    path: 'angularrecord',
    component: AngularRecordComponent,
    canActivate:[authGuard]
  },
  {
    path: 'userrequest',
    component: UserrequestComponent,
    canActivate:[authGuard]
  },
  {
    path: 'temphome',
    component: TempHomeComponent,
    canActivate:[authGuard],
    children: [
      {
        path: '',
        redirectTo: 'template-form',
        pathMatch: 'full',
      },
      {
        path: 'template-form',
        component: TemplateComponent,
        canActivate:[authGuard]
      },
      {
        path: 'viewsurvey/:fid/:title',
        component: ViewSurveyComponent,
        canActivate:[authGuard]
      },
    ]
  }, 
  {
    path: 'updateadmindetails/:id',
    component: UpdateadminDetailsComponent,
    canActivate:[superguardGuard],
  }, 
  {
    path: 'updateuserdetails/:id',
    component: UpdateauthouserDetailsComponent,
    canActivate:[superguardGuard],
  },
  {
    path: 'updatesuperadmin/:cid',
    component: UpdatesuperadminComponent,
    canActivate:[superguardGuard],
  },  
  {
    path: 'superadmin',
    component: SadashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'superadminprofile',
        pathMatch: 'full'
      },
      {
        path: 'superadminprofile',
        component:SuperadminprofileComponent,
        canActivate:[superguardGuard],
      },
      { 
        path: 'admincreation',
        component: AdmincreationComponent,
        canActivate:[superguardGuard],
      },
      {
        path: 'alladminlist',
        component: ListadminComponent,
        canActivate:[superguardGuard],
      },
      {
        path: 'userresquest',
        component: UserrequestsComponent,
        canActivate:[superguardGuard],
      },
      {
        path: 'nonauthorized',
        component: NonauthorizeduserComponent,
        canActivate:[superguardGuard],
      },
      {
        path: 'authorizeduserlist',
        component: AuthorizeduserlistComponent,
        canActivate:[superguardGuard],
      },
    ]
  },
  {
    path: 'admindashboard',
    component: DashboardComponent,
    canActivate:[adminguardGuard],
    children: [
      {
        path: '',
        redirectTo: 'adminhome',
        pathMatch: 'full'
      },
      {
        path: 'adminhome',
        component: AhomepageComponent,
        canActivate:[adminguardGuard],
      },
      {
        path: 'atest',
        component: AAddTestComponent,
        canActivate:[adminguardGuard],
      },
      {
        path: 'aquestion/:fid/:title',
        component: AAddquestionComponent,
        canActivate:[adminguardGuard],
      },
      {
        path: 'addquestion/:fid/:title',
        component: AddquestionsComponent,
        canActivate:[adminguardGuard],
      },
      {
        path: 'alltest',
        component: AlltestComponent,
        canActivate:[adminguardGuard],
      },
      {
        path: 'cusers',
        component: CreateuserComponent,
        canActivate:[adminguardGuard],
      }
    ]
  },
  {
    path: 'event',
    component: EventFormComponent,
    //canActivate:[authGuard]
  },
  {
    path: '',
    redirectTo: '/mainpage',
    pathMatch: 'full'
  },
  {
    path: 'demof1',
    component: ConactFormComponent,
    //canActivate:[authGuard]
  },
  {
    path: 'previewcontact',
    component: PreviewContactComponent,
    //canActivate:[authGuard]
  },
  {
    path: 'previewevent',
    component: EventpreviewComponent,
    //canActivate:[authGuard]
  },
  {
    path:'**',
    component:WildcardshowComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
