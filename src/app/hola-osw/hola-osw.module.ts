import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolaOswComponent } from './hola-osw/hola-osw.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: HolaOswComponent}
];


@NgModule({
  declarations: [HolaOswComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HolaOswModule { }
