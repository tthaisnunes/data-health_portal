import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-pacient-details',
  templateUrl: './pacient-details.component.html',
  styleUrls: ['./pacient-details.component.scss']
})
export class PacientDetailsComponent implements OnInit {
  stateControl = new FormControl();
  states: string[] = ['SP', 'ES', 'RG'];
  filteredStates: Observable<string[]>;
  cityControl = new FormControl();
  cities: string[] = ['One', 'Two', 'Three'];
  filteredCities: Observable<string[]>;


  constructor() { }

  ngOnInit(): void {
    this.filteredStates = this.stateControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterStates(value))
    );

    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCities(value))
    );
  }

  _filterStates(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(states => states.toLowerCase().includes(filterValue));
  }

  _filterCities(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(cities => cities.toLowerCase().includes(filterValue));
  }

}
