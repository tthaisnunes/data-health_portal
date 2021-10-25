import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns';
import colors from '../../../components/shared/colors';
import Indicator from '../../../components/indicator/indicator.model';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalScheduleComponent } from '../../../components/modal-schedule/modal-schedule.component';
@Component({
  selector: 'app-calendar-doctor',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarDoctorComponent {

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
      title: "Consulta - Maria Sousa",
      id: 1,
      color: colors.grey
    },
    {
      start: addHours(startOfDay(new Date()), 12),
      end: addHours(startOfDay(new Date()), 13),
      title: "Consulta - José Silva",
      id: 2,
      color: colors.grey
    },
    {
      start: addHours(startOfDay(new Date()), 17),
      end: addHours(startOfDay(new Date()), 18),
      title: "Retorno - Pedro Santos",
      id: 3,
      color: colors.green
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 12), 5),
      end: addDays(addHours(startOfDay(new Date()), 13), 5),
      title: "Consulta - Jessica Fernandes",
      id: 4,
      color: colors.grey
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 16), 9),
      end: addDays(addHours(startOfDay(new Date()), 18), 9),
      title: "Consulta - Amanda Silva",
      id: 5,
      color: colors.grey
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: "Agenda bloqueada",
      color: colors.red,
      allDay: true
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 13), 12),
      end: addDays(addHours(startOfDay(new Date()), 14), 12),
      title: "Consulta - Gabriel Neves",
      id: 6,
      color: colors.grey
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 14), 6),
      end: addDays(addHours(startOfDay(new Date()), 15), 6),
      title: "Retorno - Luan Oliveira",
      id: 7,
      color: colors.green
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 9), 3),
      end: addDays(addHours(startOfDay(new Date()), 10), 3),
      title: "Retorno - Heloisa Souza",
      id: 8,
      color: colors.green
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 11), 8),
      end: addDays(addHours(startOfDay(new Date()), 13), 8),
      title: "Consulta - Renan Joli",
      id: 9,
      color: colors.grey
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 17), 21),
      end: addDays(addHours(startOfDay(new Date()), 18), 21),
      title: "Consulta - Guilherme Simioni",
      id: 10,
      color: colors.grey
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 10), 21),
      end: addDays(addHours(startOfDay(new Date()), 11), 21),
      title: "Retorno - Vinicius Sousa",
      id: 11,
      color: colors.green
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 7), 11),
      end: addDays(addHours(startOfDay(new Date()), 8), 11),
      title: "Consulta - Estela Santana",
      id: 12,
      color: colors.grey
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 6), 10),
      end: addDays(addHours(startOfDay(new Date()), 8), 10),
      title: "Retorno - Osvaldo Pereira",
      id: 13,
      color: colors.green
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 9), 10),
      end: addDays(addHours(startOfDay(new Date()), 12), 10),
      title: "Retorno - Damião Gomes",
      id: 14,
      color: colors.green
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 8), 10),
      end: addDays(addHours(startOfDay(new Date()), 9), 10),
      title: "Consulta - Sarah Macieira",
      id: 15,
      color: colors.grey
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 10), 30),
      end: addDays(addHours(startOfDay(new Date()), 12), 30),
      title: "Consulta - Marisol Jardim",
      id: 16,
      color: colors.grey
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 17), 35),
      end: addDays(addHours(startOfDay(new Date()), 18), 35),
      title: "Retorno - Yohan Trindade",
      id: 17,
      color: colors.green
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 15), 40),
      end: addDays(addHours(startOfDay(new Date()), 16), 40),
      title: "Retorno - Abigail Fidalgo",
      id: 18,
      color: colors.green
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 6), 33),
      end: addDays(addHours(startOfDay(new Date()), 7), 33),
      title: "Retorno - Cristian Esteves",
      id: 19,
      color: colors.green
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 12), 43),
      end: addDays(addHours(startOfDay(new Date()), 14), 43),
      title: "Consulta - Cândida Ávila",
      id: 20,
      color: colors.grey
    }
  ];

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
      }

      this.refreshView();
    });
  }
}
