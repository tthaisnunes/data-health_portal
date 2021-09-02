import { CalendarDateFormatter, CalendarEvent, DateFormatterParams } from 'angular-calendar';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {
  public weekViewHour({ date, locale }: DateFormatterParams): string {
    return this.dayViewHour({ date, locale });
  }

  public monthViewColumnHeader({ date, locale = '' }: DateFormatterParams): string {
    return formatDate(date, 'EEE', locale);
  }

  public monthViewTitle({ date, locale = '' }: DateFormatterParams): string {
    return formatDate(date, 'MMM y', locale);
  }

  public weekViewColumnHeader({ date, locale = '' }: DateFormatterParams): string {
    return formatDate(date, 'EEE', locale);
  }

  public dayViewHour({ date, locale = '' }: DateFormatterParams): string {
    return formatDate(date, 'HH:mm', locale);
  }
}
