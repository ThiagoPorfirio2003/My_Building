import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addIcons } from 'ionicons';
import { MyForm } from 'src/app/core/models/form.model';
import { MyUserAccessData } from 'src/app/core/models/user.model';
import { eye, eyeOff, eyeOutline, lockClosed, logIn, mail } from 'ionicons/icons';
import { MyStatus } from 'src/app/core/models/status.model';


@Component({
  selector: 'app-access-data-form',
  templateUrl: './access-data-form.component.html',
  styleUrls: ['./access-data-form.component.scss'],
})
export class AccessDataFormComponent implements OnChanges
{
  public loginForm : FormGroup;
  public passwordIsVisible : boolean;
  public passwordInputType! : string;
  public passwordEyeName! : string;
  public emailErrorText : string;
  public passwordErrorText : string;

  @Input() fastUser : MyUserAccessData;
  @Output() submitDataEventEmitter : EventEmitter<MyForm<MyUserAccessData>>;

  constructor() 
  { 
    addIcons({mail, lockClosed, logIn, eye, eyeOff});

    this.passwordIsVisible = true;
    this.showHidePassword();

    this.emailErrorText = '';
    this.passwordErrorText = ''

    this.loginForm = inject(FormBuilder).group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    })

    this.submitDataEventEmitter = new EventEmitter<MyForm<MyUserAccessData>>();

    this.fastUser = {email: '', password: ''};
  }
  
  ngOnChanges() : void 
  {
    this.loginForm.setValue(this.fastUser);
    this.emailErrorText = '';
    this.passwordErrorText = '';
}

  public showHidePassword()
  {
    if(this.passwordIsVisible)
    {
      this.passwordInputType = 'password'
      this.passwordEyeName = 'eye'
    }
    else
    {
      this.passwordInputType = 'text';
      this.passwordEyeName = 'eye-off'
    }

    this.passwordIsVisible = !this.passwordIsVisible;
  }

  public changeEmailErrorText()
  {
    let errors : any;

    errors = this.loginForm.controls['email'].errors
    this.emailErrorText = '';

    if(errors)
    {
      if(errors.required)
      {
        this.emailErrorText = 'Este campo no puede estar vacío';
      }
      else
      {
        if(errors.email)
        {
          this.emailErrorText = 'El correo ingresado no es válido';
        }
        else
        {
          if(errors.maxlength)
            {
              this.emailErrorText = 'Se superaron los 40 caracteres';
            }
        }
      }
    }
  }

  public changePasswordErrorText()
  {
    let errors : any;

    errors = this.loginForm.controls['password'].errors
    this.passwordErrorText = '';

    if(errors)
    {
      if(errors.required)
      {
        this.passwordErrorText = 'Este campo no puede estar vacío';
      }
      else
      {
        if(errors.minlength)
        {
          this.passwordErrorText = 'No se alcanzaron los 6 caracteres';
        }
        else
        {
          if(errors.maxlength)
            {
              this.passwordErrorText = 'Se superaron los 30 caracteres';
            }
        }
      }
    }
  }

  private validateData() : MyStatus
  {
    const formStatus : MyStatus = 
    {
      message: 
      {
        header: 'DATOS INVÁLIDOS', 
        content: 'Los datos ingresados NO cumplen con las condiciones'
      },
      success: this.loginForm.valid,
    };

    if(formStatus.success)
    {
      formStatus.message.header = 'ÉXITO';
      formStatus.message.content = 'Los datos ingresados cumplen con los requisitos'
    }

    return formStatus;
  }

  public submitData()
  {
    const userAccessData : MyForm<MyUserAccessData> = {} as MyForm<MyUserAccessData>;

    userAccessData.status = this.validateData();
    userAccessData.data = this.loginForm.value;

    this.submitDataEventEmitter.emit(userAccessData);
  }
  
}
