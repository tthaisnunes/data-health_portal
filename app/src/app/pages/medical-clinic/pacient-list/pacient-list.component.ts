import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { PacientData } from '../medical-clinic.model';
import { MedicalClinicService } from '../medical-clinic.service';

@Component({
  selector: 'app-pacient-list',
  templateUrl: './pacient-list.component.html',
  styleUrls: ['./pacient-list.component.scss']
})
export class PacientListComponent implements OnInit {
  userList: PacientData[];

  displayedColumns: string[] = ['name', 'sex', 'age', 'status', 'action'];
  dataSource: MatTableDataSource<PacientData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: MedicalClinicService
  ) { }

  ngOnInit() {
    this.service.getUsersList().subscribe(res => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
