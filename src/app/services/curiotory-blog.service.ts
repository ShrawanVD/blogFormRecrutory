import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuriotoryBlogService {

  constructor(public http:HttpClient) { }

  getAllCuriotroyBlogs(){
    return this.http.get("");
  }

  postCuriotoryBlog(data:any){
      return this.http.post("",data);
  }

  patchCuriotoryBlog(id:any,data:any){
    return this.http.patch('',data);
  }

}
