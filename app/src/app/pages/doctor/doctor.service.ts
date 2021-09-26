import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as Model from './doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsersList(): Observable<Model.PacientData[]> {
    return this.httpClient.get<Model.PacientData[]>('data/user.json');
  }
}