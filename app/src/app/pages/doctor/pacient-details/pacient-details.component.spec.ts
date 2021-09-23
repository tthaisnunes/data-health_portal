import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientDetailsComponent } from './pacient-details.component';

describe('PacientDetailsComponent', () => {
  let component: PacientDetailsComponent;
  let fixture: ComponentFixture<PacientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
