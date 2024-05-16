import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { thumbsDownSharp, thumbsUpSharp } from 'ionicons/icons';
import { myImage } from 'src/app/core/models/image.model';
import { AuthService } from '../../auth/services/auth.service';
import { MyImage } from 'src/app/core/models/myImage.model';
import { CollectionNames } from 'src/app/core/enums/collectionNames';
import { PrettyUglyService } from 'src/app/core/services/pretty-ugly.service';
import { DatabaseService } from 'src/app/core/services/database.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit
{
  public photos : Array<MyImage>;

  constructor(public authService : AuthService,
    public prettyUglyService : PrettyUglyService,
    public utilsService : UtilsService,
    private dataBaseService : DatabaseService) 
  { 
    this.photos = new Array<MyImage>();
    addIcons({thumbsUpSharp, thumbsDownSharp})
  } 

  ngOnInit(): void 
  {
    let collectionName : CollectionNames;

    this.dataBaseService.getPhotoOrdered(this.prettyUglyService.CollectionName)
    .then((results)=>
    {
      results.forEach((doc)=>
      {
        let photo : MyImage;

        photo = doc.data() as MyImage;

        //console.log(photo.originDate.toDate())
        photo.currentUserLike = false;

        for(let i : number =0;i < photo.UIDwhoLikes.length; i++)
        {
          if(photo.UIDwhoLikes[i] == this.authService.myUser.uid)
          {
            photo.currentUserLike = true;
            break;
          }
        }
        this.photos.push(photo);
      })
    })


  }

  public darLike(photo : MyImage)
  {
    photo.currentUserLike = true;
    photo.UIDwhoLikes.push(this.authService.myUser.uid);

    this.dataBaseService.updateLikes(this.prettyUglyService.CollectionName, photo)
    .catch((e)=>
    {
      photo.currentUserLike = false;
      photo.UIDwhoLikes.pop();
    })
  }
}
