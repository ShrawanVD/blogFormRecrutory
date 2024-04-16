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
