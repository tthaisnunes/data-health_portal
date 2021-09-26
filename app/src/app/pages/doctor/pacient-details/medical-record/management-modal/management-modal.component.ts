import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-modal',
  templateUrl: './management-modal.component.html',
  styleUrls: ['./management-modal.component.scss']
})
export class ManagementModalComponent implements OnInit {
  data = {};

  constructor() { }

  ngOnInit(): void {
  }

}
