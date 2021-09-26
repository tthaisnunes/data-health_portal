import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DoctorRoutingModule } from '../doctor/doctor-routing.module';
import { MasterLayoutComponent } from '../../components/master-layout/master-layout.component';
import { SharedModule } from '../../components/shared/shared.module';
import { CalendarComponent } from './calendar/calendar.component';
import { PacientHistoryComponent } from './pacient-history/pacient-history.component';
import { PacientDetailsComponent } from './pacient-details/pacient-details.component';
import { GernalInformationComponent } from './pacient-details/gernal-information/gernal-information.component';
import { MedicalRecordComponent } from './pacient-details/medical-record/medical-record.component';
import { ExamsComponent } from './pacient-details/exams/exams.component';
import { MedicalPrescriptionsComponent } from './pacient-details/medical-prescriptions/medical-prescriptions.component';
import { SharedExamsComponent } from './pacient-details/shared-exams/shared-exams.component';
import { ManagementModalComponent } from './pacient-details/medical-record/management-modal/management-modal.component';
import { ManagementModalExamsComponent } from './pacient-details/exams/management-modal/management-modal.component';
import { ManagementModalPrescriptionComponent } from './pacient-details/medical-prescriptions/management-modal-prescription/management-modal-prescription.component';
import { ViewExamModalComponent } from './pacient-details/shared-exams/view-exam-modal/view-exam-modal.component';


@NgModule({
  declarations: [
    MasterLayoutComponent,
    CalendarComponent,
    PacientHistoryComponent,
    PacientDetailsComponent,
    GernalInformationComponent,
    MedicalRecordComponent,
    ExamsComponent,
    MedicalPrescriptionsComponent,
    SharedExamsComponent,
    ManagementModalComponent,
    ManagementModalExamsComponent,
    ManagementModalPrescriptionComponent,
    ViewExamModalComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class DoctorModule { }
