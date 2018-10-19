import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const routes:Routes = [
  {
      path: 'ofertas',
      children: [
          { path: '', loadChildren: 'app/engine/engine.module#EngineModule' }
      ]
  },
  {path: '**', redirectTo: 'ofertas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
