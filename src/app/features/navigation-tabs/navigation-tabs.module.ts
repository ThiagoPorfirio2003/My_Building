import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationTabsPageRoutingModule } from './navigation-tabs-routing.module';

import { NavigationTabsPage } from './navigation-tabs.page';
import { SharedComponentsModule } from 'src/app/core/sharedComponents/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationTabsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [NavigationTabsPage]
})
export class NavigationTabsPageModule {}
