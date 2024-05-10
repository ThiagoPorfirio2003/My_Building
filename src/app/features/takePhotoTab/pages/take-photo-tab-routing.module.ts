import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakePhotoTabPage } from './take-photo-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TakePhotoTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakePhotoTabPageRoutingModule {}
