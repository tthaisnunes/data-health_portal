import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../components/shared/shared.module';

import { PacientRoutingModule } from './pacient-routing.module';
import { HistoryComponent } from './history/history.component';
import { DoctorCalendarComponent } from './doctor-calendar/doctor-calendar.component';
import { MedicalClinicListComponent } from './medical-clinic-list/medical-clinic-list.component';
import { GeneralInformationComponent } from './history/general-information/general-information.component';
import { MedicalRecordComponent } from './history/medical-record/medical-record.component';
import { ExamsComponent } from './history/exams/exams.component';
import { MedicalPrescriptionsComponent } from './history/medical-prescriptions/medical-prescriptions.component';
import { SharedExamsComponent } from './history/shared-exams/shared-exams.component';
import { ManagementModalComponent } from './history/exams/management-modal/management-modal.component';
import { ManagementModalRecordsComponent } from './history/medical-record/management-modal/management-modal.component';
import { ViewExamModalComponent } from './history/shared-exams/view-exam-modal/view-exam-modal.component';

@NgModule({
  declarations: [
    HistoryComponent,
    DoctorCalendarComponent,
    MedicalClinicListComponent,
    GeneralInformationComponent,
    MedicalRecordComponent,
    ExamsComponent,
    MedicalPrescriptionsComponent,
    SharedExamsComponent,
    ManagementModalComponent,
    ManagementModalRecordsComponent,
    ViewExamModalComponent
  ],
  imports: [
    CommonModule,
    PacientRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PacientModule { }
