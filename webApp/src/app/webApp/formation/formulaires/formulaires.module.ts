import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './composants/form-control/form-control.component';
import { FormGroupComponent } from './composants/form-group/form-group.component';
import { FormArrayComponent } from './composants/form-array/form-array.component';
import { FormulairesComponent } from './composants/formulaires/formulaires.component';
import { MaterialModule } from 'src/app/sharedModels/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormControlComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormulairesComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    // matérial Design
    MaterialModule
  ]
})

export class FormulairesModule { }
