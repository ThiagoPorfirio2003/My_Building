import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsMenuComponent } from './components/actions-menu/actions-menu.component';
import { PrettyUglyMenuComponent } from './components/pretty-ugly-menu/pretty-ugly-menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: 
  [
    ActionsMenuComponent,
    PrettyUglyMenuComponent
  ],
  imports: 
  [
    CommonModule,
    IonicModule
  ],
  exports:
  [
    ActionsMenuComponent,
    PrettyUglyMenuComponent
  ]
})
export class PrincipalMenuModule { }
