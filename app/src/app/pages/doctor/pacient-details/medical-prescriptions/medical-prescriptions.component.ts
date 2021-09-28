import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ManagementModalPrescriptionComponent } from './management-modal-prescription/management-modal-prescription.component';

import { MedicalPrescriptions } from '../../doctor.model';
import { DoctorService } from '../../doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-medical-prescriptions',
  templateUrl: './medical-prescriptions.component.html',
  styleUrls: ['./medical-prescriptions.component.scss']
})

export class MedicalPrescriptionsComponent {
  @Input() userId: number;
  medicalPrescriptionsList: MedicalPrescriptions[];
  displayedColumns: string[] = ['id', 'date', 'description', 'actions'];
  dataSource: MatTableDataSource<MedicalPrescriptions>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public service: DoctorService
  ) { }

  ngOnInit() {
    this.service.getMedicalPrescriptions(this.userId).subscribe(res => {
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

  openDialogManagement(item?: MedicalPrescriptions) {
    const dialogRef = this.dialog.open(ManagementModalPrescriptionComponent, {
      width: '1080px',
      data: {
        ...item
      }
    });
  }
}
