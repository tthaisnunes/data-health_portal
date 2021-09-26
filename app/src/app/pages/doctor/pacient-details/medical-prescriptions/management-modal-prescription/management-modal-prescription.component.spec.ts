import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModalPrescriptionComponent } from './management-modal-prescription.component';

describe('ManagementModalPrescriptionComponent', () => {
  let component: ManagementModalPrescriptionComponent;
  let fixture: ComponentFixture<ManagementModalPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementModalPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementModalPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
