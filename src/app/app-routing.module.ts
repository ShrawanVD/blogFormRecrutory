import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authguardGuard } from './auth/authguard.guard';
import { CuriotoryDashboardComponent } from './components/curiotory/curiotory-dashboard/curiotory-dashboard.component';
import { CompanyComponent } from './components/recrutory/company/company.component';
import { RecrutoryDashboardComponent } from './components/recrutory/recrutory-blog/recrutory-dashboard.component';
import { TeacherComponent } from './components/curiotory/teacher/teacher.component';
import { CuriotoryNewDashboardComponent } from './components/curiotory/curiotory-new-dashboard/curiotory-new-dashboard.component';
import { CandidateComponent } from './components/recrutory/candidate/candidate.component';
import { RecrutoryNewDashboardComponent } from './components/recrutory/recrutory-new-dashboard/recrutory-new-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'curiotory/blogs',
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
  },
  {
    path: 'curiotory',
    component: CuriotoryNewDashboardComponent
  },
  {
    path: 'curiotory/teacher',
    component: TeacherComponent
  },
  {
    path: 'recrutory/candidate',
    component: CandidateComponent
  },
  {
    path: 'recrutory',
    component: RecrutoryNewDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
