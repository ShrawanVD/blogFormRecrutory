import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CompanyComponent } from './components/recrutory/company/company.component';
import { RecrutoryDashboardComponent } from './components/recrutory/recrutory-blog/recrutory-dashboard.component';
import { CandidateComponent } from './components/recrutory/candidate/candidate.component';
import { RecrutoryNewDashboardComponent } from './components/recrutory/recrutory-new-dashboard/recrutory-new-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'recrutory/blogs',
    component: RecrutoryDashboardComponent
  },
  {
    path: 'recrutory/company',
    component: CompanyComponent
  },
  {
    path: 'recrutory/candidate',
    component: CandidateComponent
  },
  {
    path: 'recrutory',
    // canActivate: [authGuard],
    component: RecrutoryNewDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
