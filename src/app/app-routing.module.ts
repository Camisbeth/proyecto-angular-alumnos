import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AlumnosListaComponent } from './alumnos/alumnos-lista/alumnos-lista.component';
import { AlumnosAbmComponent } from './alumnos/alumnos-abm/alumnos-abm.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'alumnos', component: AlumnosListaComponent },
      { path: 'alumnos/abm', component: AlumnosAbmComponent },
      { path: '', redirectTo: 'alumnos', pathMatch: 'full' }, // Redirige a /alumnos por defecto
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
