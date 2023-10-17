import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosAbmComponent } from './alumnos-abm.component';

describe('AlumnosAbmComponent', () => {
  let component: AlumnosAbmComponent;
  let fixture: ComponentFixture<AlumnosAbmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosAbmComponent]
    });
    fixture = TestBed.createComponent(AlumnosAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
