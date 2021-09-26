import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { PacientData } from '../../doctor.model';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-gernal-information',
  templateUrl: './gernal-information.component.html',
  styleUrls: ['./gernal-information.component.scss']
})
export class GernalInformationComponent implements OnInit {
  @Input() userId: number;
  pacientData: PacientData;
  pacientForm = this.fb.group({
    name: [''],
    age: [''],
    height: [''],
    weight: [''],
    mail: [''],
    phone: [''],
    cellPhone: [''],
    zipCode: [''],
    street: [''],
    streetNumber: [''],
    complement: [''],
    neighborhood: [''],
    state: [''],
    city: [''],
    notes: ['']
  });

  constructor(
    private service: DoctorService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.service.getUser(this.userId).subscribe(res => {
      this.pacientData = res[0];
      this.buildForm(this.pacientData);
    });
  }

  buildForm(pacientData: PacientData) {
    this.pacientForm = this.fb.group({
      name: [pacientData.name],
      age: [pacientData.age],
      height: [pacientData.height],
      weight: [pacientData.weight],
      mail: [pacientData.email],
      phone: [pacientData.phone],
      cellPhone: [pacientData.cellPhone],
      zipCode: [pacientData.zipCode],
      street: [pacientData.street],
      streetNumber: [pacientData.streetNumber],
      complement: [pacientData.complement],
      neighborhood: [pacientData.neighborhood],
      state: [pacientData.state],
      city: [pacientData.city],
      notes: [pacientData.notes],
    });
  }

  onSave(){
    this._snackBar.open('Alterações salvas com sucesso', '', {
      duration: 2000,
      panelClass: 'white'
    });
  }

}
