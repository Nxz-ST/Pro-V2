import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarProyectoRoutingModule } from './gestionar-proyecto-routing.module';
import { GestionarProyectoListComponent } from './pages/gestionar-proyecto-list/gestionar-proyecto-list.component';
import { GestionarProyectoEditComponent } from './pages/gestionar-proyecto-edit/gestionar-proyecto-edit.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    GestionarProyectoListComponent,
    GestionarProyectoEditComponent
  ],
  imports: [
    CommonModule,
    GestionarProyectoRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
  ]
})
export class GestionarProyectoModule { }
