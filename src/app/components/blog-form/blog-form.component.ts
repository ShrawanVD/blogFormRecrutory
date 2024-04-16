import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogsService } from '../../services/blogs.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent implements OnInit{

  blogForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,private blog:BlogsService,private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.blogForm = this._formBuilder.group({
      title: [''],
      content: [''],
      content2: [''],
      imageUrl: [''],
      imageUrl2: ['']
    });
  }

  submitBlogs(){
    if(this.blogForm.value.content){
      this.blog.postBlogs(this.blogForm.value).subscribe({
        next: (val: any) => {
          this._snackBar.open('Form Submitted Successfully', 'Close', {
            duration: 3000,
          });
          window.location.reload();
        },
        error: (err: any) => {
          this._snackBar.open('Form Submitted Successfully', 'Close', {
            duration: 3000,
          });
          window.location.reload();
        }
      })
    }else{
      this._snackBar.open('Please fill the form', 'Close', {
        duration: 3000,
      });
    }
  }

}
