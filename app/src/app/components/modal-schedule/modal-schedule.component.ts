import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-schedule',
  templateUrl: './modal-schedule.component.html',
  styleUrls: ['./modal-schedule.component.scss']
})
export class ModalScheduleComponent implements OnInit {
  hours = [
    {id: 6, name: '06:00'},
    {id: 7, name: '07:00'},
    {id: 8, name: '08:00'},
    {id: 9, name: '09:00'},
    {id: 10, name: '10:00'},
    {id: 11, name: '11:00'},
    {id: 12, name: '12:00'},
    {id: 13, name: '13:00'},
    {id: 14, name: '14:00'},
    {id: 15, name: '15:00'},
    {id: 16, name: '16:00'},
    {id: 17, name: '17:00'},
    {id: 18, name: '18:00'},
  ];

  data = {
    hour: 6,
    date: new Date()
  }
  constructor() { }

  ngOnInit(): void {
  }



}
