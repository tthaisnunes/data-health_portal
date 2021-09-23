import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PacientData {
  id: number;
  name: string;
  sex: string;
  age: number;
  status: string;
  statusColor: string;
}

@Component({
  selector: 'app-pacient-history',
  templateUrl: './pacient-history.component.html',
  styleUrls: ['./pacient-history.component.scss']
})
export class PacientHistoryComponent implements OnInit{
  userList: PacientData[];

  displayedColumns: string[] = ['name', 'sex', 'age', 'status', 'action'];
  dataSource: MatTableDataSource<PacientData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(){
    this.userList = [
      {
        id: 1,
        name: "José",
        sex: "Masculino",
        age: 78,
        status: "Aguardando Retorno",
        statusColor: "green"
      },
      {
        id: 2,
        name: "Maria",
        sex: "Feminino",
        age: 36,
        status: "Consulta Agendada",
        statusColor: "blue"
      },
      {
        id: 3,
        name: "João",
        sex: "Masculino",
        age: 25,
        status: "Finalizado",
        statusColor: "grey"
      },
      {
        id: 4,
        name: "Jesus",
        sex: "Masculino",
        age: 78,
        status: "Consulta Agendada",
        statusColor: "blue"
      }
    ];
    this.dataSource = new MatTableDataSource(this.userList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
