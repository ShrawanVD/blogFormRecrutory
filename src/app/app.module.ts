import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RecrutoryBlogFormComponent } from './components/recrutory/recrutory-blog-form/recrutory-blog-form.component';
import { RecrutoryDashboardComponent } from './components/recrutory/recrutory-blog/recrutory-dashboard.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CompanyComponent } from './components/recrutory/company/company.component';
import { CandidateComponent } from './components/recrutory/candidate/candidate.component';
import { RecrutoryNewDashboardComponent } from './components/recrutory/recrutory-new-dashboard/recrutory-new-dashboard.component';

import { AngularEditorModule } from
'@kolkov/angular-editor'
;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecrutoryBlogFormComponent,
    RecrutoryDashboardComponent,
    CompanyComponent,
    CandidateComponent,
    RecrutoryNewDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    AngularEditorModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
