import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ManagementModalExamsComponent } from './management-modal/management-modal.component';
import { DoctorService } from '../../doctor.service';
import { Exams } from '../../doctor.model';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  @Input() userId: number;
  examsList: Exams[];

  displayedColumns: string[] = ['id', 'date', 'description', 'status'];
  dataSource: MatTableDataSource<Exams>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public service: DoctorService
  ) { }

  ngOnInit() {
    this.service.getExams(this.userId).subscribe(res => {
      this.examsList = res;
      this.dataSource = new MatTableDataSource(this.examsList);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogManagement() {
    const dialogRef = this.dialog.open(ManagementModalExamsComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
