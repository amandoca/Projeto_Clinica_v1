import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertSamplePage } from './alert-sample.page';

const routes: Routes = [
  {
    path: '',
    component: AlertSamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertSamplePageRoutingModule {}
