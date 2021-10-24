import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-exam-modal',
  templateUrl: './view-exam-modal.component.html',
  styleUrls: ['./view-exam-modal.component.scss']
})
export class ViewExamModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
