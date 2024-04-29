import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogsService } from '../../../services/blogs.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-recrutory-blog-form',
  templateUrl: './recrutory-blog-form.component.html',
  styleUrl: './recrutory-blog-form.component.css'
})
export class RecrutoryBlogFormComponent implements OnInit{

  blogForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,private recrutoryBlog:BlogsService,private _snackBar: MatSnackBar,private _fb: FormBuilder, private _dialogRef: MatDialogRef<RecrutoryBlogFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.blogForm = this._formBuilder.group({
      title: [''],
      content: [''],
      intro: [''],
      imageUrl: [''],
      imageUrl2: ['']
    });
  }

  ngOnInit(): void {
    this.blogForm.patchValue(this.data);
  }

  submitBlogs(){
    // if(this.data._id){
    //   // for updating form
    //     this.recrutoryBlog.patchBlogs(this.data._id,this.blogForm.value).subscribe({
    //       next: (val: any) => {
    //         this._snackBar.open('Recrutory Blog Updated Successfully', 'Close', {
    //           duration: 3000,
    //         });
    //         window.location.reload();
    //       },
    //       error: (err: any) => {
    //         this._snackBar.open('Recrutory Blog Not Updated', 'Close', {
    //           duration: 3000,
    //         });
    //         window.location.reload();
    //       }
    //     })

    // }else{

      // for adding new data
      if(this.blogForm.value.content){
        this.recrutoryBlog.postBlogs(this.blogForm.value).subscribe({
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

      // this.recrutoryBlog.postBlogs(this.blogForm.value).subscribe({
      //   next: (val: any) => {
      //     this._snackBar.open('Form Submitted Successfully', 'Close', {
      //       duration: 3000,
      //     });
      //     window.location.reload();
      //   },
      //   error: (err: any) => {
      //     this._snackBar.open('Error submitting form', 'Close', {
      //       duration: 3000,
      //     });
      //     console.error(err);
      //   }
      // });


    // }
  }

  

}










// ----------------------------- github code: ----------------------------------

// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { CoreService } from '../core/core.service';
// import { EmployeeService } from '../services/employee.service';

// @Component({
//   selector: 'app-emp-add-edit',
//   templateUrl: './emp-add-edit.component.html',
//   styleUrls: ['./emp-add-edit.component.scss'],
// })
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
