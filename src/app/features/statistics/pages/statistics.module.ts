import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsPageRoutingModule } from './statistics-routing.module';

import { StatisticsPage } from './statistics.page';
import { SharedComponentsModule } from 'src/app/core/sharedComponents/shared-components.module';
import { StatisticsModule } from '../statistics.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticsPageRoutingModule,
    SharedComponentsModule,
    StatisticsModule
  ],
  declarations: [StatisticsPage]
})
export class StatisticsPageModule {}
