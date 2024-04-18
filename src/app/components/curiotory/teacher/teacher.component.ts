import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CuriotoryService } from '../../../services/curiotory/curiotory.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
   
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
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pageSize =10

  constructor(private _dialog: MatDialog, private curiotory: CuriotoryService) { }


  ngOnInit(): void {
    this.getTeacher()
  }

  getTeacher() {
    this.curiotory.getAllTeacher().subscribe({
      next: (res:any) => {
        console.log(res.value);
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
}
