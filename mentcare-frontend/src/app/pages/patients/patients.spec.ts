import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patients } from './patients';

describe('Patients', () => {
  let component: Patients;
  let fixture: ComponentFixture<Patients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patients);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
