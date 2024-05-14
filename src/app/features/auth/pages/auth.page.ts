import { Component, OnInit } from '@angular/core';
import { SplashScreenModule } from '../../../features/splashScreen/modules/splash-screen.module';
import { MyUser, MyUserAccessData } from 'src/app/core/models/user.model';
import { UtilsService } from 'src/app/core/services/utils.service';
import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../../../core/services/database.service';
import { MyForm } from 'src/app/core/models/form.model';
import { MyStatus } from 'src/app/core/models/status.model';
import { CollectionNames } from 'src/app/core/enums/collectionNames';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage{

  private fastAccessUsers : Array<MyUserAccessData>;
  public fastAccessUserSelected : MyUserAccessData;

  constructor(private utilsServices : UtilsService,
    private authService : AuthService,
    private databaseService : DatabaseService) 
  { 
    this.fastAccessUsers = 
    [
      {email: 'admin@admin.com', password: '111111'},
      {email: 'invitado@invitado.com', password: '222222'},
      {email: 'usuario@usuario.com', password: '333333'},
      {email: 'anonimo@anonimo.com', password: '444444'},
      {email: 'tester@tester.com', password: '555555'},
    ]

    this.fastAccessUserSelected = {email: '', password: ''};
  }

  public changeFastAccessUserSelected(userIndex : number)
  {
    this.fastAccessUserSelected = this.fastAccessUsers[userIndex];
  }

  public async receiveAccessData(userAccessData : MyForm<MyUserAccessData>)
  {
    if(userAccessData.status.success)
    {
      const loading = await this.utilsServices.getLoadingCtrl({spinner: 'circular'});
      const loginStatus : MyStatus = {message: {header:'ERROR'}, success: false};

      await loading.present();

      try
      {
        const userCredential = await this.authService.logIn(userAccessData.data);

        const doc = await this.databaseService.getDocRef(CollectionNames.USER, userCredential.user.uid);

        if(doc.exists())
        {
          loginStatus.success = true;
          this.authService.logMyUser(doc.data() as MyUser);

          
          this.utilsServices.changeRoute('/principal-menu');
        }
      }
      catch(error : any)
      {          
        loginStatus.message.header = this.utilsServices.translateAuthError(error.code);
      }
      finally
      {
        if(!loginStatus.success)
        {
          loading.dismiss();
          this.utilsServices.showSweet({title: loginStatus.message.header, text: loginStatus.message.content, background: '#C800FA',
            customClass: {title: 'primaryColor', confirmButton: 'sweetConfirm'}})
        }
        else
        {
          loading.dismiss();
        }
      }
    }
    else
    {  
      this.utilsServices.showSweet({title: userAccessData.status.message.header, text: userAccessData.status.message.content, position: 'bottom', timer: 3000,
         showConfirmButton: false, customClass: 'toast', toast: true, timerProgressBar: true, background: '#2CCAAF'
      });
    }
  }
}
