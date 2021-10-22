import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ManagementModalRecordsComponent } from './management-modal/management-modal.component';

import { MedicalRecords } from '../../pacient.model';
import { DoctorService } from '../../pacient.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {

  @Input() userId: number;
  medicalRecordsList: MedicalRecords[];
  displayedColumns: string[] = ['date', 'description', 'actions'];
  dataSource: MatTableDataSource<MedicalRecords>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public service: DoctorService
  ) { }

  ngOnInit() {
    this.service.getMedicalRecords(this.userId).subscribe(res => {
      this.medicalRecordsList = res;
      this.dataSource = new MatTableDataSource(this.medicalRecordsList);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogManagement(item?: MedicalRecords) {
    const dialogRef = this.dialog.open(ManagementModalRecordsComponent, {
      width: '1080px',
      data: {
        ...item
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.medicalRecordsList.push({
          id: 999,
          date: new Date(),
          description: result.description,
          data: result.data,
          userId: this.userId
        });

        this.dataSource = new MatTableDataSource(this.medicalRecordsList);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

}
