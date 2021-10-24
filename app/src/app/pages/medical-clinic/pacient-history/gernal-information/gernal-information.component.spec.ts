import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GernalInformationComponent } from './gernal-information.component';

describe('GernalInformationComponent', () => {
  let component: GernalInformationComponent;
  let fixture: ComponentFixture<GernalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GernalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GernalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
