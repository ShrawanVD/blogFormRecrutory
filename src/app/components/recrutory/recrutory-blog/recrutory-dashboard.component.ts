import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BlogsService } from '../../../services/blogs.service';
import { RecrutoryBlogFormComponent } from '../recrutory-blog-form/recrutory-blog-form.component';

@Component({
  selector: 'app-recrutory-dashboard',
  templateUrl: './recrutory-dashboard.component.html',
  styleUrl: './recrutory-dashboard.component.css'
})
export class RecrutoryDashboardComponent {

  displayedColumns: string[] = [
    'srno',
    'date',
    'title',
    'content',
    'imageUrl',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pageSize = 10;

  constructor(private _dialog: MatDialog, private recrutoryBlog: BlogsService) { }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(RecrutoryBlogFormComponent, {disableClose: true});
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getRecrutoryBlog();
        }
      },
    });
  }

  ngOnInit(): void {
    this.getRecrutoryBlog()
  }

  getRecrutoryBlog() {
    this.recrutoryBlog.getAllRecrutoryBlog().subscribe({
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

  openEditForm(data: any) {
        const dialogRef = this._dialog.open(RecrutoryBlogFormComponent, {
          data,
          disableClose: true
        });
    
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if (val) {
              this.getRecrutoryBlog();
            }
          },
        });
      }

}
