import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authguardGuard } from './auth/authguard.guard';
import { CuriotoryDashboardComponent } from './components/curiotory/curiotory-dashboard/curiotory-dashboard.component';
import { CompanyComponent } from './components/recrutory/company/company.component';
import { RecrutoryDashboardComponent } from './components/recrutory/recrutory-blog/recrutory-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'curiotory',
    canActivate: [authguardGuard],
    component: CuriotoryDashboardComponent
  },
  {
    path: 'recrutory/blogs',
    component: RecrutoryDashboardComponent
  },
  {
    path: 'recrutory/company',
    component: CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
