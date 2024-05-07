import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { camera, list, statsChart } from 'ionicons/icons';

@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.page.html',
  styleUrls: ['./navigation-tabs.page.scss'],
})
export class NavigationTabsPage
{
  constructor() 
  {
    addIcons({camera,statsChart, list})
  }


}
