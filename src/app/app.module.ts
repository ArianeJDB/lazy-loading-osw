import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaOswModule } from './hola-osw/hola-osw.module';
import { QueTalOswModule } from './que-tal-osw/que-tal-osw.module';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'hola-osw', loadChildren: () => import('./hola-osw/hola-osw.module').then(m => m.HolaOswModule) },

  { path: 'que-tal-osw', loadChildren: () => import('./que-tal-osw/que-tal-osw.module').then(m => m.QueTalOswModule)},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
