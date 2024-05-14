import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalMenuPageRoutingModule } from './principal-menu-routing.module';

import { PrincipalMenuPage } from './principal-menu.page';
import { PrincipalMenuModule } from '../principal-menu.module';
import { SharedComponentsModule } from 'src/app/core/sharedComponents/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalMenuPageRoutingModule,
    PrincipalMenuModule,
    SharedComponentsModule
  ],
  declarations: [PrincipalMenuPage]
})
export class PrincipalMenuPageModule {}
