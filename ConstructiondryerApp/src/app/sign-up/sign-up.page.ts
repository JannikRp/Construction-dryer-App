import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {


  constructor(private authentication: AuthenticationService,  private toastController: ToastController) {
      
  }
  ngOnInit(): void {
      
  }
  user = {
    email: '',
    password: ''
  };

  async onSubmit() {
    try {
      await this.authentication.createAccount(this.user.email, this.user.password);
    } catch (error) {
      await this.presentToastOnLoginFailed(error.message)
    }
    
  }

  async presentToastOnLoginFailed(message: string) {
    const toast = await this.toastController.create({
      message: "Registrierung Fehlgeschlagen:" + message,
      duration: 2500,
      color: 'danger',
    });
    toast.present();
  }

}
