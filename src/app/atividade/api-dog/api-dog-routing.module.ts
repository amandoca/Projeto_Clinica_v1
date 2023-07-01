import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiDogPage } from './api-dog.page';

const routes: Routes = [
  {
    path: '',
    component: ApiDogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiDogPageRoutingModule {}
