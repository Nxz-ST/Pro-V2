import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarSesionesRoutingModule } from './gestionar-sesiones-routing.module';
import { ProyectosCreadosComponent } from './pages/proyectos-creados/proyectos-creados.component';


@NgModule({
  declarations: [
    ProyectosCreadosComponent
  ],
  imports: [
    CommonModule,
    GestionarSesionesRoutingModule
  ]
})
export class GestionarSesionesModule { }
