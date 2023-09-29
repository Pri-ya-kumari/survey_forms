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
    path:'saved-form',
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
    path:'',
    redirectTo:'/mainpage',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
