import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ManagementModalComponent } from './management-modal/management-modal.component';

import { MCExam } from '../../medical-clinic.model';
import { MedicalClinicService } from '../../medical-clinic.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})

export class MedicalRecordComponent {
  @Input() userId: number;
  medicalPrescriptionsList: MCExam[];
  displayedColumns: string[] = ['requestedDate', 'scheduledDate', 'description', 'status', 'result'];
  dataSource: MatTableDataSource<MCExam>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public service: MedicalClinicService
  ) { }

  ngOnInit() {
    this.service.getMCCompletedExams(this.userId).subscribe(res => {
      this.medicalPrescriptionsList = res;
      this.dataSource = new MatTableDataSource(this.medicalPrescriptionsList);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogManagement(item: MCExam, action?: string) {
    const dialogRef = this.dialog.open(ManagementModalComponent, {
      width: '1580px',
      data: {
        ...item,
        action
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const updatedItem = this.medicalPrescriptionsList.filter(i => i.id === item.id);
      updatedItem[0].result = '../../../../../assets/images/results/r-01.jpg';

      this.dataSource = new MatTableDataSource(this.medicalPrescriptionsList);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });


  }
}
