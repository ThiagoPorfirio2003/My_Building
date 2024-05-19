import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { push } from 'ionicons/icons';
import { Subscription } from 'rxjs';
import { CollectionNames } from 'src/app/core/enums/collectionNames';
import { GraphData } from 'src/app/core/models/graphData.model';
import { MyImage } from 'src/app/core/models/myImage.model';
import { DatabaseService } from 'src/app/core/services/database.service';
import { PrettyUglyService } from 'src/app/core/services/pretty-ugly.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit, OnDestroy{

  public view! : [number, number];
  private photosSuscription! : Subscription;
  public photosDataToShow : Array<GraphData>;
  public showGraph : boolean;

  constructor(private platform : Platform, 
    public prettyUglyService : PrettyUglyService,
    public utilsService : UtilsService,
    private dataBaseService : DatabaseService) 
  { 
    this.handleScreenSizeChange();
    this.photosDataToShow = new Array<GraphData>();
    this.showGraph = false;
  }

   ngOnInit(): void 
  {
    this.photosSuscription = this.dataBaseService.getObservable(this.prettyUglyService.CollectionName)
    .subscribe((photos : Array<DocumentData>)=>
    {
      const myPhotos : Array<MyImage> = photos as Array<MyImage>;

      myPhotos.forEach((photo)=>
      {
        if(photo.likes != 0)
        {
          let newPhoto : GraphData = {name: photo.name, value: photo.likes}

          if(!this.prettyUglyService.IsPretty)
          {
            newPhoto.label = {position: 'inside'}
            if(newPhoto.value < 2)
            {
              newPhoto.label = {position: 'right'};
            }
          }
  
          this.photosDataToShow.push(newPhoto)
        }
      })
      this.showGraph = true;
    })
  }

  ngOnDestroy(): void {
    this.photosSuscription.unsubscribe();
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


    this.view = [0.95 * width, 0.8 * height]

  }
}

    //console.log(width + ' ' + height)

/*
    if(width > height)
    {
      this.view = [0.95 * width, 0.95 * height]
    }
    else
    {
      this.view = [0.95 * width, 0.95 * height]
    }
    */