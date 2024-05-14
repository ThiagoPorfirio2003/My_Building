import { Injectable } from '@angular/core';
import { Storage, StorageReference, StringFormat, getDownloadURL, ref, uploadBytes} from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class StorageService 
{
  private readonly SOURCE_PATH : string = 'myBuilding/photos/';
  private readonly PRETTY_THINGS_PATH : string = this.SOURCE_PATH + 'pretty/';
  private readonly UGLY_THINGS_PATH : string = this.SOURCE_PATH + 'ugly/';

  constructor(private storage : Storage) 
  {}          

  public async savePhoto(photo : Photo, isPretty : boolean, name : string) : Promise<string>
  {
    let imgRef : StorageReference;
    let pathImg : string;
    let error : any;
    let photoUrl : string;

    error = undefined;

    if(isPretty)
    {
      pathImg = this.PRETTY_THINGS_PATH;
    }
    else
    {
      pathImg = this.UGLY_THINGS_PATH;
    }

    imgRef = ref(this.storage, pathImg + name)

    try
    {
      await uploadBytes(imgRef, this.base64ToBlob(photo.base64String!, photo.format));
      photoUrl = await getDownloadURL(imgRef)
    }
    catch(e)
    {
      error = e;
    }

    return new Promise((resolve, reject)=>
    {
      if(error)
      {
        reject(error)
      }
      else
      {
        resolve(photoUrl);
      }
    });
  }

  private base64ToBlob(base64String: string, extension : string): Blob 
  {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'image/' + extension }); // Cambia el tipo MIME según tu necesidad
  }

  /*
  public async guardarUsuarioImagen(imagen : File, pathAGuardar : string) : Promise<Imagen>
  {
    let imgRef = ref(this.storage, pathAGuardar);
    let todoBien : boolean = false;
    let imagenRetorno : Imagen;
    let causaError : any;

    await uploadBytes(imgRef, imagen)
    .then((exito)=>
      getDownloadURL(imgRef)
      .then((url) =>
      {
        imagenRetorno = new Imagen(pathAGuardar, url);
        todoBien = true;
      })
      .catch(fracaso=> causaError = fracaso)
    )
    .catch(fracaso=> causaError = fracaso)

    return new Promise<Imagen>((resolve, reject)=>
    {
      if(todoBien)
      {
        resolve(imagenRetorno)
      }
      else
      {
        reject(causaError)
      }
    })
  }*/
}
