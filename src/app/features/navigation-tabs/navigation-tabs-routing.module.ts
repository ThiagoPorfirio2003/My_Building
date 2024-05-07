import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationTabsPage } from './navigation-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationTabsPageRoutingModule {}
