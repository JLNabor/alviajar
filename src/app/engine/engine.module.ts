import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineRoutingModule } from './engine-routing.module';
import { EngineComponent } from './engine.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { EtravelComponent } from './etravel/etravel.component';
import { AlviajarComponent } from './alviajar/alviajar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ItemEtravelComponent } from './item-etravel/item-etravel.component';

@NgModule({
  imports: [
    CommonModule,
    EngineRoutingModule
  ],
  declarations: [EngineComponent, HeaderComponent, FooterComponent, CompanyComponent, EtravelComponent, AlviajarComponent, SearchBoxComponent, ItemEtravelComponent]
})
export class EngineModule { }
