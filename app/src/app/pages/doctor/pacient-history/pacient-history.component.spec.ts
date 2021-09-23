import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientHistoryComponent } from './pacient-history.component';

describe('PacientHistoryComponent', () => {
  let component: PacientHistoryComponent;
  let fixture: ComponentFixture<PacientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
