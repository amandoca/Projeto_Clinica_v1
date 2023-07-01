import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiDogPageRoutingModule } from './api-dog-routing.module';

import { ApiDogPage } from './api-dog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiDogPageRoutingModule
  ],
  declarations: [ApiDogPage]
})
export class ApiDogPageModule {}
