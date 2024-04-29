import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }


  // login(data:any){
  //   this.http.post("",data).subscribe((result:any)=>{
  //     console.warn(result)
  //     localStorage.setItem("token",result.token);
  //     this.router.navigateByUrl('recrutory');
  //   })
  // }

  // dashboard(){
  //   let headers = new HttpHeaders()
  //   .set("Authorization",`bearer ${localStorage.getItem('token')}`)
  //   this.http.post("",{},{headers})
  // }

}
