import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ManagementModalPrescriptionComponent } from './management-modal-prescription/management-modal-prescription.component';
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
  selector: 'app-medical-prescriptions',
  templateUrl: './medical-prescriptions.component.html',
  styleUrls: ['./medical-prescriptions.component.scss']
})

export class MedicalPrescriptionsComponent {
  @Input() userId: number;

  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'date', 'description', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogManagement() {
    const dialogRef = this.dialog.open(ManagementModalPrescriptionComponent, {
      width: '1080px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
