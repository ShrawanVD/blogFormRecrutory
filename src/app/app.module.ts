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
import { CuriotoryBlogFormComponent } from './components/curiotory-blog-form/curiotory-blog-form.component';
import { RecrutoryBlogFormComponent } from './components/recrutory-blog-form/recrutory-blog-form.component';
import { CuriotoryDashboardComponent } from './components/curiotory-dashboard/curiotory-dashboard.component';
import { RecrutoryDashboardComponent } from './components/recrutory-dashboard/recrutory-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CuriotoryBlogFormComponent,
    RecrutoryBlogFormComponent,
    CuriotoryDashboardComponent,
    RecrutoryDashboardComponent,
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
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
