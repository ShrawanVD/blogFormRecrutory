import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(public http: HttpClient) { }


  getAllCustomerDetails(){
    return this.http.get("https://backendrecrutory.onrender.com/api/company");
  }

}
