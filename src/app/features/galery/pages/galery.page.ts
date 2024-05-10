import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { thumbsDownSharp, thumbsUpSharp } from 'ionicons/icons';
import { myImage } from 'src/app/core/models/image.model';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage
{
  //public images : Array<myImage>
  public arrayTest : Array<number>;

  constructor() 
  { 
    this.arrayTest = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
    addIcons({thumbsUpSharp, thumbsDownSharp})
  } 
}
