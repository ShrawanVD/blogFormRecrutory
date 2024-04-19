import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from '../../../services/recrutory/company.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

  customerId: any;
  remarkForm!: FormGroup;
  constructor(private _dialog: MatDialog, private companyService: CompanyService,private _formBuilder: FormBuilder) {
    this.remarkForm = this._formBuilder.group({
      remarks: [''],
    });
   }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;

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
    'employementType',
    'remarks',
    'action'
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
  openEditRemarks(id: any){
    this.customerId = id;
    console.log(this.customerId);
    const dialogRef = this._dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCustomerDetails();
        }
      },
    });
  }

  submitRemark(){
    this.companyService.patchRemarkCompany(this.customerId,this.remarkForm.value).subscribe({
      next: (val: any) => {
        window.location.reload();
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }


}
