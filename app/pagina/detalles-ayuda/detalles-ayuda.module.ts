import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesAyudaPage } from './detalles-ayuda.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesAyudaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesAyudaPage]
})
export class DetallesAyudaPageModule {}
