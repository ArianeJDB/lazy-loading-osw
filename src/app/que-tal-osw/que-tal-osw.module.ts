import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueTalOswComponent } from './que-tal-osw/que-tal-osw.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: QueTalOswComponent},
];

@NgModule({
  declarations: [QueTalOswComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class QueTalOswModule { }
