import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(public http: HttpClient) { }


  getAllCustomerDetails(){
    return this.http.get("https://recrutory-form-backend.onrender.com/api/company");
  }

  patchRemarkCompany(id:any,data:any){
    return this.http.patch(`https://recrutory-form-backend.onrender.com/api/company/remarks/${id}`,data);
  }

}
