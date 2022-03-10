import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'galeria', component: GaleriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
