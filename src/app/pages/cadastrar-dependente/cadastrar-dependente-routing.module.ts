import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarDependentePage } from './cadastrar-dependente.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarDependentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarDependentePageRoutingModule {}
