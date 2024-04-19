import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuriotoryService {

  constructor(public http:HttpClient) { }

  getAllTeacher(){
    return this.http.get('https://backendapi-ay7s.onrender.com/api/teachers');
  }

  patchBlogs(id:any,data:any){
    return this.http.patch(`https://backendapi-ay7s.onrender.com/api/teachers/${id}`,data);
  }
}
