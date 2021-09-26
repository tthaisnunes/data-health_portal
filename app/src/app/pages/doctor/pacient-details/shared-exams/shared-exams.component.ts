import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewExamModalComponent } from './view-exam-modal/view-exam-modal.component';

import { Exams } from '../../doctor.model';
import { DoctorService } from '../../doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-shared-exams',
  templateUrl: './shared-exams.component.html',
  styleUrls: ['./shared-exams.component.scss']
})
export class SharedExamsComponent {
  @Input() userId: number;
  examsList: Exams[];
  displayedColumns: string[] = ['id', 'date', 'description', 'imageUrl'];
  dataSource: MatTableDataSource<Exams>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public service: DoctorService
  ) { }

  ngOnInit() {
    this.service.getSharedExams(this.userId).subscribe(res => {
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

  openDialogManagement(item: Exams) {
    const dialogRef = this.dialog.open(ViewExamModalComponent, {
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
