import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalClinicListComponent } from './medical-clinic-list.component';

describe('MedicalClinicListComponent', () => {
  let component: MedicalClinicListComponent;
  let fixture: ComponentFixture<MedicalClinicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalClinicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalClinicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
