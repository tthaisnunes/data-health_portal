import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pacient-history',
  templateUrl: './pacient-history.component.html',
  styleUrls: ['./pacient-history.component.scss']
})
export class PacientHistoryComponent implements OnInit {
  userId: number;

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = Number(paramMap.get('id'));
    });
  }
}
