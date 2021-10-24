import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addHours, endOfMonth, startOfDay, subDays } from 'date-fns';
import colors from '../../../components/shared/colors';
import Indicator from '../../../components/indicator/indicator.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardMedicalClinicComponent {
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
      title: 'Exame - Pedro Santos',
      id: 1,
      color: colors.grey,
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 15), 11),
      end: addDays(addHours(startOfDay(new Date()), 16), 11),
      title: 'Exame - Luan Oliveira',
      id: 2,
      color: colors.grey,
    },
    {
      start: addHours(startOfDay(new Date()), 17),
      end: addHours(startOfDay(new Date()), 18),
      title: 'Exame - Osvaldo Pereira',
      id: 3,
      color: colors.grey,
    },
    {
      start: addDays(addHours(startOfDay(new Date()), 12), 12),
      end: addDays(addHours(startOfDay(new Date()), 13), 12),
      title: 'Exame - Abigail Fidalgo',
      id: 4,
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
      label: "Exames realizados último mês",
      value: 114,
      color: "blue",
      status: "up",
      icon: "perm_contact_calendar",
      history: "+12%"
    },
    {
      label: "Exames encaminhados último mês",
      value: 102,
      color: "green",
      status: "up",
      icon: "history",
      history: "+15%"
    }, 
    {
      label: "Exames cancelados último mês",
      value: 12,
      color: "red",
      status: "down",
      icon: "report_gmailerrorred",
      history: "-7%"
    },
    {
      label: "Exames realizados últimos 12 meses",
      value: 983,
      color: "yellow",
      status: "down",
      icon: "stacked_bar_chart",
      history: "-13%"
    }
  ]
}
