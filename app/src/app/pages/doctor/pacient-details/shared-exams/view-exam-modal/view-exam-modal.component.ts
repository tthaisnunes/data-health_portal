import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MedicalRecords {
  id: number;
  requestDate: Date;
  datePerfomeded: Date;
  imageUrl: string;
}

@Component({
  selector: 'app-view-exam-modal',
  templateUrl: './view-exam-modal.component.html',
  styleUrls: ['./view-exam-modal.component.scss']
})

export class ViewExamModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MedicalRecords) { }
}
