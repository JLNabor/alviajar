import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineComponent } from './engine.component';
import { AlviajarComponent } from './alviajar/alviajar.component';
import { EtravelComponent } from './etravel/etravel.component';
import { CompanyComponent } from './company/company.component';


export  const routes:Routes = [{
  path: '', component: EngineComponent,
  children: [
    {path: 'viajar',component: AlviajarComponent},
    {path: 'caja',component: EtravelComponent},
    {path: 'nosotros',component: CompanyComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineRoutingModule { }
