import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns';
import colors from '../../../components/shared/colors';
import Indicator from '../../../components/indicator/indicator.model';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ModalScheduleComponent } from '../../../components/modal-schedule/modal-schedule.component';
@Component({
  selector: 'app-calendar-clinic',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarClinicComponent {

  view = CalendarView.Month;
  viewDate = new Date();
  activeDayIsOpen = false;
  hourSegments = 1;
  dayStartHour = 6;
  dayEndHour = 18;

  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 15),
      end: addHours(startOfDay(new Date()), 16),
      title: "Exame - Pedro Santos",
      id: 1,
      color: colors.grey
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 15), 11),
      end: addDays(addHours(startOfDay(new Date()), 16), 11),
      title: "Exame - Luan Oliveira",
      id: 2,
      color: colors.grey
    },
    {
      start: addHours(startOfDay(new Date()), 17),
      end: addHours(startOfDay(new Date()), 18),
      title: "Exame - Osvaldo Pereira",
      id: 3,
      color: colors.grey
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 12), 12),
      end: addDays(addHours(startOfDay(new Date()), 13), 12),
      title: "Exame - Abigail Fidalgo",
      id: 4,
      color: colors.grey
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: "Agenda bloqueada",
      color: colors.red,
      allDay: true
    }
  ]

  indicators: Indicator[] = [
    {
      label: "Consultas cancelas último mês",
      value: 3,
      color: "red",
      status: "down",
      icon: "report_gmailerrorred",
      history: "-10%"
    },
    {
      label: "Consultas realizadas último mês",
      value: 52,
      color: "blue",
      status: "up",
      icon: "perm_contact_calendar",
      history: "+23%"
    },
    {
      label: "Retornos realizados último mês",
      value: 39,
      color: "green",
      status: "up",
      icon: "history",
      history: "+33%"
    }, {
      label: "Média atendimentos últimos 12 meses",
      value: 45,
      color: "yellow",
      status: "down",
      icon: "stacked_bar_chart",
      history: "-13%"
    }
  ];

  refresh: Subject<any> = new Subject();

  constructor(
    public dialog: MatDialog
  ) { }

  refreshView(): void {
    this.refresh.next();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalScheduleComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.events.push({
          start: addHours(startOfDay(result.date), result.hour),
          end: addHours(startOfDay(result.date), Number(result.hour) + 1),
          title: 'Agenda bloqueada',
          color: colors.red,
        });

        this.refreshView();
      }
    });
  }

}
