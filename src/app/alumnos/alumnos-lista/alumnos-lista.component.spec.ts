import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListaComponent } from './alumnos-lista.component';

describe('AlumnosListaComponent', () => {
  let component: AlumnosListaComponent;
  let fixture: ComponentFixture<AlumnosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosListaComponent]
    });
    fixture = TestBed.createComponent(AlumnosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
