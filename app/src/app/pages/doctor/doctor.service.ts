import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

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

  getUser(id: number): Observable<Model.PacientData[]> {
    return this.httpClient.get<Model.PacientData[]>('data/user.json').pipe(
      map(item => item.filter(item => item.id === id)),
    );
  }

  getMedicalRecords(userId: Number): Observable<Model.MedicalRecords[]> {
    return this.httpClient.get<Model.MedicalRecords[]>('data/medical-record.json').pipe(
      map(item => item.filter(item => item.userId === userId)),
    );
  }

  getExams(userId: Number): Observable<Model.Exams[]> {
    return this.httpClient.get<Model.Exams[]>('data/exams.json').pipe(
      map(item => item.filter(item => item.userId === userId)),
    );
  }

  getSharedExams(userId: Number): Observable<Model.Exams[]> {
    return this.httpClient.get<Model.Exams[]>('data/exams.json').pipe(
      map(item => item.filter(item => item.userId === userId && item.status.toLocaleLowerCase() === 'compartilhado')),
    );
  }

  getMedicalPrescriptions(userId: Number): Observable<Model.MedicalPrescriptions[]> {
    return this.httpClient.get<Model.MedicalPrescriptions[]>('data/medical-prescriptions.json').pipe(
      map(item => item.filter(item => item.userId === userId)),
    );
  }
}
