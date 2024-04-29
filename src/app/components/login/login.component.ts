import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any={
    userName: '',
    passWord: ''
  };

  constructor( private loginService: LoginService){}

  // onLogin(data:any){
  //   console.log(data);
  //   this.loginService.login(data);
  // }















  // onLogin(){
  //   if((this.loginObj.userName=='recrutory' && this.loginObj.passWord=='r@123')){
  //     this.router.navigateByUrl('recrutory');
  //   }
  // }




  // onLogin(module: string, username: string, password: string): void {
  //   // Perform authentication for the specified module
  //   const isAuthenticated = this.authService.isAuthenticated(module, username, password);

  //   if (isAuthenticated) {
  //     // Authentication successful, navigate to the appropriate module
  //     if (module === 'curiotory') {
  //       // Navigate to curiotory module
  //       this.router.navigateByUrl('/curiotory');
  //     } else if (module === 'recrutory') {
  //       // Navigate to recrutory module
  //       this.router.navigateByUrl('/recrutory');
  //     }
  //   } else {
  //     // Authentication failed, display error message
  //     console.log('Authentication failed. Invalid username or password.');
  //   }
  // }










}
