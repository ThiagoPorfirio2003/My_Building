import { Injectable, inject } from '@angular/core';
import { setDoc, doc, Firestore, getDoc, collection, runTransaction, query, getDocs, limit, where, DocumentReference, orderBy, updateDoc, increment } 
from '@angular/fire/firestore';
import { MyImage } from '../models/myImage.model';
import { CollectionNames } from '../enums/collectionNames';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore : Firestore) 
  {}

  public getCollectionRef(collectionName : CollectionNames)
  {
    return collection(this.firestore, collectionName);
  }

  public getPhotoOrdered(collectionName : CollectionNames)
  {
    return getDocs(query(this.getCollectionRef(collectionName), orderBy('originDate','desc')));
  }

  public getDocRef(collectionName : CollectionNames, idDoc : string)
  {
    return getDoc(doc(this.firestore, collectionName, idDoc));
  }

  public saveImgData(myImg : MyImage)
  {
    let collectionName : string;

    if(myImg.isPretty)
    {
      collectionName = CollectionNames.PRETTY_PHOTOS;
    }
    else
    {
      collectionName = CollectionNames.UGLY_PHOTOS;
    }

    const docImg = doc(collection(this.firestore, collectionName));

    myImg.id = docImg.id;

    return setDoc(docImg,
      {
        id : myImg.id,
        isPretty : myImg.isPretty,
        url : myImg.url,
        originDate : myImg.originDate,
        ownerUID : myImg.ownerUID,
        ownerUserName : myImg.ownerUserName,
        likes : myImg.likes,
        name : myImg.name,
        UIDwhoLikes : myImg.UIDwhoLikes
      })
  }

  public updateLikes(collectionName : CollectionNames, photo : MyImage)
  {
    return updateDoc(doc(this.firestore, collectionName, photo.id),
    {
      likes: increment(1),
      UIDwhoLikes: photo.UIDwhoLikes
    })

  }


  /*
    public saveData(collectionName : CollectionNames, data : any, id? : string)
  {

    let docRef;

    if(id)
    {
      //docRef = doc(this.firestore, `${collectionName}/${id}`);
      docRef = doc(this.firestore, collectionName, id);
    }
    else
    {   
      docRef = doc(this.firestore, collectionName);
      data.id = docRef.id;
    }

    return setDoc(docRef, data);
  }

  public async saveNewUserData(newUser : UserModel) : Promise<UserModel>
  {
    let error : unknown;
    if(newUser.image.path == '' || newUser.image.url == '')
    {
      newUser.image.path = this.DEFAULT_USER_IMAGE_PATH;
      newUser.image.url = this.DEFAULT_USER_IMAGE_URL;
    }

    try
    {
      await this.saveNewUser(newUser);
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
        resolve(newUser);
      }
    });
  }
  

  private async saveNewUser(newUser : UserModel)
  {
    try 
    {
      await runTransaction(this.firestore, async (transaction) => 
      {
        const docUserNameRef = doc(this.firestore, this.UNIQUE_USER_NAMES_COLLETION_NAME + `/${newUser.userName}`);
        const docUserNameSnap =  await transaction.get(docUserNameRef)
        
        if(docUserNameSnap.exists()) 
        {
          const messageError : MyStatus = {header: 'Nombre ya usado', message: 'Eliga otro nombre de usuario', success: false}
          throw messageError;
        } 
        else 
        {
          transaction.set(docUserNameRef, {used : true});
          transaction.set(doc(this.firestore,this.USERS_COLLECTION_NAME, newUser.uid), newUser);
        }
      });      
    } 
    catch (e) 
    {
      throw e;
    }
  }
  */
}
