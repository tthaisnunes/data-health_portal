import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExamModalComponent } from './view-exam-modal.component';

describe('ViewExamModalComponent', () => {
  let component: ViewExamModalComponent;
  let fixture: ComponentFixture<ViewExamModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExamModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
