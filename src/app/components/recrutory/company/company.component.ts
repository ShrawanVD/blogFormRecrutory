import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from '../../../services/recrutory/company.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

  constructor(private _dialog: MatDialog, private companyService: CompanyService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'srno',
    'timestamp',
    'name',
    'contactno',
    'companyName',
    'email',
    'language',
    'additionalLanguage',
    'location',
    'compensationBand',
    'workingMode',
    'roleType',
    'hiringTimeline',
    'communicationChannel',
    'employementType'
  ];

  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void{
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.companyService.getAllCustomerDetails().subscribe({
      next: (res:any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // openEditForm(data: any) {
  //       const dialogRef = this._dialog.open(RecrutoryBlogFormComponent, {
  //         data,
  //       });
    
  //       dialogRef.afterClosed().subscribe({
  //         next: (val) => {
  //           if (val) {
  //             this.getRecrutoryBlog();
  //           }
  //         },
  //       });
  //     }

  

  // openAddEditEmpForm() {
  //   const dialogRef = this._dialog.open(RecrutoryBlogFormComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         this.getRecrutoryBlog();
  //       }
  //     },
  //   });
  // }

}
