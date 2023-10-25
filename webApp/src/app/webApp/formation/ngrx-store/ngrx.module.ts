import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompStore1Component } from './composants/comp-store1/comp-store1.component';
import { CompStore2Component } from './composants/comp-store2/comp-store2.component';



@NgModule({
  declarations: [
    CompStore1Component,
    CompStore2Component
  ],
  imports: [
    CommonModule
  ]
})
export class NgrxModule { }
