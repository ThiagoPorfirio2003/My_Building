import { Injectable } from '@angular/core';
import { CollectionNames } from '../enums/collectionNames';

@Injectable({
  providedIn: 'root'
})
export class PrettyUglyService 
{
  private isPretty : boolean;
  private collectionName : CollectionNames;

  constructor() 
  { 
    this.isPretty = false;
    this.collectionName = CollectionNames.PRETTY_PHOTOS;
  }

  public set IsPretty(isPretty : boolean)
  {
    this.isPretty = isPretty;

    if(isPretty)
    {
      this.collectionName = CollectionNames.PRETTY_PHOTOS;
    }
    else
    {
      this.collectionName = CollectionNames.UGLY_PHOTOS;
    }
  }

  public get IsPretty()
  {
    return this.isPretty;
  }

  public get CollectionName()
  {
    return this.collectionName;
  }
}
