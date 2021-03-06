import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MCExam } from '../../../medical-clinic.model';

@Component({
  selector: 'app-management-modal',
  templateUrl: './management-modal.component.html',
  styleUrls: ['./management-modal.component.scss']
})
export class ManagementModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ManagementModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MCExam
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
