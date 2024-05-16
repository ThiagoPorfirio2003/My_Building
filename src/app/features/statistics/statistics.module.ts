import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    //NgxChartsModule,
    //CanvasJSAngularChartsModule
  ],
  exports:
  [
    BarChartComponent,
    PieChartComponent  
  ]
})
export class StatisticsModule { }
