import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';

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

  constructor(private router: Router,private blog:BlogsService){}

  onLogin(){
    if((this.loginObj.userName=='vaibhav' && this.loginObj.passWord=='v@123') || this.loginObj.userName=='varun' && this.loginObj.passWord=='Varun@123'){
      this.router.navigateByUrl('blog');
    }
  }

}
