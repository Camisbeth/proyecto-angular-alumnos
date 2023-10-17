import { Injectable } from '@angular/core';
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez' },
    { id: 2, nombre: 'María', apellido: 'García' },
    { id: 3, nombre: 'Zaira', apellido: 'Garen' },
    { id: 4, nombre: 'Juliana', apellido: 'Gomez' },
    { id: 5, nombre: 'María Angela', apellido: 'Perez' },
    { id: 6, nombre: 'Camila', apellido: 'Core' },
    { id: 7, nombre: 'Gimena', apellido: 'Martin' },
    { id: 8, nombre: 'Juana', apellido: 'García' },
    { id: 9, nombre: 'Lucia', apellido: 'García' },
  ];

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  actualizarAlumno(alumno: Alumno): void {
    const index = this.alumnos.findIndex((a) => a.id === alumno.id);
    if (index !== -1) {
      this.alumnos[index] = alumno;
    }
  }

  eliminarAlumno(id: number): void {
    this.alumnos = this.alumnos.filter((a) => a.id !== id);
  }
}
