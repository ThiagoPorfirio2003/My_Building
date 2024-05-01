import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent
{
  public myNameH1class: string;
  public myDivisionH1class : string

  constructor(private utilsService : UtilsService,
    private platform : Platform)
    {
      this.myNameH1class = 'tracking-in-contract-bck-top'
      this.myDivisionH1class = 'tracking-in-contract-bck-bottom'
    }

    ionViewDidEnter()
    {
      if(!this.utilsService.splashScreenHasShown)
      {
        this.platform.ready().then(() => 
        {
          this.utilsService.splashScreenHasShown = true;
          SplashScreen.hide().then(()=>
          {
            setTimeout(() => 
            {
              this.utilsService.changeRoute('/auth')
            }, 3000);
          })
        });
      }
    }  
}
