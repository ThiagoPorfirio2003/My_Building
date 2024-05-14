import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


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

  constructor() 
  { 
    this.savePhotoEventEmitter = new EventEmitter<Photo>();
    this.changeRouteEventEmitter = new EventEmitter<string>();
  }

  public async takePicture()
  {
    Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      saveToGallery: false,
      correctOrientation : true,
      source: CameraSource.Camera,
    })
    .then((photo)=>
    {
      this.savePhotoEventEmitter.emit(photo);
    });
  }

  public changeRoute(newRoute : string)
  {
    this.changeRouteEventEmitter.emit(newRoute);
  }
}
