import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ManagementModalPrescriptionComponent } from './management-modal-prescription/management-modal-prescription.component';

import { MCExam } from '../../medical-clinic.model';
import { MedicalClinicService } from '../../medical-clinic.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-medical-prescriptions',
  templateUrl: './medical-prescriptions.component.html',
  styleUrls: ['./medical-prescriptions.component.scss']
})

export class MedicalPrescriptionsComponent {
  @Input() userId: number;
  medicalPrescriptionsList: MCExam[];
  displayedColumns: string[] = ['requestedDate', 'scheduledDate', 'description', 'guia'];
  dataSource: MatTableDataSource<MCExam>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public service: MedicalClinicService
  ) { }

  ngOnInit() {
    this.service.getMCExams(this.userId).subscribe(res => {
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

  openDialogManagement(item?: MCExam) {
    const dialogRef = this.dialog.open(ManagementModalPrescriptionComponent, {
      width: '1580px',
      data: {
        ...item
      }
    });


  }
}
