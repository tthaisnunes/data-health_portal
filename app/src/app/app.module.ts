import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AuthModule } from './components/auth/auth.module';
import { SharedModule } from './components/shared/shared.module';

import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/doctor/dashboard/dashboard.component';
import { DashboardPacientComponent } from './pages/pacient/dashboard/dashboard.component';
import { CalendarDoctorComponent } from './pages/doctor/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { CalendarComponent } from './components/calendar/calendar.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { ChartsComponent } from './components/chart/chart.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ViewCalendarModalComponent } from './pages/pacient/doctor-list/view-calendar-modal/view-calendar-modal.component';
import { ViewCalendarClinicModalComponent } from './pages/pacient/medical-clinic-list/view-calendar-clinic-modal/view-calendar-clinic-modal.component';
import { CalendarClinicComponent } from './pages/medical-clinic/calendar/calendar.component';
import { DashboardMedicalClinicComponent } from './pages/medical-clinic/dashboard/dashboard.component';
import { ModalScheduleComponent } from './components/modal-schedule/modal-schedule.component';

registerLocaleData(localePt, 'pt');

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardPacientComponent,
    CalendarDoctorComponent,
    CalendarComponent,
    IndicatorComponent,
    ChartsComponent,
    ViewCalendarModalComponent,
    ViewCalendarClinicModalComponent,
    CalendarClinicComponent,
    DashboardMedicalClinicComponent,
    ModalScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgApexchartsModule,
    NgxMaskModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    FormsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },],
  bootstrap: [AppComponent]

})
export class AppModule { }

