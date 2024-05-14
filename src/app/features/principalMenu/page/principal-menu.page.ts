import { Component, OnInit } from '@angular/core';
import { PrettyUglyService } from 'src/app/core/services/pretty-ugly.service';
import { AuthService } from '../../auth/services/auth.service';
import { Photo } from '@capacitor/camera';
import { StorageService } from 'src/app/core/services/storage.service';
import { DatabaseService } from 'src/app/core/services/database.service';
import { MyImage } from 'src/app/core/models/myImage.model';
import { Timestamp } from '@angular/fire/firestore';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-principal-menu',
  templateUrl: './principal-menu.page.html',
  styleUrls: ['./principal-menu.page.scss'],
})
export class PrincipalMenuPage 
{
  public showBeautyUglyMenu : boolean;

  constructor(public prettyUglyService : PrettyUglyService,
    private authService : AuthService,
    private storageService : StorageService,
    private dataBaseService : DatabaseService,
    private utilsService : UtilsService
  ) 
  { 
    this.showBeautyUglyMenu = true;
  }

  public chooseBeauty(isPretty : boolean)
  {
    this.prettyUglyService.IsPretty = isPretty;
    this.showBeautyUglyMenu = false;
  }

  public savePhoto(photo : Photo)
  {
    const date : Date = new Date();
    const photoName : string = this.authService.myUser.userName + '_' + date.getTime() + '.' + photo.format;

    this.storageService.savePhoto(photo, this.prettyUglyService.IsPretty, photoName)
    .then((photUrl)=>
    {
      let myImg : MyImage = {
        id : '',
        isPretty : this.prettyUglyService.IsPretty,
        url : photUrl,
        originDate : Timestamp.fromDate(date),
        ownerUID : this.authService.myUser.uid,
        ownerUserName : this.authService.myUser.userName,
        likes : 0,
        name : photoName,
        UIDwhoLikes : new Array<string>(),
        currentUserLike : true
      }

      this.dataBaseService.saveImgData(myImg)
    })
  }

  public changeRoute(newRoute : string)
  {
    this.utilsService.changeRoute(newRoute);
  }
}
