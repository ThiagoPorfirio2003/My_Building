import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GraphData } from 'src/app/core/models/graphData.model';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnChanges{
	
  @Input() view! : [number,number];
  @Input() uglyPhotos : Array<GraphData>;

	constructor() 
  {
    this.uglyPhotos = new Array<GraphData>();
  }

  ngOnChanges(/*changes: SimpleChanges*/): void 
  {
    this.makeGraph()
  }
  
  private makeGraph()
  {
    const chartDom = document.getElementById('bar-chart')!;
    chartDom.style.width = this.view[0] + 'px';
    chartDom.style.height = this.view[1] + 'px';

    const myChart = echarts.init(chartDom);

    const option: EChartsOption =
    {  
      title: {
        text: 'Cosas feas',
        left: 'center',
        textStyle:
        {
          color: '#2CCAAF',
          fontSize: '2rem',
          minMargin:10
        }
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'shadow'
        }, 
        position:['15%', '90%']
      },
      /*
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        bottom: 'bottom',
        textStyle:
        {
          color: '#000',
          fontSize: '16px'
        },
      },*/
      xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        data: this.uglyPhotos,
      },
      series: [
        {
          name: 'Me gusta',
          type: 'bar',
          stack: 'Total',
          colorBy: 'data',
          label: {
            show: true,
            formatter: '{b}'
          },
          data: this.uglyPhotos
        }
      ]
    }

    option && myChart.setOption(option);
  }
  /*
  public onSelect(event : any) 
  {
    console.log(event);
  }*/
}
