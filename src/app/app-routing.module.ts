import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authguardGuard } from './auth/authguard.guard';
import { CuriotoryDashboardComponent } from './components/curiotory-dashboard/curiotory-dashboard.component';
import { RecrutoryDashboardComponent } from './components/recrutory-dashboard/recrutory-dashboard.component';

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
    path: 'recrutory',
    component: RecrutoryDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
