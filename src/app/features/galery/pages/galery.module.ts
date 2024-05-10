import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleryPageRoutingModule } from './galery-routing.module';

import { GaleryPage } from './galery.page';
import { SharedComponentsModule } from 'src/app/core/sharedComponents/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleryPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [GaleryPage]
})
export class GaleryPageModule {}
