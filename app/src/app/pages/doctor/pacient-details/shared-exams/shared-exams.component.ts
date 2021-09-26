import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewExamModalComponent } from './view-exam-modal/view-exam-modal.component';
export interface MedicalRecords {
  id: number;
  requestDate: Date;
  datePerfomeded: Date;
  imageUrl: string;
}

const ELEMENT_DATA: MedicalRecords[] = [
  { id: 1, requestDate: new Date(), datePerfomeded: new Date(), imageUrl: '../../../../../../assets/images/exams/laudo-01.jpg' },
  { id: 1, requestDate: new Date(), datePerfomeded: new Date(), imageUrl: '../../../../../../assets/images/exams/laudo-01.jpg' }
];
@Component({
  selector: 'app-shared-exams',
  templateUrl: './shared-exams.component.html',
  styleUrls: ['./shared-exams.component.scss']
})
export class SharedExamsComponent {
  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'requestDate', 'datePerfomeded', 'imageUrl'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogManagement(item: MedicalRecords) {
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
