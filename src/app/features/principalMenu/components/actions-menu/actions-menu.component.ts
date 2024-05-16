import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { App } from '@capacitor/app';
import { UtilsService } from 'src/app/core/services/utils.service';
import { PrettyUglyService } from 'src/app/core/services/pretty-ugly.service';



@Component({
  selector: 'app-actions-menu',
  templateUrl: './actions-menu.component.html',
  styleUrls: ['./actions-menu.component.scss'],
})
export class ActionsMenuComponent
{
  @Input() isPretty! : boolean;
  @Output() savePhotoEventEmitter : EventEmitter<Photo>;
  @Output() changeRouteEventEmitter : EventEmitter<string>;

  private appStateBeforeCamera : any;

  constructor(private authService : AuthService,
    private utilsService : UtilsService,
    private prettyUglyService : PrettyUglyService
  ) 
  { 
    this.savePhotoEventEmitter = new EventEmitter<Photo>();
    this.changeRouteEventEmitter = new EventEmitter<string>();
  }


  public takePicture()
  {
    this.saveAppState();

    Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      saveToGallery: false,
      correctOrientation : true,
      source: CameraSource.Camera,
      width: 500,
      height: 1000
    })
    .then((photo)=>
    {
      this.savePhotoEventEmitter.emit(photo);
    })
    .finally(()=> this.restoreAppState())
  }

  private saveAppState() {
    this.appStateBeforeCamera = {
      route: this.utilsService.getRoute(), 
      authUser : this.authService.getAuthUser(),
      myUser : this.authService.myUser,
      isPretty : this.isPretty
    };
  }

  private restoreAppState() {
    console.log(this.appStateBeforeCamera);
    this.authService.changeCurrentUser(this.appStateBeforeCamera.authUser, this.appStateBeforeCamera.myUser);
    this.prettyUglyService.IsPretty = this.appStateBeforeCamera.isPretty 
    this.utilsService.changeRoute(this.appStateBeforeCamera.route);
  }

  public changeRoute(newRoute : string)
  {
    this.changeRouteEventEmitter.emit(newRoute);
  }
}
