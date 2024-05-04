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
  public headerClass : string;
  public footerClass : string;

  constructor(private utilsService : UtilsService,
    private platform : Platform)
    {
      this.headerClass = 'slide-out-right'
      this.footerClass = 'slide-out-left'
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
              setTimeout(()=>
              {
                this.headerClass = 'slide-in-left'
                this.footerClass = 'slide-in-right'
              },1600)

              setTimeout(() => 
              {
                 this.utilsService.changeRoute('/auth')
              }, 3000);
            })
          });
        }
    }  
}
