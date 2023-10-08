import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { ExceptionData } from '@capacitor/core/types/util';
import { FirebaseError } from '@angular/fire/app';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private toastController: ToastController,  private authentication: AuthenticationService) {}

 async login() {
    
    try{
      await this.authentication.login(this.username, this.password)

    }catch (err: any) {
     await this.presentToastOnLoginFailed(err.message);    
    }
  }

  NavigateToSignUp(){
    this.navCtrl.navigateRoot('/sign-up');
  }


  
  async presentToastOnLoginFailed(message: string) {
    const toast = await this.toastController.create({
      message: "Anmeldung Fehlgeschlagen:" + message,
      duration: 2500,
      color: 'danger',
    });
    toast.present();
  }
}
