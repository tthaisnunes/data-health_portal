import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pacient-details',
  templateUrl: './pacient-details.component.html',
  styleUrls: ['./pacient-details.component.scss']
})

export class PacientDetailsComponent implements OnInit {
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
