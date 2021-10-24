import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../components/shared/shared.module';

import { MedicalClinicRoutingModule } from './medical-clinic-routing.module';
import { PacientHistoryComponent } from './pacient-history/pacient-history.component';
import { PacientListComponent } from './pacient-list/pacient-list.component';
import { GernalInformationComponent } from './pacient-history/gernal-information/gernal-information.component';
import { MedicalPrescriptionsComponent } from './pacient-history/medical-prescriptions/medical-prescriptions.component';
import { ManagementModalPrescriptionComponent } from './pacient-history/medical-prescriptions/management-modal-prescription/management-modal-prescription.component';
import { MedicalRecordComponent } from './pacient-history/medical-record/medical-record.component';
import { ManagementModalComponent } from './pacient-history/medical-record/management-modal/management-modal.component';


@NgModule({
  declarations: [
    PacientHistoryComponent,
    PacientListComponent,
    GernalInformationComponent,
    MedicalPrescriptionsComponent,
    MedicalRecordComponent,
    ManagementModalPrescriptionComponent,
    ManagementModalComponent
  ],
  imports: [
    CommonModule,
    MedicalClinicRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicalClinicModule { }
