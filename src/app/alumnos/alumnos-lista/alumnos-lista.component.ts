import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.scss'],
})
export class AlumnosListaComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnosService.getAlumnos();
  }
}
