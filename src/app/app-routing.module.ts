import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CreateuserComponent } from './admin/createuser/createuser.component';
import { AuthorizeduserlistComponent } from './superadmin/authorizeduserlist/authorizeduserlist.component';
import { adminguardGuard } from './guard/adminguard.guard';
import { superguardGuard } from './guard/superguard.guard';
import { UpdateadminDetailsComponent } from './superadmin/updateadmin-details/updateadmin-details.component';
import { UpdateauthouserDetailsComponent } from './superadmin/updateauthouser-details/updateauthouser-details.component';
import { SuperadminprofileComponent } from './superadmin/superadminprofile/superadminprofile.component';
import { UpdatesuperadminComponent } from './superadmin/updatesuperadmin/updatesuperadmin.component';
import { HomepageComponent } from './homepage/homepage.component';
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
import { QuestionshowcompComponent } from './scratch/questionshowcomp/questionshowcomp.component';
import { ResponseComponent } from './scratch/response/response.component';
import { AdminshowComponent } from './superadmin/adminshow/adminshow.component';
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
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'addfromshome',
    component: AddformshomepageComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'addtitle',
        pathMatch: 'full',
      },
      {
        path: 'addtitle',
        component: AddingtitleComponent,
        canActivate: [authGuard]
      },
      {
        path: 'questionaddingforms',
        component: CreateaddquestionComponent,
        canActivate: [authGuard]
      },
      {
        path: 'addingquestionnow/:fid/:title',
        component: AddquestionformnowComponent,
        canActivate: [authGuard]
      },
    ]
  },
  {
    path: 'listsurveyhome',
    component: ListsavedformsComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'listsavedhomepage',
        pathMatch: 'full',
      },
      {
        path: 'listsavedhomepage',
        component: ListsavedhomepageComponent,
        canActivate: [authGuard]
      },
      {
        path: 'myformlist',
        component: MyformslistComponent,
        canActivate: [authGuard]
      },
      {
        path: 'templateformlist',
        component: TemplateformslistComponent,
        canActivate: [authGuard]
      },
      {
        path: 'viewsavedforms',
        component: ViewsavedformsComponent,
        canActivate: [authGuard],
        children: [
          {
            path: 'questionshowcomp/:fid/:title',
            component: QuestionshowcompComponent,
            canActivate: [authGuard]
          },
          {
            path: 'response/:fid/:title',
            component: ResponseComponent,
            canActivate: [authGuard]
          },
        ]
      },
      {
        path: 'viewadminsavedforms/:fid/:title',
        component: ViewadmindrivenformsComponent,
        canActivate: [authGuard]
      },
    ]
  },
  {
    path: 'response/:fid/:title',
    component: previewfileComponent,
    canActivate: [authGuard]
  },
  {
    path: 'temphome',
    component: TempHomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'template-form',
        pathMatch: 'full',
      },
      {
        path: 'template-form',
        component: TemplateComponent,
        canActivate: [authGuard]
      },
      {
        path: 'viewsurvey/:fid/:title',
        component: ViewSurveyComponent,
        canActivate: [authGuard]
      },
    ]
  },
  {
    path: 'allforms',
    component: SavedformsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'pd',
    component: PreviewDataComponent,
    canActivate: [authGuard]
  },
  {
    path: 'angular-s-form',
    component: AngularsFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'complete',
    component: FinalsubmitComponent,
    canActivate: [authGuard]
  },
  {
    path: 'htcsjs-form',
    component: HtcsjsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'updateadmin/:id',
    component: EditformdialogComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'generalusers',
    component: GuserComponent,
    //canActivate:[authGuard]
  },
  {
    path: 'angularrecord',
    component: AngularRecordComponent,
    canActivate: [authGuard]
  },
  {
    path: 'userrequest',
    component: UserrequestComponent,
    canActivate: [authGuard]
  },
  {
    path: 'updateadmindetails/:id',
    component: UpdateadminDetailsComponent,
    canActivate: [superguardGuard],
  },
  {
    path: 'updateuserdetails/:id',
    component: UpdateauthouserDetailsComponent,
    canActivate: [superguardGuard],
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
        component: SuperadminprofileComponent,
        canActivate: [superguardGuard],
        children:[
          {
            path: 'updatesuperadmin/:cid',
            component: UpdatesuperadminComponent,
            canActivate: [superguardGuard],
          },
        ]
      },
      {
        path: 'admincreation',
        component: AdmincreationComponent,
        canActivate: [superguardGuard],
      },
      {
        path: 'alladminlist',
        component: ListadminComponent,
        canActivate: [superguardGuard],
      },
      {
        path: 'userresquest',
        component: UserrequestsComponent,
        canActivate: [superguardGuard],
      },
      {
        path: 'authorizeduserlist',
        component: AuthorizeduserlistComponent,
        canActivate: [superguardGuard],
        children:[
          {
            path:'',
            redirectTo:'adminuserlist',
            pathMatch:'full'
          },
          {
            path: 'generaluserlist',
            component: NonauthorizeduserComponent,
            canActivate: [superguardGuard],
          },
          {
            path: 'adminuserlist',
            component: AdminshowComponent,
            canActivate: [superguardGuard],
          },
        ]
      },
    ]
  },
  {
    path: 'admindashboard',
    component: DashboardComponent,
    canActivate: [adminguardGuard],
    children: [
      {
        path: '',
        redirectTo: 'adminhome',
        pathMatch: 'full'
      },
      {
        path: 'adminhome',
        component: AhomepageComponent,
        canActivate: [adminguardGuard],
      },
      {
        path: 'atest',
        component: AAddTestComponent,
        canActivate: [adminguardGuard],
      },
      {
        path: 'aquestion/:fid/:title',
        component: AAddquestionComponent,
        canActivate: [adminguardGuard],
      },
      {
        path: 'addquestion/:fid/:title',
        component: AddquestionsComponent,
        canActivate: [adminguardGuard],
      },
      {
        path: 'alltest',
        component: AlltestComponent,
        canActivate: [adminguardGuard],
      },
      {
        path: 'cusers',
        component: CreateuserComponent,
        canActivate: [adminguardGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [adminguardGuard],
        children: [
          {
            path: 'updatepass/:cid',
            component: UpdatePasswordComponent,
            canActivate: [adminguardGuard],
          },
        ]
      },
      {
        path: 'users',
        component: UsersDetailsComponent,
        canActivate: [adminguardGuard],
      },
      {
        path: 'update/:id',
        component: UpdateComponentComponent,
        canActivate: [adminguardGuard],
      },
      {
        path: 'guser',
        component: GeneralUsersComponent,
        canActivate: [adminguardGuard],
      },
      {
        path: 'analysis',
        component: AnalysisDataComponent,
        canActivate: [adminguardGuard],
      },
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
    path: '**',
    component: WildcardshowComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
