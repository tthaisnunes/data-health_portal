import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewCalendarClinicModalComponent } from './view-calendar-clinic-modal/view-calendar-clinic-modal.component';

import { Doctor } from '../pacient.model';
import { DoctorService } from '../pacient.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-medical-clinic-list',
  templateUrl: './medical-clinic-list.component.html',
  styleUrls: ['./medical-clinic-list.component.scss']
})
export class MedicalClinicListComponent {

  @Input() userId: number;
  clinicList: Doctor[];
  displayedColumns: string[] = ['id', 'name', 'area', 'action'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public service: DoctorService
  ) { }

  ngOnInit() {
    this.service.getClinics().subscribe(res => {
      this.clinicList = res;
      this.dataSource = new MatTableDataSource(this.clinicList);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogManagement(item: Doctor) {
    const dialogRef = this.dialog.open(ViewCalendarClinicModalComponent, {
      width: '1080px',
      data: {
        ...item
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
