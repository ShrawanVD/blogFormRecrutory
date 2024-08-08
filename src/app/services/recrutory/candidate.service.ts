import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) {}

  getAllCandidateDetails(){
    return this.http.get("https://recrutory-form-backend.onrender.com/api/candidate");
  }

  patchRemarkCandidate(id:any,data:any){
    return this.http.patch(`https://recrutory-form-backend.onrender.com/api/candidate/remarks/${id}`,data);
  }

}
