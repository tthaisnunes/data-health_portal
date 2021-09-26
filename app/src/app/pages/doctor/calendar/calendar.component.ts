import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns';
import colors from '../../../components/shared/colors';
import Indicator from '../../../components/indicator/indicator.model';
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
      title: 'Consulta - Maria Sousa',
      id: 1,
      color: colors.grey,
    },
    {
      start: addHours(startOfDay(new Date()), 12),
      end: addHours(startOfDay(new Date()), 13),
      title: 'Consulta - José Silva',
      id: 2,
      color: colors.grey,
    },
    {
      start: addHours(startOfDay(new Date()), 17),
      end: addHours(startOfDay(new Date()), 18),
      title: 'Retorno - Pedro Santos',
      id: 3,
      color: colors.green,
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 12), 5),
      end: addDays(addHours(startOfDay(new Date()), 13), 5),
      title: 'Consulta - Jessica Fernandes',
      id: 4,
      color: colors.grey,
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 16), 9),
      end: addDays(addHours(startOfDay(new Date()), 18), 9),
      title: 'Consulta - Amanda Silva',
      id: 5,
      color: colors.grey,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Agenda bloqueada',
      color: colors.red,
      allDay: true,
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
  ]
}
