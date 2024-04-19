import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) {}

  getAllCandidateDetails(){
    return this.http.get("https://backendrecrutory.onrender.com/api/candidate");
  }

  patchRemarkCandidate(id:any,data:any){
    return this.http.patch(`${id}`,data);
  }

}
