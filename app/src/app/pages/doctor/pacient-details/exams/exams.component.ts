import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { ManagementModalExamsComponent } from './management-modal/management-modal.component';

export interface MedicalRecords {
  id: number;
  date: Date;
  description: string;
  status: string,
  statusColor: string
}

const ELEMENT_DATA: MedicalRecords[] = [
  { id: 1, date: new Date(), description: 'Hemograma plaquetas total', status: 'solicitado', statusColor: 'grey' },
  { id: 2, date: new Date(), description: 'Ultrassom abdomem total', status: 'compartilhado', statusColor: 'green' },
];

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent {
  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'date', 'description', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogManagement() {
    const dialogRef = this.dialog.open(ManagementModalExamsComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
