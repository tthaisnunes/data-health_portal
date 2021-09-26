import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ManagementModalComponent } from './management-modal/management-modal.component';
export interface MedicalRecords {
  id: number;
  date: Date;
  description: string;
}

const ELEMENT_DATA: MedicalRecords[] = [
  { id: 1, date: new Date(), description: 'bla bla' },
  { id: 2, date: new Date(), description: 'bla bla' },
];
@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})

export class MedicalRecordComponent {
  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'date', 'description', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogManagement() {
    const dialogRef = this.dialog.open(ManagementModalComponent, {
      width: '1080px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
