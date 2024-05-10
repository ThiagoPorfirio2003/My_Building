import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationTabsPage } from './navigation-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationTabsPage,
    children:
    [
      {
        path: 'takePhoto',
        loadChildren: () => import('../takePhotoTab/pages/take-photo-tab.module').then( m => m.TakePhotoTabPageModule)
      },
      {
        path: 'galery',
        loadChildren: () => import('../galery/pages/galery.module').then( m => m.GaleryPageModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('../statistics/pages/statistics.module').then( m => m.StatisticsPageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'takePhoto',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationTabsPageRoutingModule {}
