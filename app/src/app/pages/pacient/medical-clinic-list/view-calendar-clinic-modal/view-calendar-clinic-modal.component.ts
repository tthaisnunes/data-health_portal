import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns';
import colors from '../../../../components/shared/colors';
import Indicator from '../../../../components/indicator/indicator.model';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ModalScheduleComponent } from '../../../../components/modal-schedule/modal-schedule.component';
@Component({
  selector: 'app-view-calendar-clinic-modal',
  templateUrl: './view-calendar-clinic-modal.component.html',
  styleUrls: ['./view-calendar-clinic-modal.component.scss']
})
export class ViewCalendarClinicModalComponent {

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
      title: 'Agenda bloqueada',
      id: 1,
      color: colors.red,
    },
    {
      start: addHours(startOfDay(new Date()), 12),
      end: addHours(startOfDay(new Date()), 13),
      title: 'Agenda bloqueada',
      id: 2,
      color: colors.red,
    },
    {
      start: addHours(startOfDay(new Date()), 17),
      end: addHours(startOfDay(new Date()), 18),
      title: 'Agenda bloqueada',
      id: 3,
      color: colors.red,
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 12), 5),
      end: addDays(addHours(startOfDay(new Date()), 13), 5),
      title: 'Agenda bloqueada',
      id: 4,
      color: colors.red,
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 16), 9),
      end: addDays(addHours(startOfDay(new Date()), 18), 9),
      title: 'Agenda bloqueada',
      id: 5,
      color: colors.red,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Agenda bloqueada',
      color: colors.red,
      allDay: true,
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
          title: 'Consulta agendada',
          color: colors.green,
        });

        this.refreshView();
      }
    });
  }
}
