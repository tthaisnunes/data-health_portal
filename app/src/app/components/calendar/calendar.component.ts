import {
  Component,
  Input,
} from '@angular/core';
import {
  isSameDay,
  isSameMonth
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarDateFormatter,
  CalendarEvent,
  CalendarView,
} from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formetter.provider';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class CalendarComponent {
  @Input() view: CalendarView;
  @Input() viewDate: Date;
  @Input() events: CalendarEvent[];
  @Input() activeDayIsOpen: boolean;
  @Input() hourSegments: number;
  @Input() dayStartHour: number;
  @Input() dayEndHour: number;
  @Input() showMonth: boolean;
  @Input() showWeek: boolean;
  @Input() showDay: boolean;
  refresh: Subject<any> = new Subject();
  monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  locale: string = 'pt-BR';

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }

}
