import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicalPrescriptions } from '../../../pacient.model';

@Component({
  selector: 'app-management-modal-prescription',
  templateUrl: './management-modal-prescription.component.html',
  styleUrls: ['./management-modal-prescription.component.scss']
})
export class ManagementModalPrescriptionComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MedicalPrescriptions) { }
}
