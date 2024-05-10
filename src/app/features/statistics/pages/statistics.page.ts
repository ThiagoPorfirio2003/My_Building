import { Component, HostListener, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage{

  public view! : [number, number];

  constructor(private platform : Platform) 
  { 
    this.handleScreenSizeChange()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event : any)
  {
    this.handleScreenSizeChange()
  }

  handleScreenSizeChange()
  {
    const width : number = this.platform.width();
    const height : number = this.platform.height();

    console.log(width + ' ' + height)

    if(width > height)
    {
      this.view = [0.5 * width, 0.85 * height]
    }
    else
    {
      this.view = [width, 0.4 * height]
    }
  }
}
