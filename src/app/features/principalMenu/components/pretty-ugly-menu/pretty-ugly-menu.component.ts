import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pretty-ugly-menu',
  templateUrl: './pretty-ugly-menu.component.html',
  styleUrls: ['./pretty-ugly-menu.component.scss'],
})
export class PrettyUglyMenuComponent{

  @Output() chooseBeautyEventEmiter : EventEmitter<boolean>;

  constructor() 
  { 
    this.chooseBeautyEventEmiter = new EventEmitter<boolean>();
  }

  public chooseBeauty(isPretty : boolean)
  {
    this.chooseBeautyEventEmiter.emit(isPretty)
  }

}
