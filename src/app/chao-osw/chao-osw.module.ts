import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaoOswComponent } from './chao-osw/chao-osw.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: ChaoOswComponent},
];
@NgModule({
  declarations: [ChaoOswComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ChaoOswModule { }
