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
import { LoginComponent } from './login/login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ConactFormComponent } from './demo/conact-form/conact-form.component';
import { DemoRegisterComponent } from './demo/demo-register/demo-register.component';
import { PreviewContactComponent } from './demo/preview-contact/preview-contact.component';
import { EventFormComponent } from './demo/event-form/event-form.component';
import { EventRegComponent } from './demo/event-reg/event-reg.component';
import { EventpreviewComponent } from './demo/eventpreview/eventpreview.component';
const routes: Routes = [
  {
    path:'mainpage',
    component:MainpageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'homepage',
    component:HeaderComponent
  },
  {
    path:'add-forms',
    component:AddFormsComponent
  },
  {
    path:'pd',
    component:PreviewDataComponent
  },
  {
    path:'template-form',
    component:TemplateComponent
  },
  {
    path:'angular-s-form',
    component:AngularsFormComponent
  },
  {
    path:'complete',
    component:FinalsubmitComponent
  },
  {
    path:'htcsjs-form',
    component:HtcsjsComponent
  },
  {
    path:'event',
    component:EventFormComponent
  },
  {
    path:'admin',
    component:AdminpageComponent,
    //canActivate:[authGuard]
  },
  {
    path:'',
    redirectTo:'/mainpage',
    pathMatch:'full'
  },
  {
    path:'demof1',
    component:ConactFormComponent,
  },
  {
    path:'demoregister',
    component:DemoRegisterComponent,
  },
  {
    path:'eventregister',
    component:EventRegComponent,
  },
  {
    path:'previewcontact',
    component:PreviewContactComponent,
  },
  {
    path:'previewevent',
    component:EventpreviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
