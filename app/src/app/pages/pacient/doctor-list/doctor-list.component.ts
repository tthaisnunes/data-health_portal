import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewCalendarModalComponent } from './view-calendar-modal/view-calendar-modal.component';

import { Exams } from '../pacient.model';
import { DoctorService } from '../pacient.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent {

  @Input() userId: number;
  examsList: Exams[];
  displayedColumns: string[] = ['id', 'name', 'area', 'action'];
  dataSource: MatTableDataSource<any>;
  data = [{
    id: 1,
    name: 'João Paulo de Souza',
    area: 'Cargiologista',
    calendar: []
  },
  {
    id: 1,
    name: 'João Paulo de Souza',
    area: 'Oftalmo',
    calendar: []
  },
  {
    id: 1,
    name: 'João Paulo de Souza',
    area: 'Padiatra',
    calendar: []
  }]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public service: DoctorService
  ) { }

  ngOnInit() {
    this.service.getSharedExams(this.userId).subscribe(res => {
      this.examsList = res;
      // this.dataSource = new MatTableDataSource(this.examsList);
      this.dataSource = new MatTableDataSource(this.data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogManagement(item: Exams) {
    const dialogRef = this.dialog.open(ViewCalendarModalComponent, {
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
