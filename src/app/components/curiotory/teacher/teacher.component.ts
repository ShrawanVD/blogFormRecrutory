import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CuriotoryService } from '../../../services/curiotory/curiotory.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
   teacherId :any;
  displayedColumns: string[] = [
    'srno',
    'date',
    'firstName',
    'lastName',
    'gender',
    'email',
    'phoneNumber',
    'currentLocation',
    'languages',
    'qualification',
    'certifyingInstitution',
    'student_group',
    'english_proficiency',
    'experience',
    'certificates',
    'expTranslation',
    'ratePerHour',
    'ratePerMonth',
    'additionalInformation',
    'uploadPhoto',
    'uploadCV',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;
  remarkForm!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;
  pageSize =10

  constructor(private _dialog: MatDialog, private curiotory: CuriotoryService,private _formBuilder: FormBuilder) {
    this.remarkForm = this._formBuilder.group({
      remarks: [''],
    });
   }


  ngOnInit(): void {
    this.getTeacher()
  }

  getTeacher() {
    this.curiotory.getAllTeacher().subscribe({
      next: (res:any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditRemarks(id: any){
    this.teacherId = id;
    console.log(this.teacherId);
    const dialogRef = this._dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTeacher();
        }
      },
    });
  }

  submitRemark(){
    this.curiotory.patchBlogs(this.teacherId,this.remarkForm.value).subscribe({
      next: (val: any) => {
        window.location.reload();
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
