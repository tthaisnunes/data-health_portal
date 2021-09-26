import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './components/auth/auth.module';
import { SharedModule } from './components/shared/shared.module';

import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/doctor/dashboard/dashboard.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { CalendarComponent } from './components/calendar/calendar.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { ChartsComponent } from './components/chart/chart.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localePt, 'pt');

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    IndicatorComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgApexchartsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},],
  bootstrap: [AppComponent]

})
export class AppModule { }

