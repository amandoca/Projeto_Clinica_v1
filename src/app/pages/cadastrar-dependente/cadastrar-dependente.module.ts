import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarDependentePageRoutingModule } from './cadastrar-dependente-routing.module';

import { CadastrarDependentePage } from './cadastrar-dependente.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarDependentePageRoutingModule
  ],
  declarations: [CadastrarDependentePage]
})
export class CadastrarDependentePageModule {}
