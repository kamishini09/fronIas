import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaComponent } from './consulta/consulta.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inscripcion',
    pathMatch: 'full'
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
   path: 'inscripcion',
   component: InscripcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
