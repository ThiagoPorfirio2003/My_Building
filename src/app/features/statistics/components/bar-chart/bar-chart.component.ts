import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent{
	
	@Input() view! : any;
	public single : any[];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme : any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

	constructor() 
  {
    this.single= [
      {
        name: 'Germany',
        value: 10,
      },
      {
        name: 'USA',
        value: 20,
      },
      {
        name: 'France',
        value: 30,
      }
    ]

    for(let i: number =0 ;i< 25; i++)
      {
        this.single.push({name: 'placeHolder: ' + i, value: i})
      }
  }

  public onSelect(event : any) 
  {
    console.log(event);
  }
}
