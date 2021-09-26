import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModalComponent } from './management-modal.component';

describe('ManagementModalComponent', () => {
  let component: ManagementModalComponent;
  let fixture: ComponentFixture<ManagementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
