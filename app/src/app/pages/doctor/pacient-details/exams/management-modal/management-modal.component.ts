import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exams } from '../../../doctor.model';

@Component({
  selector: 'app-management-modal',
  templateUrl: './management-modal.component.html',
  styleUrls: ['./management-modal.component.scss']
})
export class ManagementModalExamsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Exams
  ) { }

  ngOnInit(): void {
  }

}
