import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Color, LegendPosition } from '@swimlane/ngx-charts';
import { GraphData } from 'src/app/core/models/graphData.model';
import { myImage } from 'src/app/core/models/image.model';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnChanges
{
  @Input() view! : [number,number];
  @Input() prettyPhotos : Array<GraphData>;

  constructor() 
  {
    this.prettyPhotos = new Array<GraphData>();
  }

  ngOnChanges(/*changes: SimpleChanges*/): void 
  {
    this.makeGraph()
  }
  
  private makeGraph()
  {
    const chartDom = document.getElementById('pie-chart')!;
    chartDom.style.width = this.view[0] + 'px';
    chartDom.style.height = this.view[1]/1.2 + 'px';

    const myChart = echarts.init(chartDom);

    const option: EChartsOption =
    {  
      title: {
        text: 'Cosas lindas',
        left: 'center',
        textStyle:
        {
          color: '#2CCAAF',
          fontSize: '3rem'
        }
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        bottom: 'bottom',
        textStyle:
        {
          color: '#000',
          fontSize: '16px'
        },
      },
      tooltip: {
        trigger: 'item',
        position: ['20%', '15%']
      },
      series: [
        {
          name: 'Me gusta',
          type: 'pie',
          radius: '65%',
          data: this.prettyPhotos,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.15)'
            },
          },
          label:
          {
            color:'#000',
            fontSize: '16px',
            edgeDistance: 10,
          },
          labelLine:
          {
            length: 8,
            length2: 8
          }
        }
      ]
    }
    option && myChart.setOption(option);
  }
}
