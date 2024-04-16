import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(public http:HttpClient) { }

  postBlogs(data:any){
    return this.http.post('https://blogsbackend-l09l.onrender.com/sendBlogs',data);
  }

}



// ----------------------------- github code: (coreservice.ts) ----------------------------------

// import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Injectable({
//   providedIn: 'root',
// })
// export class CoreService {
//   constructor(private _snackBar: MatSnackBar) {}

//   openSnackBar(message: string, action: string = 'ok') {
//     this._snackBar.open(message, action, {
//       duration: 1000,
//       verticalPosition: 'top',
//     });
//   }
// } 




// ----------------------------- github code: (employeeservice.ts) ----------------------------------

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class EmployeeService {
//   constructor(private _http: HttpClient) {}

//   addEmployee(data: any): Observable<any> {
//     return this._http.post('http://localhost:3000/employees', data);
//   }

//   updateEmployee(id: number, data: any): Observable<any> {
//     return this._http.put(`http://localhost:3000/employees/${id}`, data);
//   }

//   getEmployeeList(): Observable<any> {
//     return this._http.get('http://localhost:3000/employees');
//   }

//   deleteEmployee(id: number): Observable<any> {
//     return this._http.delete(`http://localhost:3000/employees/${id}`);
//   }
// }






