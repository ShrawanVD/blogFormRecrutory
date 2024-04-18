import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogsService } from '../../../services/blogs.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CuriotoryBlogService } from '../../../services/curiotory-blog.service';

@Component({
  selector: 'app-curiotory-blog-form',
  templateUrl: './curiotory-blog-form.component.html',
  styleUrl: './curiotory-blog-form.component.css'
})
export class CuriotoryBlogFormComponent implements OnInit{

  blogForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,private curiotoryBlog:CuriotoryBlogService,private _snackBar: MatSnackBar,private _fb: FormBuilder, private _dialogRef: MatDialogRef<CuriotoryBlogFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.blogForm = this._formBuilder.group({
      title: [''],
      content: [''],
      content2: [''],
      imageUrl: [''],
      imageUrl2: ['']
    });
  }

  ngOnInit(): void {
    this.blogForm.patchValue(this.data);
  }

  submitBlogs(){
    if(this.blogForm.valid){
      
      // for updating form
      if(this.data){
        this.curiotoryBlog.patchCuriotoryBlog(this.data.id,this.data).subscribe({
          next: (val: any) => {
            this._snackBar.open('Curiotory Blog Updated Successfully', 'Close', {
              duration: 3000,
            });
            window.location.reload();
          },
          error: (err: any) => {
            this._snackBar.open('Curiotory Blog Updated Successfully', 'Close', {
              duration: 3000,
            });
            window.location.reload();
          }
        })
      }

    }else{
      // for adding new data

      if(this.blogForm.value.content){
        this.curiotoryBlog.postCuriotoryBlog(this.blogForm.value).subscribe({
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

}










// ----------------------------- github code: ----------------------------------

// export class EmpAddEditComponent implements OnInit {
//   empForm: FormGroup;

//   education: string[] = [
//     'Matric',
//     'Diploma',
//     'Intermediate',
//     'Graduate',
//     'Post Graduate',
//   ];

//   constructor(
//     private _fb: FormBuilder,
//     private _empService: EmployeeService,
//     private _dialogRef: MatDialogRef<EmpAddEditComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private _coreService: CoreService
//   ) {
//     this.empForm = this._fb.group({
//       firstName: '',
//       lastName: '',
//       email: '',
//       dob: '',
//       gender: '',
//       education: '',
//       company: '',
//       experience: '',
//       package: '',
//     });
//   }

//   ngOnInit(): void {
//     this.empForm.patchValue(this.data);
//   }

//   onFormSubmit() {
//     if (this.empForm.valid) {
//       if (this.data) {
//         this._empService
//           .updateEmployee(this.data.id, this.empForm.value)
//           .subscribe({
//             next: (val: any) => {
//               this._coreService.openSnackBar('Employee detail updated!');
//               this._dialogRef.close(true);
//             },
//             error: (err: any) => {
//               console.error(err);
//             },
//           });
//       } else {
//         this._empService.addEmployee(this.empForm.value).subscribe({
//           next: (val: any) => {
//             this._coreService.openSnackBar('Employee added successfully');
//             this._dialogRef.close(true);
//           },
//           error: (err: any) => {
//             console.error(err);
//           },
//         });
//       }
//     }
//   }
// }
