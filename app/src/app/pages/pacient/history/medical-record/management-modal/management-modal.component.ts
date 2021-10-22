import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicalRecords } from '../../../pacient.model';

@Component({
  selector: 'app-management-modal',
  templateUrl: './management-modal.component.html',
  styleUrls: ['./management-modal.component.scss']
})
export class ManagementModalRecordsComponent {
  constructor(
    public dialogRef: MatDialogRef<ManagementModalRecordsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MedicalRecords
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
