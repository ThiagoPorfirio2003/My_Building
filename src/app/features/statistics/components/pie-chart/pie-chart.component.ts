import { Component, Input, OnInit } from '@angular/core';
import { Color, LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent
{
  @Input() view! : [number,number];
  single: any[];
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  //legendPosition: string = 'below';
  legendPosition : LegendPosition;

  colorScheme : any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() 
  { 
    this.legendPosition = LegendPosition.Below; 
    this.single= [
      {
        name: 'Germany',
        value: 8940000,
      },
      {
        name: 'USA',
        value: 5000000,
      },
      {
        name: 'France',
        value: 7200000,
      }
    ] 
  }


  public onSelect(event : any) 
  {
    console.log(event);
  }
}
