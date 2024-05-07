import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { MyUser, MyUserAccessData } from 'src/app/core/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   public myUser! : MyUser;
   public isLogued : boolean;

   constructor(private auth : Auth) 
   { 
     this.isLogued = false;
   }
 
   public logMyUser(userLoged : MyUser)
   {
     this.myUser = userLoged;
     this.isLogued = true;
   }
 
   
   public logIn(userAccessData : MyUserAccessData)
   {
     return signInWithEmailAndPassword(this.auth, userAccessData.email, userAccessData.password);
   }     
   public getAuthUser()
   {
     return this.auth.currentUser;
   }
 
   public logOut()
   {
     this.isLogued = false;
     //this.myUser = {} as UserModel;
     return signOut(this.auth);
   }
}
