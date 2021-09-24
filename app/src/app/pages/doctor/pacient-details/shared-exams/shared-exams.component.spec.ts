import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedExamsComponent } from './shared-exams.component';

describe('SharedExamsComponent', () => {
  let component: SharedExamsComponent;
  let fixture: ComponentFixture<SharedExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
