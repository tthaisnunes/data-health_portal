import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../components/shared/shared.module';

import { MedicalClinicRoutingModule } from './medical-clinic-routing.module';
import { PacientHistoryComponent } from './pacient-history/pacient-history.component';
import { PacientListComponent } from './pacient-list/pacient-list.component';
@NgModule({
  declarations: [
    PacientHistoryComponent,
    PacientListComponent
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
