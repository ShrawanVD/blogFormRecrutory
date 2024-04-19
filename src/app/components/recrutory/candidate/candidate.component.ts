import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CandidateService } from '../../../services/recrutory/candidate.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.css'
})
export class CandidateComponent {
  candidateId :any;
  remarkForm!: FormGroup;

  constructor(private _dialog: MatDialog, private candidateService: CandidateService,private _formBuilder: FormBuilder) {
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
    'email',
    'location',
    'companyName',
    'currRole',
    'langKnow',
    'langQuali',
    'otherlangQuali',
    'proficiency',
    'formalAssesment',
    'otherPlatform',
    'ProficiencyResult',
    'dialects',
    'supdatedLanguage',
    'sWorkshop',
    'sLangCommunity',
    'sLiterature',
    'sLangIntoWork',
    'sMethodLang',
    'sgramm',
    'tTools',
    'totherTools',
    'tTranslation',
    'tdictionaries',
    'tdevelopedTool',
    'tgeneOutput',
    'fproficient',
    'fFormalTrainer',
    'fworkExample',
    'fiInterpretation',
    'fichallenges',
    'fiLanguageSkills',
    'remarks',
    'action'
  ];

  dataSource!: MatTableDataSource<any>;
  
  ngOnInit(): void{
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.candidateService.getAllCandidateDetails().subscribe({
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
    this.candidateId = id;
    console.log(this.candidateId);
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
    this.candidateService.patchRemarkCandidate(this.candidateId,this.remarkForm.value).subscribe({
      next: (val: any) => {
        window.location.reload();
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
